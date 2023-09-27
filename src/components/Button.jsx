import styles from "./Button.module.css";

const Button = (props) => {
  const { text, onSubmit } = props;

  return (
    <button className={styles.button} onClick={onSubmit}>
      {text}
    </button>
  );
};

export default Button;
