var NewComponent = React.createClass({
    render: function() {
      return (
          <div>
  
        {/* Login-Registration Form  */}
        <div className="registration-login-form">
          {/* Nav tabs */}
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home" role="tab">
                <svg className="olymp-login-icon"><use xlinkHref="#olymp-login-icon" /></svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#profile" role="tab">
                <svg className="olymp-register-icon"><use xlinkHref="#olymp-register-icon" /></svg>
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane active" id="home" role="tabpanel">
              <div className="title h6">Register to Olympus</div>
              <form className="content">
                <div className="row">
                  <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group label-floating">
                      <label className="control-label">First Name</label>
                      <input className="form-control" placeholder type="text" />
                    </div>
                  </div>
                  <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group label-floating">
                      <label className="control-label">Last Name</label>
                      <input className="form-control" placeholder type="text" />
                    </div>
                  </div>
                  <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group label-floating">
                      <label className="control-label">Your Email</label>
                      <input className="form-control" placeholder type="email" />
                    </div>
                    <div className="form-group label-floating">
                      <label className="control-label">Your Password</label>
                      <input className="form-control" placeholder type="password" />
                    </div>
                    <div className="form-group date-time-picker label-floating">
                      <label className="control-label">Your Birthday</label>
                      <input name="datetimepicker" defaultValue="10/24/1984" />
                      <span className="input-group-addon">
                        <svg className="olymp-calendar-icon"><use xlinkHref="#olymp-calendar-icon" /></svg>
                      </span>
                    </div>
                    <div className="form-group label-floating is-select">
                      <label className="control-label">Your Gender</label>
                      <select className="selectpicker form-control">
                        <option value="MA">Male</option>
                        <option value="FE">Female</option>
                      </select>
                    </div>
                    <div className="remember">
                      <div className="checkbox">
                        <label>
                          <input name="optionsCheckboxes" type="checkbox" />
                          I accept the <a href="#">Terms and Conditions</a> of the website
                        </label>
                      </div>
                    </div>
                    <a href="#" className="btn btn-purple btn-lg full-width">Complete Registration!</a>
                  </div>
                </div>
              </form>
            </div>
            <div className="tab-pane" id="profile" role="tabpanel">
              <div className="title h6">Login to your Account</div>
              <form className="content">
                <div className="row">
                  <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group label-floating">
                      <label className="control-label">Your Email</label>
                      <input className="form-control" placeholder type="email" />
                    </div>
                    <div className="form-group label-floating">
                      <label className="control-label">Your Password</label>
                      <input className="form-control" placeholder type="password" />
                    </div>
                    <div className="remember">
                      <div className="checkbox">
                        <label>
                          <input name="optionsCheckboxes" type="checkbox" />
                          Remember Me
                        </label>
                      </div>
                      <a href="#" className="forgot" data-toggle="modal" data-target="#restore-password">Forgot my Password</a>
                    </div>
                    <a href="#" className="btn btn-lg btn-primary full-width">Login</a>
                    <div className="or" />
                    <a href="#" className="btn btn-lg bg-facebook full-width btn-icon-left"><i className="fab fa-facebook-f" aria-hidden="true" />Login with Facebook</a>
                    <a href="#" className="btn btn-lg bg-twitter full-width btn-icon-left"><i className="fab fa-twitter" aria-hidden="true" />Login with Twitter</a>
                    <p>Don’t you have an account? <a href="#">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* ... end Login-Registration Form  */}
        </div>
      );
    }
  });