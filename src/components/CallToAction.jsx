import Image from "./Image";
import Heading from "./Heading";
import ListItem from "./ListItem";
import CTAForm from "./CTAForm";
import styles from "./CallToAction.module.css";

const CallToAction = (props) => {
  const {onSubmit} = props;
  return (
    <>
      <Image
        mobileImg="src/assets/images/illustration-sign-up-mobile.svg"
        desktopImg="src/assets/images/illustration-sign-up-desktop.svg"
      />
      <div className={styles["sign-up"]}>
        <Heading title="Stay updated!" />
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className={styles["sign-up__list-items"]}>
          <ListItem text="Product discovery and building what matters" />
          <ListItem text="Measuring to ensure updates are a success" />
          <ListItem text="And much more!" />
        </div>
        <CTAForm onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default CallToAction;
