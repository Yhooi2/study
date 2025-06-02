import CreateUser from './../features/user/CreateUser';

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h2 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <p className="text-yellow-500">
          Straight out of the oven, straight to you.
        </p>
      </h2>
      <CreateUser />
    </div>
  );
}

export default Home;
