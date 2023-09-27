import styles from "./Image.module.css";

const Image = (props) => {
  const { mobileImg, desktopImg } = props;

  return (
    <picture>
      <source media="(min-width: 700px)" srcSet={desktopImg} />
      <img src={mobileImg} alt="" className={styles["sign-up__image"]} />
    </picture>
  );
};

export default Image;