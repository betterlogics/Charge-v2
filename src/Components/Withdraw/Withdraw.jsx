import React from "react";
import "./Withdraw.css";

export default function Withdraw() {
  return (
    <div className="Main_withdraw">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="withdraw_gr">
              <p>Contact Address: TRhDU8iU...pY55iJ</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="withdraw_gr">
              <p>Your wallet Adrees: TRhDU8iU...pY55iJ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row top_row mt-4">
          <div className="col-lg-5">
            <div className="row">
              <div className="Box_g col-6">
                <div className="Inner_g">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                  </svg>
                </div>
              </div>
              <div className="col-6 py-2 my-0 mt-2">
                <p className="m-0"> Total charge v2 balance </p>
                <p className="m-0">0 ChargeV2 </p>
                <p className="m-0">selling fast , Buy now</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 ml-4">
            <div className="row">
              <div className="Box_g col-6">
                <div className="Inner_g">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                  </svg>
                </div>
              </div>
              <div className="col-6 py-0 my-0 mt-4">
                <p className="m-0 white">Buy</p>
                <p className="m-0 ">ChargeV2 Tokens ($0)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div className="container">
        <div className="row mt-5 ">
          <div className="col-lg-6 col-sm-6">
            <h6 className="text-white"> Withdraw stake Earning</h6>
          </div>
          <div className="col-lg-6 col-sm-6">
            <button className="btn btn-primary ml-4 withdraw_btn">
              Active
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="withdraw_line"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-6 mari">
            <span className="withdraw_table">
              Total Available to Withdrawn:
            </span>
            <b className="text-white"> Charge v2 0 ($0)</b>
            <br />
            <span className="withdraw_table">Total Withdrawn:</span>
            <b className="text-white"> Charge v2 0 ($0)</b>
          </div>
          <div className="col-lg-6">
            <button className="btn withdraw_bt ">Withdraw stake Earing</button>
          </div>
        </div>
      </div>
      <small className="text-white small_p ">
        A Withdrawal fee of 1 ChargeV2 will be deducted.
      </small>

      <div className="container">
        <div className="row mt-5 ">
          <div className="col-lg-6">
            <h6 className="text-white"> Withdraw Refferal Reward</h6>
          </div>
          <div className="col-lg-6 ml-5">
            <button className="btn btn-primary ml-4 withdraw_btn">
              Active
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="withdraw_line"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-6">
            <span className="withdraw_table">
              Total Available to Withdrawn:
            </span>
            <b className="text-white"> Charge v2 0 ($0)</b>
            <br />
            <span className="withdraw_table">Total Withdrawn:</span>
            <b className="text-white"> Charge v2 0 ($0)</b>
          </div>
          <div className="col-lg-6">
            <button className="btn withdraw_bt ">
              Withdraw Refferal Reward
            </button>
          </div>
        </div>
      </div>
      <small className="text-white small_p ">
        A Withdrawal fee of 1 ChargeV2 will be deducted.
      </small>
    </div>
  );
}
