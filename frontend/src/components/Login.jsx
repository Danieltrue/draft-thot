import React, { useState, useEffect } from "react";
import Loginstyle from "../style/components/Login";
import Container from "./Container";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../action/userAction";
import { validateEmail, validatePassword } from "../function/loginValidation";
import Spinner from "./Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetail = useSelector((state) => state.userLogin);
  let { error, loading, userInfo } = userDetail;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(email, password));
  }

  useEffect(() => {
    if (userInfo) {
      navigate("/thought");
    }
  }, [userInfo]);
  return (
    <Loginstyle>
      <Container>
        <div>
          <div className="error">
            {error ? <Error message={`${error.data.error}`} /> : ""}
          </div>
          <h3 className="logo">
            <Link to="/">thout</Link>
          </h3>
          <form action="#" onSubmit={(user) => handleSubmit(user)}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                required
                placeholder="Enter Your Email"
                onBlur={(user) => validateEmail(user.target, setEmail)}
              />
              <small>error</small>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="passsword"
                required
                placeholder="Enter Your Password"
                onChange={(user) => setPassword(user.target.value)}
              />
              <small>error</small>
            </div>
            <div>
              <button type="submit" className="cta">
                {loading ? <Spinner /> : "log in"}
              </button>
            </div>
          </form>
        </div>
      </Container>
      <Footer login={true} />
    </Loginstyle>
  );
};

export default Login;
