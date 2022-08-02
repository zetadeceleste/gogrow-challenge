import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import { Input, InputPassword } from "../../../components/FormFields";
import { useAppContext } from "../../../context/AppContext";
import translations from "./../../../assets/translations/signup";

const SignupForm = () => {
  const { appData } = useAppContext();
  const language = appData?.language;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisabledSubmit(fullName && email && password ? false : true);
  }, [fullName, email, password]);

  const handleSocialMediaSign = (socialMedia) => {
    alert(`Start Signup with ${socialMedia} ...`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName,
      email,
      password,
    };

    setIsLoading(true);
    setDisabledSubmit(true);

    setTimeout(() => {
      setIsLoading(false);
      setDisabledSubmit(false);
      alert(`FormData: ${JSON.stringify(data)}`);
    }, 1000);
  };

  return (
    <div className="sign-up--form">
      <h2 className="title">{translations[language]?.formTitle}</h2>
      <div className="btn-wrapper">
        <Button
          name={translations[language]?.signUpGoogle}
          icon="google"
          onClick={() => handleSocialMediaSign("Google")}
        />
        <Button
          name={translations[language]?.signUpFacebook}
          icon="facebook"
          onClick={() => handleSocialMediaSign("Facebook")}
        />
      </div>
      <span className="separator">
        - {translations[language]?.otherOption} -
      </span>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <fieldset className="fieldset">
          <Input
            label={translations[language]?.userFullName}
            name="fullname"
            setValue={setFullName}
            type="text"
            required
          />
          <Input
            label={translations[language]?.userEmail}
            name="email"
            setValue={setEmail}
            type="email"
            required
          />
          <InputPassword
            label={translations[language]?.userPassword}
            name="password"
            setValue={setPassword}
            required
          />
        </fieldset>
        <Button
          name={translations[language]?.formButton}
          type="submit"
          disabled={disabledSubmit}
          loading={isLoading}
        />
      </form>
      <p className="link-login">
        {translations[language]?.askAccount}{" "}
        <Link to="/login">{translations[language]?.logIn}</Link>
      </p>
    </div>
  );
};

export default SignupForm;
