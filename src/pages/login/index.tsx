import { useState } from "react";
import styles from "./login-page.module.sass";
import VistrasButton from "@/components/UI/viastras-button";

const Login: React.FC<{ prop: any }> = (props) => {
  const [sideActive, SetSideActive] = useState("");
  const loginSideHandler = (e: any) => {
    e === "login" ? SetSideActive("login") : SetSideActive("signup");
  };
  return (
    <div
      className={`${styles.container} ${
        sideActive === "" && styles.containerNotSelected
      }`}
    >
      <div
        className={`${styles.loginSide} ${
          sideActive === "login" && styles.loginSideActive
        }`}
        onClick={() => {
          loginSideHandler("login");
        }}
      >
        <form>
          <h3>LOG IN</h3>
          <label>E-mail</label>
          <input disabled={sideActive === "signup"} />
          <label>Password</label>
          <input type="password" disabled={sideActive === "signup"} />
          <div className={styles.buttons}>
            <VistrasButton
              text="Forgot Password"
              onClick={() => {}}
              disabled={sideActive === "signup"}
            />
            <VistrasButton
              text="Log In"
              onClick={() => {}}
              disabled={sideActive === "signup"}
            />
          </div>
        </form>
      </div>
      <div
        className={`${styles.signupSide} ${
          sideActive === "signup" && styles.signupSideActive
        }`}
        onClick={() => {
          loginSideHandler("signup");
        }}
      >
        <form>
          <h3>SIGN UP</h3>
          <label>Name</label>
          <input />
          <label>E-mail</label>
          <input />
          <label>Password</label>
          <input type="password" />
          <label>Reenter Password</label>
          <input type="password" />
          <div className={styles.buttons}>
            <VistrasButton
              text="Sign Up"
              onClick={() => {}}
              disabled={sideActive === "login"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
