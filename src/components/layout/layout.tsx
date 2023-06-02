import Header from "../header/header";
import Footer from "../footer/footer";
import layoutStyle from "./layout.module.sass";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.header}>
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
