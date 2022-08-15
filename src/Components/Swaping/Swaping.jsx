import React from 'react'
import{TbArrowBarToLeft} from "react-icons/tb";
import{TbArrowBarToRight} from "react-icons/tb";
import{IoIosArrowBack} from "react-icons/io";
import{IoIosArrowForward} from "react-icons/io";
import "./Swaping.css"

function swaping() {
  return (
    <div className='Main_swaping'>
        <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="withdraw_gr mt-4">
              <p>ChargeV1 price : 0 trx</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="withdraw_gr mt-4">
              <p>ChargeV2 price : 0 trx </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row swap_r">
            <div className="col-lg-12">
                <button className='btn swap_btn'>swap</button>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="swap_table">
            <div className="inner_swap">
            <p>Recent swaping Transaction</p>
            <button className='btn btn-primary swap_bt'>Action</button>
            </div>
            <div className="row mt-3 tr">
            <div className="col-2  ">
              <p className='marg'>#</p>
            </div>
            <div className="col-2 ">
              <p  className='marg' >Date</p>
            </div>
            <div className="col-2  ">
              <p className='marg' >Token</p>
            </div>
            <div className="col-2  ">
              <p className='marg' >Chargev1</p>
            </div>
            <div className="col-2  ">
              <p className='marg' >Chargev2</p>
            </div>
            <div className="col-2  ">
              <p className='marg' >Chargev2 $</p>
            </div>
          </div>
          <div className="swap_line"></div>
          <div className="wallet_footer">
            <div className="swap_fo">
    <p className="text-white mas">Rows per page</p>
    <div class="dropdown ">
  <button class="btn  dropdown-toggle drop_sta mad" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    5
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a className="dropdown-item active" href="#">10</a></li>
    <li><a className="dropdown-item" href="#">25</a></li>
    <li><a className="dropdown-item" href="#">All</a></li>
  
  </ul>
</div>
<p className='mas' >0-0 of 0</p>
<TbArrowBarToLeft className="text-white icon_sta"></TbArrowBarToLeft>
<IoIosArrowBack className="text-white icon_sta"></IoIosArrowBack>
<IoIosArrowForward className="text-white icon_sta"></IoIosArrowForward>
<TbArrowBarToRight className="text-white icon_sta"></TbArrowBarToRight>
</div>

</div>
<div className="swap_line"></div> 
          </div>

          </div>
         
          
        </div>

      </div>
      
    
  )
}

export default swaping
