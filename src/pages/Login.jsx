import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loggedInUser,
  storageUser,
} from "../storageOperations/storageOperations";
import toast, { Toaster } from "react-hot-toast";
// import "./Login.css";

const Login = ({ setUpdate }) => {
  const navigate = useNavigate();

  const [inputEmail, setemail] = useState("");
  const [inputPassword, setpassword] = useState("");
  const [submit, setsubmit] = useState(false);
  const [error, setError] = useState({});
  const [update, setupdate] = useState(0);

  // console.log(update)
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
            toast.success(`Welcome  ${loggedInUser().name}`);
          }
        }
        setemail("");
        setpassword("");
        toast.success("Invalid Details !");
      }
    } else {
      toast.success("Something Wrong !");
    }
  }

  // referes the page

  useEffect(() => {
    setupdate(1);
    if (submit) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [submit, navigate, update]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div class="container46">
          <Toaster position="top-center" reverseOrder={false} />
          <div class="brand-logo"></div>
          <div class="brand-title text-center">Instgram</div>
          <div class="inputs">
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="example@test.com"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setemail(e.target.value)}
              name="email"
              value={inputEmail}
            />

            <p className="text-danger">
              {error.email?.errorStatus && error.email?.errorDetails}
            </p>
            <label>PASSWORD</label>
            <input
              type="password"
              placeholder="Min 6 charaters long"
              id="exampleInputPassword1"
              onChange={(e) => setpassword(e.target.value)}
              name="password"
              value={inputPassword}
            />
            <p className="text-danger">
              {error.password?.errorStatus && error.password?.errorDetails}
            </p>
            <button type="submit" onClick={submitHandler}>
              LOGIN
            </button>
            <div className="my-3">
              <Link
                className="text-primary "
                style={{ cursor: "pointer" }}
                to="/signup"
              >
                Create New Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
