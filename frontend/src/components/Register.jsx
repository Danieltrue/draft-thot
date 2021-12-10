import React, { useEffect, useState } from "react";
import Registerstyle from "../style/components/Registerstyle";
import Container from "./Container";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//action
import { register } from "../action/userAction";
import Error from "./Error";
import {
  validateUsername,
  validateEmail,
  validateRole,
  validatePassword,
} from "../function/registerValidation";
import Spinner from "./Spinner";

const Register = (prop) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  //Redux Working.............
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //use selector
  const userRegister = useSelector((state) => state.userRegister);
  let { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [userInfo]);
  //sumit handlers
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(register(username, email, role, password));
  }

  return (
    <Registerstyle>
      <Container>
        <div className="form__inner">
          <div className="error">
            {error ? <Error message={`${error.data.error}`} /> : ""}
          </div>
          <h3 className="logo">
            <Link to="/">thout</Link>
          </h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="file" accept="image/*" name="file" />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter a Username"
                onBlur={(user) =>
                  validateUsername(user.target, 3, 15, setUsername)
                }
                required
              />
              <small>Error</small>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Password"
                onBlur={(user) => validateEmail(user.target, setEmail)}
                required
              />
              <small></small>
            </div>
            <div>
              <label htmlFor="role">Role</label>
              <input
                type="text"
                name="role"
                placeholder="Designer, Writer, Philospher"
                onBlur={(user) => validateRole(user.target, 3, 15, setRole)}
              />
              <small></small>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="passwords">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter a Password"
                  onBlur={(user) =>
                    validatePassword(user.target, 5, setPassword)
                  }
                />
              </div>
              <small>Error</small>
            </div>
            <div>
              <button type="submit" className="cta">
                {loading ? <Spinner /> : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </Container>
      <Footer login={false} />
    </Registerstyle>
  );
};

export default Register;
