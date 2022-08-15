import React from "react";
import "./Trascation.css";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

function Transcation() {
  return (
    <div className="Trans_main">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="tarns_gr">
              <p className="font_sm">Contact Address: TRhDU8iU...pY55iJ</p>
            </div>
          </div>
          <div className="col-6">
            <div className="tarns_gr">
              <p className="font_sm">Contact Address: TRhDU8iU...pY55iJ</p>
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
      <div className="container">
        <div className="row">
          <div className="col-lg-">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle gre "
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="m-0 align">
                  {" "}
                  Sell Tokens{" "}
                  <span className="dis">
                    jjheflskfjskjlkjflnfkwnfckwijhfkfhwfjlfkjwlfjlwjflwjflwjflfjljlfjjlfjlfjlfjlfjwfjlfj2qlfjq2lfjflj2fnjng,mbg.,mnbgfkhjbkfnbivunbvmnbvukefjbiue,kmbv
                  </span>
                </span>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark wid"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a class="dropdown-item active" href="#">
                    Sell Tokens
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Buy Tokens
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Withdraw Tokens
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="table_div">
              <div className="row ">
                <div className="col-4 Tra_row ">
                  <p className="">Transaction</p>
                </div>
                <div className="col-4">
                  <p>Source</p>
                </div>
                <div className="col-4">
                  <p>Token</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="trans_foot">
                <div className="trans_foot">
                  <p className='Trans_sm'>Rows per page</p>
                  <div class="dropdown">
                    <button
                      class="btn  dropdown-toggle drop_sta"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      5
                    </button>
                    <ul
                      class="dropdown-menu  "
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
                  <p className='Trans_sm'>0-0 of 0</p>
                  <FaLessThan className="Trans_icon"></FaLessThan>
                  <FaGreaterThan className="Trans_icon"></FaGreaterThan>
                </div>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transcation;
