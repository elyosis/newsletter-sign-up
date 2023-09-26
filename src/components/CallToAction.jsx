import Card from "./Card";
import Image from "./Image";
import Heading from "./Heading";
import ListItem from "./ListItem";
import CTAForm from "./CTAForm";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <Card>
      <Image
        mobileImg="src/assets/images/illustration-sign-up-mobile.svg"
        desktopImg="src/assets/images/illustration-sign-up-desktop.svg"
      />
      <div className={styles["cta__text"]}>
        <Heading title="Stay updated!" />
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className={styles["cta__list-items"]}>
          <ListItem text="Product discovery and building what matters" />
          <ListItem text="Measuring to ensure updates are a success" />
          <ListItem text="And much more!" />
        </div>
        <CTAForm />
      </div>
    </Card>
  );
};

export default CallToAction;
