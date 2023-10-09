import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const {text} = props;

  return (
    <div className={styles["sign-up__list-item"]}>
    <img src="/images/icon-list.svg" />
    <p>{text}</p>
    </div>
  )
}

export default ListItem;