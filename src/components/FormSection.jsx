import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function FormSection() {
  return (
    <>
      <div className="py-5">
        <h3 className="text-white font-bold p-2">Form Section</h3>
        <form className="m-5">
          <FontAwesomeIcon icon={faUser} className="text-white" />
          <input className="m-2 rounded-md" maxLength="12" type="text" />
          <FontAwesomeIcon icon={faLock} className="text-white" />
          <input className="m-2 rounded-md" maxLength="12" type="password" />

          <Button text="Sign In" className="p-2" />
        </form>
      </div>
    </>
  );
}
