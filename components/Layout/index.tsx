import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { PageContent } from "./styles";
import type { LayoutProps } from "./types";

const Layout = ({ title, keywords, description, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navigation />
      <PageContent>{children}</PageContent>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Napper Network Base Template / Starter",
  description:
    "An extended create-next-app template using typescript, styled-components, jest, eslint, prettier, husky and commitlint .",
  keywords: "typescript, styled-components, jest, husky",
};

export default Layout;
