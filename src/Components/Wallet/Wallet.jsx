import React from "react";
import "./Wallet.css";
import { TbArrowBarToLeft } from "react-icons/tb";
import { TbArrowBarToRight } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function Wallet() {
  return (
    <div className="Main_wallet">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="withdraw_gr mt-4">
              <p>Contact Address: TRhDU8iU...pY55iJ</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="withdraw_gr mt-4">
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
              <div className="col-6 py-0 my-0 mt-2">
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

      <div className="container Main_table">
        <div className="heade">
          <div className="row mb-5">
            <div className="col-lg-6 col-sm-6 text-white">
              Recent wallet Transactions
            </div>
            <div className="col-lg-6 col-sm-6">
              <button className="btn btn-primary wallet_bt">Action</button>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">
            <p className="text-white sm">#</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">Date</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">Transaction id</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">Amount</p>
          </div>
        </div>
        <div className="wallet_linee"> </div>

        <div className="row mt-2">
          <div className="col-3">
            <p className="text-white sm">1</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">Fab/13/2022</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">b915e115...370e8142</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">200</p>
          </div>
        </div>
        <div className="wallet_linee"> </div>

        <div className="row mt-2">
          <div className="col-3 ">
            <p className="text-white sm">2</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">Fab/13/2022</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">b915e115...370e8142</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">NaN</p>
          </div>
        </div>
        <div className="wallet_linee"> </div>
        <div className="row mt-2">
          <div className="col-3">
            <p className="text-white sm">3</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">Fab/13/2022</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">b915e115...370e8142</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">20</p>
          </div>
        </div>
        <div className="wallet_linee"> </div>
        <div className="row mt-2">
          <div className="col-3">
            <p className="text-white sm">4</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">Fab/13/2022</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">b915e115...370e8142</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">NAN</p>
          </div>
        </div>
        <div className="wallet_linee"> </div>
        <div className="row mt-2">
          <div className="col-3">
            <p className="text-white sm">5</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">Fab/13/2022</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">b915e115...370e8142</p>
          </div>
          <div className="col-3">
            <p className="text-white sm">NAN</p>
          </div>
        </div>
        <div className="wallet_linee"> </div>

        <div className="wallet_footer">
          <p className="text-white masd">Rows per page</p>
          <div class="dropdown ">
            <button
              class="btn  dropdown-toggle drop_sta Wallet_fbtn"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              5
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a className="dropdown-item active" href="#">
                  10
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  25
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
            </ul>
          </div>
          <p className="masd">1-5 of 60</p>
          <TbArrowBarToLeft className="text-white icon_sta"></TbArrowBarToLeft>
          <IoIosArrowBack className="text-white icon_sta"></IoIosArrowBack>
          <IoIosArrowForward className="text-white icon_sta"></IoIosArrowForward>
          <TbArrowBarToRight className="text-white icon_sta"></TbArrowBarToRight>
        </div>

        <div className="wallet_linee"> </div>
      </div>

      <div className="HIIDEN">HELLO</div>
    </div>
  );
}

export default Wallet;
