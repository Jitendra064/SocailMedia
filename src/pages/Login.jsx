import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storageUser } from "../storageOperations/storageOperations";

const Login = ({ setUpdate }) => {
  const navigate = useNavigate();

  const [inputEmail, setemail] = useState("");
  const [inputPassword, setpassword] = useState("");
  const [submit, setsubmit] = useState(false);
  const [error, setError] = useState({});

  function submitHandler() {
    // Form validation check

    let varify = () => {
      let valid = true;

      let localError = {
        email: {
          errorStatus: "false",
          errorDetails: "",
        },
        password: {
          errorStatus: "false",
          errorDetails: "",
        },
      };

      if (!inputEmail.endsWith("gmail.com")) {
        localError.email.errorStatus = true;
        localError.email.errorDetails = "Please Enter Right Email";
        valid = false;
      } else if (inputEmail < 1) {
        localError.email.errorStatus = true;
        localError.email.errorDetails = "Email must be required";
        valid = false;
      }
      if (inputPassword < 6) {
        localError.password.errorStatus = true;
        localError.password.errorDetails = "Password must be required";
        valid = false;
      }

      setError(localError);
      return valid;
    };

    if (varify()) {
      if (storageUser()) {
        // to check user is exit in
        let getItem = JSON.parse(localStorage.getItem("userData"));
        for (let i = 0; i < getItem.length; i++) {
          let user = getItem[i];
          if (user.email === inputEmail && user.password === inputPassword) {
            setsubmit(true);

            //  when user email or password right to make a new key
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            setUpdate(1);

            alert("welcome  to login to successfully");
          }
        }
        setemail("");
        setpassword("");
      }
    }
  }

  useEffect(() => {
    if (submit) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [submit, navigate]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="w-50 border border-2 px-2 py-3 mt-3 ">
          <h3 className="text-center bg-danger text-light py-2">Login page</h3>
          <form>
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
                value={inputEmail}
              />
              <p className="text-danger">
                {error.email?.errorStatus && error.email?.errorDetails}
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
                onChange={(e) => setpassword(e.target.value)}
                name="password"
                value={inputPassword}
              />
              <p className="text-danger">
                {error.password?.errorStatus && error.password?.errorDetails}
              </p>
            </div>
            <div className="my-3">
              <Link
                className="text-primary "
                style={{ cursor: "pointer" }}
                to="/signup"
              >
                Create New Account
              </Link>
            </div>
          </form>
          <button
            type="submit"
            className="btn btn-primary text-center"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
