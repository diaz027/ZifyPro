"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import style from "./contac.module.css";

function Email() {
  const variants = ["underlined"];

  return (
    <div id="contacto">
      <div className={style.contac}>
        <div className={style.emailContainer}>
          <div className={style.textFind}>
            <h2>Conéctate para colaborar ya.</h2>
          </div>
          <form action="https://formspree.io/f/xnqenwkr" method="POST">
            <div className={style.inputContainer}>
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
      </div>
    </div>
  );
}

export default Email;