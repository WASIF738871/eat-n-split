import "./home.css";

const Home = () => {
  const signInWithGoogle = () => {
    console.log("sign in handled");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Home;
