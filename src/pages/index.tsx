import type { NextPage } from "next";
import Collection from "../components/organisms/Collection";

import Footer from "../components/footer/Footer";
import NavBar from "../components/header/NavBar";
import Main from "../components/organisms/Main";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Collection />
      <Footer />
    </div>
  );
};

export default Home;
