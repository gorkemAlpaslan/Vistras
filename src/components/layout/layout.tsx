import Header from "../header/header";
import Footer from "../footer/footer";
import layoutStyle from "./layout.module.sass";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
