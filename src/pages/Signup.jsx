/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [inputEmail, setemail] = useState("");
  const [inputPassword, setpassword] = useState("");
  const [inputName, setName] = useState("");
  const [inputCPassword, setCpassword] = useState("");
  const [error, setError] = useState({});
  const [submit, setsubmit] = useState(false);

  let newUser = {
    name: inputName,
    email: inputEmail,
    password: inputPassword,
    Cpassword: inputCPassword,
  };

  function SignupHandler() {
    let varify = () => {
      let valid = true;

      let localError = {
        name: {
          errorStatus: false,
          errorDetails: "",
        },
        email: {
          errorStatus: "false",
          errorDetails: "",
        },
        password: {
          errorStatus: "false",
          errorDetails: "",
        },
        Cpassword: {
          errorStatus: "false",
          errorDetails: "",
        },
      };

      if (inputName.length < 4) {
        localError.name.errorStatus = true;
        localError.name.errorDetails = "name is required in 4 char's";
        valid = false;
      }

      if (!inputEmail.endsWith("gmail.com")) {
        localError.email.errorStatus = true;
        localError.email.errorDetails = "Please Enter Right Email";
        valid = false;
      } else if (inputEmail.length < 1) {
        localError.email.errorStatus = true;
        localError.email.errorDetails = "Email must be required";
        valid = false;
      }
      if (inputPassword.length < 6) {
        localError.password.errorStatus = true;
        localError.password.errorDetails = "Password must be required 6 char's";
        valid = false;
      }
      if (inputPassword !== inputCPassword) {
        localError.Cpassword.errorStatus = true;
        localError.Cpassword.errorDetails = "password are not match";
        valid = false;
      }
      setError(localError);
      return valid;
    };
    setsubmit(true);

    console.log(varify());
    if (varify()) {
      newUser.email = inputEmail;
      newUser.password = inputPassword;
      newUser.name = inputName;
      newUser.Cpassword = inputCPassword;
      localStorage.setItem("userData", JSON.stringify(user.concat(newUser)));
      navigate("/login");
    } else {
      toast.success("Something Went wrong!");
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      localStorage.setItem("userData", "[]");
    } else {
      setUser(JSON.parse(localStorage.getItem("userData")));
    }
  }, []);

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="container45">
          <Toaster position="top-center" reverseOrder={false} />
          {/* <div className="brand-logo"></div> */}
          <div className="brand-title text-center">Signup</div>
          <div className="inputs">
            <label>NAME</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              name="name"
              aria-placeholder="Enter Your Name"
              value={inputName}
            />
            <p className="text-danger">
              {submit && error.name?.errorStatus && error.name?.errorDetails}
            </p>
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="example@test.com"
              onChange={(e) => setemail(e.target.value)}
              name="email"
              aria-placeholder="Enter Your Email"
              value={inputEmail}
            />
            <p className="text-danger">
              {submit && error.email?.errorStatus && error.email?.errorDetails}
            </p>
            <label>PASSWORD</label>
            <input
              type="password"
              placeholder="Min 6 charaters long"
              onChange={(e) => setpassword(e.target.value)}
              name="password"
              value={inputPassword}
            />
            <p className="text-danger">
              {submit &&
                error.password?.errorStatus &&
                error.password?.errorDetails}
            </p>
            <label>CONFIRM PASSWORD</label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              onChange={(e) => setCpassword(e.target.value)}
              name="Cpassword"
              value={inputCPassword}
            />
            <p className="text-danger">
              {submit &&
                error.Cpassword?.errorStatus &&
                error.Cpassword?.errorDetails}
            </p>
            <button type="submit" onClick={SignupHandler}>
              SIGNUP
            </button>
            <Link to="/login">
              <p className="pb03 mt-2">I have Already Account</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
