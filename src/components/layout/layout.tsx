import Header from "../header/header";
import Footer from "../footer/footer";
import layoutStyle from "./layout.module.sass";

const Layout = ({ children }) => {
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
