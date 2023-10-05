import Input from "./Input";
import Button from "./Button";

const CTAForm = (props) => {
  const {email, onInput, onSubmit} = props;
  return (
    <form action="">
      <Input email={email} onInput={onInput} />
      <Button className={"button--form"} text="Subscribe to monthly newsletter" onClick={onSubmit} />
    </form>
  );
};

export default CTAForm;