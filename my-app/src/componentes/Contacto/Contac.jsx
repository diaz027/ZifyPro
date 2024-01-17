import React from "react";
import { Button, Input } from "@nextui-org/react";
import "./contac.css";

function Email() {
  const variants = ["underlined"];

  return (
    <div className="email-container">
      <form action="https://formspree.io/f/xnqenwkr" method="POST">
        <div className="input-container">
          {variants.map((variant) => (
            <div key={variant}>
              <Input type="email" variant={variant} label="Email" />
              <Input name="message" variant={variant} label="Message" />
            </div>
          ))}
        </div>
        <Button type="submit" color="primary">
          Send
        </Button>
      </form>
    </div>
  );
}

export default Email;
