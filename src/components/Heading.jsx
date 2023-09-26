import styles from "./Heading.module.css";

const Heading = (props) => {
  const {title} = props;

  return <h1 className={styles.heading}>{title}</h1>
}

export default Heading;