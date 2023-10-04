import styles from "./Button.module.css";

const Button = (props) => {
  const { text, onSubmit } = props;
  const classes = `${styles.button} ${styles[`${props.className}`]}`

  return (
    <button className={classes} onClick={onSubmit}>
      {text}
    </button>
  );
};

export default Button;
