import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CallToAction from "./components/CallToAction";
import SuccessMessage from "./components/SuccessMessage";

function App() {
  // State variables
  const [email, setEmail] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation variables
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailIsValid = Array.isArray(email.match(emailFormat));

  // Event handlers
  const inputHandler = (event) => {
    setEmail(event.target.value);
  };

  const buttonHandler = () => {
    if (isSubmitted) {
      setEmail("");
      setAttemptedSubmit(false);
      setIsSubmitted(false);
      return;
    }

    if (emailIsValid) {
      setIsSubmitted(true);
      return;
    }

    setAttemptedSubmit(true);
    return;
  };

  return (
    <Card className={`${isSubmitted ? "card--success" : ""}`}>
      {!isSubmitted ? (
        <CallToAction
          email={email}
          emailIsValid={emailIsValid}
          attemptedSubmit={attemptedSubmit}
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
