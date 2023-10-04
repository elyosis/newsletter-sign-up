import Input from "./Input";
import Button from "./Button";

const CTAForm = (props) => {
  const {onSubmit} = props;
  return (
    <form action="">
      <Input />
      <Button className={"button--form"} text="Subscribe to monthly newsletter" onSubmit={onSubmit} />
    </form>
  );
};

export default CTAForm;