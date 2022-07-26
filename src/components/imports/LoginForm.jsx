import React from "react";

export default function LoginForm(props) {
  return (
    <div className="col-sm-7 bg-color align-self-center">
      <div>
        <div className="form-section">
          <div className="title">
            <h3>Sign into your account</h3>
          </div>
          <div className="login-inner-form">
            <form method="POST">
              <div className="form-group form-box">
                <input
                  type="text"
                  id="email"
                  className="input-text"
                  placeholder="Email Address"
                />
                <i className="icon email"></i>
              </div>

              <div className="form-group form-box">
                <input
                  type="password"
                  id="password"
                  className="input-text"
                  placeholder="Password"
                />
                <i className="icon lock"></i>
              </div>

              <div className="form-group">
                <button className="btn primary-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
