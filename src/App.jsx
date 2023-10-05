import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CallToAction from "./components/CallToAction";
import SuccessMessage from "./components/SuccessMessage";

function App() {
  // State variables
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation variables
  const fieldIsEmpty = email.trim() === "";
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const formatIsValid = email.match(emailFormat);

  const emailIsValid = !fieldIsEmpty && formatIsValid;

  // Event handlers
  const inputHandler = (event) => {
    setEmail(event.target.value);
  };

  const buttonHandler = () => {
    if (isSubmitted) {
      setEmail("");
      setIsSubmitted(false);
      return;
    }

    if (emailIsValid) {
      setIsSubmitted(true);
    } else {
      return;
    }
  };

  return (
    <Card className={`${isSubmitted ? "card--success" : ""}`}>
      {!isSubmitted ? (
        <CallToAction
          email={email}
          onInput={inputHandler}
          onSubmit={buttonHandler}
        />
      ) : (
        <SuccessMessage email={email} onDismiss={buttonHandler} />
      )}
    </Card>
  );
}

export default App;
