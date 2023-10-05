import styles from "./Button.module.css";

const Button = (props) => {
  const { text, onClick } = props;
  const classes = `${styles.button} ${styles[`${props.className}`]}`

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
