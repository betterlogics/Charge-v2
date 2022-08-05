import React from "react";
import "./Header.css";
import logo from "../Assets/logo.png";
import { ToastContainer, toast } from "react-toastify";

function Header() {
  const notify = () => toast.warning("please login 0r install tron wallet");
//   toast.success("Success Notification !", {
//     position: toast.POSITION.TOP_RIGHT
//   });
// toast("Custom Style Notification with css class!", {
//     position: toast.POSITION.BOTTOM_RIGHT,
//     className: 'foo-bar'
//   });

  return (
    <div className="bg">
       

      <div className="circle">
        <img src={logo} alt="" className="imgbg" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="box">
              <h1 className="h1s">Sign In to Enter</h1>
              <h6>Connect to Tron Wallet</h6>
              <div className="line"></div>
              <div className="btn btn_s"  onClick={() => notify()}>Connect to the wallet</div>
              <div className="line"></div>
              <p>Connect to Your wallet to enter the dashboard.</p>
              <div
                class="alert alert-dismissible fade show ani hide"
                role="alert"
              >
                <span>please login or install tron wallet </span>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                 
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
