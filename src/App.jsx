import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CallToAction from "./components/CallToAction";
import SuccessMessage from "./components/SuccessMessage";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailSubmit = () => {
    setIsSubmitted((prevValue) => !prevValue);
  };

  return (
    <Card className={`${isSubmitted ? "card--success" : ""}`}>
      {!isSubmitted ? (
        <CallToAction onSubmit={emailSubmit} />
      ) : (
        <SuccessMessage onSubmit={emailSubmit} />
      )}
    </Card>
  );
}

export default App;
