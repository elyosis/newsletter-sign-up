import Card from "./Card";
import Image from "./Image";
import Heading from "./Heading";
import ListItem from "./ListItem";
import CTAForm from "./CTAForm";

const CallToAction = () => {
  return (
    <Card>
      <Image
        mobileImg="src/assets/images/illustration-sign-up-mobile.svg"
        desktopImg="src/assets/images/illustration-sign-up-desktop.svg"
      />
      <div>
      <Heading title="Stay updated!" />
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ListItem text="Product discovery and building what matters" />
      <ListItem text="Measuring to ensure updates are a success" />
      <ListItem text="And much more!" />
      <CTAForm />
      </div>
    </Card>
  );
};

export default CallToAction;
