import styles from "./SuccessMessage.module.css";
import Button from "./Button";
import Heading from "./Heading";

const SuccessMessage = (props) => {
  const { onSubmit } = props;
  return (
    <div className={styles["sign-up--success"]}>
      <div className={styles["sign-up__text--success"]}>
        <img src="src/assets/images/icon-success.svg" />
        <Heading title="Thanks for subscribing!" />
        <p>
          A confirmation email has been sent to{" "}
          <span className={styles["sign-up__email"]}>ash@loremcompany.com</span>
          . Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <Button text="Dismiss message" onSubmit={onSubmit} />
    </div>
  );
};

export default SuccessMessage;