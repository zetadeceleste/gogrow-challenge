import React, { useEffect, useState } from "react";

import SignUpForm from "./Form";
import Dropdown from "../../../components/Dropdown";
import { useAppContext } from "../../../context/AppContext";
import languagesList from "../../../mocks/languages";
import { types } from "../../../types";
import Logo from "./../../../assets/img/logo.png";
import SignupImage from "./../../../assets/img/signup-img.png";
import translations from "./../../../assets/translations/signup";

const SignUp = () => {
  const { appData, dispatch } = useAppContext();
  const [language, setLanguage] = useState(appData?.language || "enUk");

  useEffect(() => {
    dispatch({
      type: types.SAVE_LANGUAGE,
      payload: {
        language,
      },
    });
    // eslint-disable-next-line
  }, [language]);

  return (
    <section className="sign-up">
      <div className="container">
        <div className="first-wrapper">
          <img
            className="logo"
            src={Logo}
            alt={translations[language].altLogo}
          />
          <h1 className="title">{translations[language].title}</h1>
          <div className="image">
            <img src={SignupImage} alt={translations[language].altImage} />
          </div>
        </div>
        <div className="second-wrapper">
          <div className="lang-dropdown">
            <Dropdown
              name="languages"
              values={languagesList}
              setValue={setLanguage}
              selected={language}
            />
          </div>
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
