import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      if (!inputPassword === inputCPassword) {
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
      alert("Welcome to Login Successfully");
      navigate("/login");
    } else {
      alert("something went wrong");
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
      <div className="d-flex justify-content-center">
        <div className="w-50 border border-2 px-2 py-3 mt-3 ">
          <h3 className="text-center bg-danger text-light py-2">signUp page</h3>

          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Enter Your Name"
              value={inputName}
            />
            <p className="text-danger">
              {submit && error.name?.errorStatus && error.name?.errorDetails}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setemail(e.target.value)}
              name="email"
              placeholder="Enter Your Email"
              value={inputEmail}
            />
            <p className="text-danger">
              {submit && error.email?.errorStatus && error.email?.errorDetails}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              onChange={(e) => setpassword(e.target.value)}
              name="password"
              value={inputPassword}
            />
            <p className="text-danger">
              {submit &&
                error.password?.errorStatus &&
                error.password?.errorDetails}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputCPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputCPassword"
              placeholder="Enter Your Confirm Password"
              onChange={(e) => setCpassword(e.target.value)}
              name="Cpassword"
              value={inputCPassword}
            />
            <p className="text-danger">
              {submit &&
                error.Cpassword?.errorStatus &&
                error.Cpassword?.errorDetails}
            </p>
          </div>
          <div className="my-3 ">
            <Link
              className="text-primary "
              style={{ cursor: "pointer" }}
              to="/login"
            >
              I have Already Accout
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary text-center"
            onClick={SignupHandler}
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
