import styles from "./Input.module.css";

const Input = () => {
  return (
    <>
      <label htmlFor="email" className={styles["sign-up__label"]}>Email address</label>

      <input
        type="email"
        id="email"
        pattern=".+@globex\.com"
        placeholder="email@company.com"
        className={styles["sign-up__input"]}
        required
      />
    </>
  );
};

export default Input;