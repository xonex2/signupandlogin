import { useState } from "react";
import "./App.css";

function App() {
  const [isLoginView, setIsLoginView] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setForm({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setShowPassword(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="page">
      <div className="card">
        {/* Top logo */}
        <img src="/klu.jpg" className="logo" alt="logo" />

       
        <h2>{isLoginView ? "Sign In" : "Create Account"}</h2>

        {!isLoginView && (
          <>
            <div className="input-box">
              <img src="/user.jpg" alt="" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <img src="/phone.jpg" alt="phone" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <div className="input-box">
          <img src="/mail.jpg" alt="email" />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <img src="/lock.jpg" alt="lock" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <img
            src="/eye.jpg"
            className="eye"
            alt="eye"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        {!isLoginView && (
          <div className="input-box">
            <img src="/lock.jpg" alt="confirm password" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
        )}

        {isLoginView && <p className="forgot">Forgot password?</p>}

        <button className="btn">
          {isLoginView ? "Get Started" : "Register"}
        </button>

        <p className="switch">
          {isLoginView ? "New here?" : "Already have an account?"}
          <span onClick={toggleView}>
            {isLoginView ? " Create Account" : " Login Here"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
