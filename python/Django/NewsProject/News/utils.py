class MyMixin(object):
    mixin_group = "my_mixin"
    
    def get_prop(self):
        return self.mixin_group.upper()
    
    def get_upper(self,s):
        if isinstance(s, str):
            return s.upper()
        else:
            return s.title.upper()