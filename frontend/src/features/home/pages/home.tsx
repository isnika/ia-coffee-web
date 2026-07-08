import React from "react";
import styles from "./home.module.css";
import Hero from "../components/hero/hero";
import Menu from "../components/menu/menu";
import About from "../components/about/about";
import Company from "../components/company/company";
import Partners from "../components/Partners/partners";

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <Hero />
      <Menu />
      <About />
      <Company />
      <Partners />
    </div>
  );
};

export default Home;
