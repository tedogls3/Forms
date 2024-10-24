import { useState } from "react";

function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.length < 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!enteredValues.email.length) return;

    console.log("http request sent!");
    setEnteredValues({
      email: "",
      password: "",
    });

    setDidEdit(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            value={enteredValues.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email addres.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            value={enteredValues.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
          <div className="control-error">
            {passwordIsInvalid && <p>Password shoud be minium 6 characters.</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

export default StateLogin;
