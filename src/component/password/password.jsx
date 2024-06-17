import React, { useState } from "react";
import "./password.css";

const PasswordGenerator = () => {
  const [passwordlengths, setPasswordLength] = useState(8);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbercase, setNumbercase] = useState(true);
  const [symblecase, setSymblecase] = useState(true);
  const [password, setPassword] = useState("");
  function GeneratePassword() {
    let casemix = "";
    if (uppercase) casemix += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) casemix += "abcdefghijklmnopqrstuvwxyz";
    if (numbercase) casemix += "0123456789";
    if (symblecase) casemix += `~!@#$%^&*()_-+={[}]|\:;"'<,>.?/`;
    let generatepassword = "";
    if (passwordlengths > 5) {
      for (let i = 0; i < passwordlengths; i++) {
        const randomindex = Math.floor(Math.random() * casemix.length);
        generatepassword += casemix[randomindex];
          document.getElementById("showpassword").style.color="black"
         
      }
    } else {
      let showPass_al = document.getElementById("showpassword");
      showPass_al.placeholder =
        "*** Password length should be greater-than 5 ***";
    }
    if (uppercase || lowercase || numbercase || symblecase) {
      setPassword(generatepassword);
    } else {
      setPassword("** Plz Select the Case Above **");
      document.getElementById("showpassword").style.color="red"
    }
  }
  function copypass() {
    if (uppercase || lowercase || numbercase || symblecase) {
      navigator.clipboard.writeText(password);
    } else {
      setPassword("** Plz Select the Case Above **");
       document.getElementById("showpassword").style.color="red"
     
    }
  }
  return (
    <div className="continer">
      <div className="base">
        <h1>STRONG PASSWORD GENERATOR</h1>
        <div className="INPUT-PASSWORD">
          <label htmlFor="password">Password Length:</label>
          <input
            type="text"
            id="password"
            value={passwordlengths}
            onChange={(e) => {
              setPasswordLength(Number(e.target.value));
            }}
          />
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="Upper"
            checked={uppercase}
            onChange={(e) => {
              setUppercase(e.target.checked);
            }}
          />
          <label htmlFor="Upper">include Uppercase</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="lower"
            checked={lowercase}
            onChange={(e) => {
              setLowercase(e.target.checked);
            }}
          />
          <label htmlFor="lower">include lowercase</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="number"
            checked={symblecase}
            onChange={(e) => {
              setSymblecase(e.target.checked);
            }}
          />

          <label htmlFor="number">include symboles</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="symboles"
            checked={numbercase}
            onChange={(e) => {
              setNumbercase(e.target.checked);
            }}
          />
          <label htmlFor="symboles">include number</label>
        </div>
        <div className="button">
          <button onClick={GeneratePassword} id="genPAss">generate password</button>
        </div>
        <div className="show-PASSWORD">
          <label htmlFor="showpassword">Password Length:</label>
          <input type="text" id="showpassword" value={password} />
          <button onClick={copypass}>copy password</button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
