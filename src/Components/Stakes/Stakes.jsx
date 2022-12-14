import React from "react";
import "./Stakes.css";
import { BiArrowToLeft } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowBarToRight } from "react-icons/tb";

function Stakes() {
  return (
    <div className="Main_stakes">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 mt-3">
            <div className="Green_div">
              <p className="text-white">Contact Address: TRhDU8iU...pY55iJ</p>
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="Green_div">
              <p className="text-white">Contact Address: TRhDU8iU...pY55iJ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row top_row mt-4">
          <div className="col-lg-4">
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
              <div className="col-6 py-0 my-0 mt-3">
                <p className="m-0 res_sm"> Your Stakes</p>
                <p className="m-0 res_sm">0 ChargeV2 </p>
                <p className="m-0 res_sm">3% Daily Rewards</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="Box_g col-6">
                <div className="Inner_g Extra">
                  <div className="Word">
                    <h6 className="">$0</h6>
                    <br />
                    <h6>USD</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
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
                <p className="m-0 res_sm">Available Reward</p>
                <p className="m-0 res_sm ">0 ChargeV2 ($0)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="Stake_h">Stake Your ChargeV2</h4>
      <p className="text-center Stake_para">Earn Reward upto 3% Daily !</p>
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
              <div className="col-6 py-2 my-0 mt-4 idk">
                
                <p className="m-0">Maximum Rewards</p>
                <p className="m-0">0 ChargeV2 </p>
              </div>
              </div>

      <div className="container">
        <div className="row Stake_r">
          <div className="col-lg-10">
            <button className="btn Stake_btn">Stake</button>
          </div>
        </div>
      </div>
      <h6 className="px-3 mt-4 mb-4">Recent Stake Transactions</h6>
      <div className="container">
        <div className="row Table">
          <div className="col-2  p-0">
            <p  className="table">Transaction ID</p>
          </div>
          <div className="col-2  p-0">
            <p  className="table">Source</p>
          </div>
          <div className="col-2  p-0">
            <p  className="table">Days Left</p>
          </div>
          <div className="col-2  p-0">
            <p  className="table">Amount</p>
          </div>
          <div className="col-2 p-0">
             <p  className="table">Duration</p>
          </div>
          <div className="col-2 p-0">
            <p className="table">Max Reward</p>
          </div>
        </div>
      </div>
      <div className="stake_line"></div>

      <div className="padd"></div>
      <div className="stake_line"></div>
      <div className="Stake_footer">
        <p  className="Table_para1">Rows per page:</p>
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
        <p  className='Table_para1'>0-0 of 0</p>
        <BiArrowToLeft className="icon_sta"></BiArrowToLeft>
        <IoIosArrowBack className="icon_sta"></IoIosArrowBack>
        <IoIosArrowForward className="icon_sta"></IoIosArrowForward>
        <TbArrowBarToRight className="icon_sta"></TbArrowBarToRight>
      </div>
      <div className="stake_line Sta_pa"></div>

   
      <div className="py-5">
        <h1 className="none">hello </h1>
      </div>
    </div>
  );
}

export default Stakes;
