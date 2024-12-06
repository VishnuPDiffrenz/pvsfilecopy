// import React from 'react';
import pvsIcon from "../assets/pvsIcon.svg";
import salesIcon from "../assets/salesIcon.svg";
// import bgImage from "../assets/pvsBg.jpg";
import profileDeault from "../assets/profileDefault.svg";
import apps from "../assets/apps.svg";
import defaultIcon from "../assets/defaultIcon.svg";
import purchaseIcon from "../assets/purchaseOrderQueue.svg";
import orderIcon from "../assets/orderQueue.svg";
import sortIcon from "../assets/sortIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import filterIcon from "../assets/filterIcon.svg";

const Sales = () => {

  const purchaseOrderQueueData = [
    {SN: "1",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024"},
    {SN: "2",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024"},
    {SN: "3",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024"},
    {SN: "4",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024"},
    {SN: "5",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024"},
    {SN: "6",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024"},
    {SN: "7",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024"},
    {SN: "8",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024"},
    {SN: "9",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024"},
    {SN: "10",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024"},
  ]

  const orderQueueData = [
    {SN: "1",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024",status: "Planned"},
    {SN: "2",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024",status: "In Progress"},
    {SN: "3",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024",status: "Delivered"},
    {SN: "4",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024",status: "Confirmed"},
    {SN: "5",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024",status: "Planned"},
    {SN: "6",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024",status: "Confirmed"},
    {SN: "7",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024",status: "Cancelled"},
    {SN: "8",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024",status: "Delivered"},
    {SN: "9",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024",status: "In Progress"},
    {SN: "10",orderNo: "343553553",deliverTo: "Brenntag Amsterdam",product: "ABS 70% Trading",Qty: "22.5T",deliveryDate: "20.10.2024",status: "Confirmed"},
  ]

    const getStatusColor = (status) => {
      switch (status.toLowerCase()) {
        case "in progress":
          return "bg-[#e89657] text-white";
        case "planned":
          return "bg-[#E0C127] text-white";
        case "confirmed":
          return "bg-[#52BF77] text-white";
        case "delivered":
          return "text-textThree";
        case "cancelled":
          return "bg-textFour text-white"
        default:
          return "";
      }
    };

  return (
    <div className="grid place-items-center">
      <header className="h-[10vh] w-[100vw] bg-white flex px-[5vw] py-3">
        <div className="flex">
          <img src={pvsIcon} alt="PVS Icon" />
          <img src={salesIcon} alt="Sales Icon" />
          <span className="text-2xl font-bold text-[#057B82]">Sales</span>
        </div>
        <div className="flex">
          <div className="flex">
            <img src={profileDeault} alt="Profile Icon" />
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold text-textOne">Richard V. Spencer</h2>
              <h3 className="text-xs text-primary">Lorem Ipsum</h3>
            </div>
            <select name="" id=""></select>
            <img src={apps} alt="Apps Icon" className="h-7" />
            <h2 className="text-textTwo">Apps</h2>
          </div>
        </div>
      </header>

      <div className="bg-slate-300 w-full px-[5vw] pt-5">

        <nav className="flex bg-white rounded-md">
          <div className="w-[20vw] text-center rounded-md bg-blue-100 py-1">
            <div className="flex items-center w-[50%] mx-auto">
              <img src={defaultIcon} alt="Default Icon" />
              <span className="text-primary">Default</span>
            </div>
          </div>
          <div className="w-[20vw] text-center rounded-md py-1">
            <div className="flex items-center w-[80%] mx-auto">
              <img src={purchaseIcon} alt="Purchase Icon" />
              <span className="text-textThree">Purchase Order Queue</span>
            </div>
          </div>
          <div className="w-[20vw] text-center rounded-md py-1">
            <div className="flex items-center w-[50%] mx-auto">
              <img src={orderIcon} alt="Order Icon" />
              <span className="text-textThree">Order queue</span>
            </div>
          </div>
        </nav>

        <div className="bg-white mt-2 border rounded-md flex">

          <div className="w-[50%] h-[70vh] border px-5 pt-3">
            <div className="w-[100%] h-[50vh]">
              <div className="flex justify-between">
                <h1 className="text-textTwo font-bold">Purchase Order Queue</h1>
                <button className="bg-gradient-to-r from-[#6FC5E1] to-[#33A3AA] text-white border-[#5BB7D3] px-2 py-1 rounded-md">
                  + CREATE NEW
                </button>
              </div>
              <div className="w-full flex border border-[#CFCFCF] rounded-md items-center pl-2 py-1 mt-3">
                <img src={searchIcon} alt="Search Icon"/>
                <input type="text" className="ml-2 w-full mr-2" placeholder="Search by order number, client or products" />
              </div>
              <div className="overflow-x-auto mt-3 ">
                <table className="max-w-full table-auto border rounded-xl">
                  <thead>
                    <tr className="text-xs text-textThree text-left border border-slate-300 tracking-wider bg-[#E2E2E2]">
                      <th className="border">
                        S.N
                      </th>
                      <th className="border">
                        <div className="flex">
                          <span>                        Order No
                          </span>
                          <img src={sortIcon} alt="Sort Icon" />
                        </div>
                      </th>
                      <th className="border">
                        <div className="flex">
                          <span>Deliver To</span>
                          <img src={sortIcon} alt="Sort Icon" />
                        </div>
                      </th>
                      <th className="border">
                        <div className="flex">
                          <span>Product</span>
                          <img src={sortIcon} alt="Sort Icon" />
                        </div>
                      </th>
                      <th className="border">
                        <div className="flex">
                          <span>Qty</span>
                          <img src={sortIcon} alt="Sort Icon" />
                        </div>
                      </th>
                      <th className="border">
                        <div className="flex">
                          <span>Delivery Date</span>
                          <img src={sortIcon} alt="Sort Icon" />
                        </div>
                      </th>
                      <th className="border">
                        <span>Att.</span>
                      </th>
                      <th className="border">
                        <span>Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      purchaseOrderQueueData.map((item,index) => (

                        <tr key={index} className={`text-xs text-textTwo border boder-slate-300 tracking-wide ${index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#E2E2E2]"}`}>
                          <td className="p-2 border">{item.SN}</td>
                          <td className="p-2 border">{item.orderNo}</td>
                          <td className="p-2 border">{item.deliverTo}</td>
                          <td className="p-2 border">{item.product}</td>
                          <td className="p-2 border">{item.Qty}</td>
                          <td className="p-2 border">{item.deliveryDate}</td>
                          <td className="p-2 border">symbol</td>
                          <td className="p-2 border">content</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="w-[50%] h-[70vh] border px-3 pt-3">
          <div className="w-[100%] h-[50vh]">
              <div className="flex justify-between">
                <h1 className="text-textTwo font-bold">Order Queue</h1>
                <button className="bg-blue-100 px-2 py-1 rounded-md flex items-center">
                  <img src={filterIcon} alt="Filter Icon" />
                  <span className="ml-2 font-semibold">Filter</span>
                </button>
              </div>
              <div className="w-full flex border border-[#CFCFCF] rounded-md items-center pl-2 py-1 mt-3">
                <img src={searchIcon} alt="Search Icon"/>
                <input type="text" className="ml-2 w-full mr-2" placeholder="Search by order number, client or products" />
              </div>              
              <div className="overflow-x-auto mt-3 ">
                <table className="max-w-full table-auto border rounded-xl">
                  <thead>
                    <tr className="text-xs text-textThree text-left border border-slate-300 tracking-wider bg-[#E2E2E2]">
                      <th className="border">
                        S.N
                      </th>
                      <th className="border">
                        <div className="flex">
                          <span>Order No</span>
                          <img src={sortIcon} alt="Sort Icon" />
                        </div>
                      </th>
                      <th className="border">
                        <div className="flex">
                          <span>Deliver To</span>
                          <img src={sortIcon} alt="Sort Icon" />
                        </div>
                      </th>
                      <th className="border">
                        <div className="flex">
                          <span>Product</span>
                          <img src={sortIcon} alt="Sort Icon" />
                        </div>
                      </th>
                      <th className="border">
                        <div className="flex">
                          <span>Qty</span>
                          <img src={sortIcon} alt="Sort Icon" />
                        </div>
                      </th>
                      <th className="border">
                        <div className="flex">
                          <span>Delivery Date</span>
                          <img src={sortIcon} alt="Sort Icon" />
                        </div>
                      </th>
                      <th className="border">
                        <span>Status</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orderQueueData.map((item,index) => (

                        <tr key={index} className={`text-xs text-textTwo border boder-slate-300 tracking-wide ${index % 2 === 0 ? "bg-[#F3F3F3" : "bg-[#E2E2E2]"}`}>
                          <td className="p-2 border">{item.SN}</td>
                          <td className="p-2 border">{item.orderNo}</td>
                          <td className="p-2 border">{item.deliverTo}</td>
                          <td className="p-2 border">{item.product}</td>
                          <td className="p-2 border">{item.Qty}</td>
                          <td className="p-2 border">{item.deliveryDate}</td>
                          <td className="p-2 border">
                            <span className={`rounded-md px-3 py-1 my-3 font-medium text-center ${getStatusColor(item.status)}`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Sales