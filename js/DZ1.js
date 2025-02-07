class Graphics {
    constructor(canvasID, smooth=false, game=false) {
      this.link = canvasID;
      this.smooth = smooth;
      this.game = game;
      this.vertexShaders = {};
      this.fragmentShaders = {};
      this.programList = {};
      this.colorLocation = false;
      this.positionBuffer = false;
      this.reset();
      this.GLprogram('default',
        this.shader('default', 'vertex', `
        attribute vec2 a_position;
        uniform mat4 u_matrix;
        void main() {
            gl_Position = u_matrix * vec4(a_position, 0, 1);
        }
      `), this.shader('default', 'fragment', `
        precision mediump float;
        uniform vec4 u_color;
        uniform float u_time;
        void main() {
            gl_FragColor = vec4(u_color.r / 255.0, u_color.g / 255.0, u_color.b / 255.0, u_color.a);
        }
      `),
      (program, gl) => {
        program.pLocation = gl.getAttribLocation(program, 'a_position');
        program.cLocation = gl.getUniformLocation(program, 'u_color');
        program.tLocation = gl.getUniformLocation(program, 'u_time');
        program.mLocation = gl.getUniformLocation(program, 'u_matrix');
        gl.uniformMatrix4fv(program.mLocation, false, [
          1, 0, 0, 0,
          0, -1, 0, 0,
          0, 0, -1, 0,
          -1, 1, 0, 1
        ]);
        gl.vertexAttribPointer(program.pLocation, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(program.pLocation);
      },
      (program, gl, count=0, update, params={}, fill='TRIANGLE_STRIP') => {
        gl.uniform1f(program.tLocation, params.time || (performance.now() * .001));
        gl.uniform4f(program.cLocation, ...(params.cLocation || [0, 0, 0, 1]));
        update(program, gl);
        gl.vertexAttribPointer(program.buffPosition, 2, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl[fill], 0, count);
      });
      this.GLprogram('image',
        this.shader('image', 'vertex', `
          attribute vec2 a_position;
          attribute vec2 a_texcoord;
          uniform mat4 u_matrix;
          varying vec2 v_TexCoord;
          uniform float u_angle;
          uniform vec2 v_offset;
          uniform vec2 v_ratio;
          mat4 rotate(float angle) {
              float c = cos(angle);
              float s = sin(angle);
              return mat4(
                  c, -s, 0.0, 0.0,
                  s,  c, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  0.0, 0.0, 0.0, 1.0
              );
          }
          mat4 translate(vec2 pos) {
              return mat4(
                  1.0, 0.0, 0.0, 0.0,
                  0.0, 1.0, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  pos.x, pos.y, 0.0, 1.0
              );
          }
          mat4 scale(float sx, float sy) {
              return mat4(
                  sx, 0.0, 0.0, 0.0,
                  0.0, sy, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  0.0, 0.0, 0.0, 1.0
              );
          }
  