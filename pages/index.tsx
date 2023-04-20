import type { NextPage } from "next";
import { Layout } from "../components";
import { Example } from "../slices";

const Home: NextPage = () => {
  return (
    <Layout>
      <Example />
    </Layout>
  );
};

export default Home;
