import styles from "./Card.module.css";

const Card = (props) => {
  const classes = `${styles.card} ${styles[`${props.className}`]}`
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;