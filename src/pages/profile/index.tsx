import { useState } from "react";
import styles from "./profile-page.module.sass";

const Profile: React.FC<{ prop: any }> = (props) => {
  const [sideActive, SetSideActive] = useState("");
  const loginSideHandler = (e: any) => {
    e === "login" ? SetSideActive("login") : SetSideActive("signup");
  };
  return (
    <div className={styles.container}>
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
          <input />
          <label>Password</label>
          <input type="password" />
          <div className={styles.buttons}>
            <button>Forgot Password</button>
            <button>LOG IN</button>
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
          <button>SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
