import styles from "./Input.module.css";

const Input = (props) => {
  const {email, onInput} = props;

  return (
    <>
      <label htmlFor="email" className={styles["sign-up__label"]}>Email address</label>

      <input
        type="email"
        id="email"
        pattern=".+@globex\.com"
        placeholder="email@company.com"
        value={email}
        onChange={(event) => onInput(event)}
        className={styles["sign-up__input"]}
        required
      />
    </>
  );
};

export default Input;