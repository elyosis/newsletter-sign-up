import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const {text} = props;

  return (
    <div className={styles["cta__list-item"]}>
    <img src="src/assets/images/icon-list.svg" />
    <p>{text}</p>
    </div>
  )
}

export default ListItem;