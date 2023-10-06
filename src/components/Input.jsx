import styles from "./Input.module.css";

const Input = (props) => {
  const { email, emailIsValid, attemptedSubmit, onInput } = props;
  const classes = `${styles["sign-up__label"]} ${
    !emailIsValid && attemptedSubmit ? styles["sign-up__error"] : styles["sign-up__error--initial"]
  }`;

  return (
    <>
      <div className={styles["sign-up__messages"]}>
        <label htmlFor="email" className={styles["sign-up__label"]}>
          Email address
        </label>
        <span className={classes}>Valid email required</span>
      </div>

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
