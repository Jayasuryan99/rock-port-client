import React, { useEffect, useState } from "react";
import Bill from "../assets/bill.jpg";
import { useLocation } from "react-router";

function VehicleCopy(props) {
const {memo,datas}=props
  const [filterDatas, setFilterDatas] = useState([]);
  const location = useLocation();
  const [inputs, setInputs] = useState([]);
  const [filterMemo,setFilterMemo]=useState([])


  useEffect(() => {
    setFilterDatas(
      datas.filter((res) => {
        return res._id === location.pathname.split("/").splice(-1)[0];
      })[0]
    );

setFilterMemo(
  memo.filter((res)=>{
    return res._id===filterDatas?.memoId
   })[0]
)


    setInputs({
      consignor: filterDatas?.consignor,
      consignee: filterDatas?.consignee,
      quality: filterDatas?.quality,
      pmark: filterDatas?.pressmark,
      from: filterDatas?.locationfrom,
      to: filterDatas?.locationto,
      value: filterDatas?.valueofgoods,
      invoice: filterDatas?.invoiceno,
      lotno: filterDatas?.lotno,
      prno: filterDatas?.prnoform,
      gcno:filterMemo?.gcno,
      date:filterMemo?.date,
      lorryno:filterMemo?.vehicleno,
    
    });
  }, [datas, filterDatas,memo]);
 
//  console.log(filterMemo,"ll")
//  console.log(filterDatas,"pp")


  return (
    <div className='w-[100vw] flex items-center justify-center relative'>
    <img src={Bill} className='!w-[90vw] !h-[100vh]' alt='bill' /> 
      <div className="absolute flex  flex-col top-[26.5vh] left-[77vw]">
        <input type="text" className="!outline-none bg-transparent w-[27vw] text-black font-semibold  text-[12px]" defaultValue={inputs.date} />
        <input
          type="text"
          className="!placeholder:hidden bg-transparent w-[27vw] text-black font-semibold outline-none mt-[-5px] text-[12px]"
          name="gcno"
          defaultValue={inputs.gcno}
        />
      </div>
      <div className="absolute top-[29.9vh] left-[21vw] flex flex-col">
        <input
          type="text"
          defaultValue={inputs.lorryno}
          className="!outline-none bg-transparent w-[27vw] text-black font-semibold text-[12px]"
        />
        <input
          type="text"
          className="outline-none bg-transparent w-[27vw] text-black font-semibold  text-[12px]"
          defaultValue={inputs.from}
        />
        <input
          type="text"
          className="outline-none bg-transparent w-[27vw] text-black font-semibold  text-[12px]"
          defaultValue={inputs.consignor}
        />
        <input
          type="text"
          className="outline-none bg-transparent w-[27vw] text-black font-semibold  text-[12px]"
          defaultValue={inputs.consignee}
        />
      </div>

      <div className="absolute top-[32.5vh] right-[22vw] flex flex-col">
        <input
          type="text"
          className="!outline-none bg-transparent text-black font-semibold  text-[12px]"
          defaultValue={inputs.to}
        />
        <input
          type="text"
          className="outline-none bg-transparent  text-black font-semibold   text-[12px]"
         
        />
        <input
          type="text"

          className="outline-none bg-transparent text-black font-semibold   text-[12px]"
        />
      </div>

      <div className="flex flex-col top-[47vh] gap-[13px] left-[22vw] absolute">
        <input
          type="text"
          className="!outline-none bg-transparent text-black font-semibold   text-[12px]"
          defaultValue={3}
        />
        <input
          type="text"
          className="outline-none bg-transparent text-black font-semibold ml-[-26px]  text-[12px]"
          defaultValue={inputs.lotno}
        />
        <input
          type="text"
          className="outline-none bg-transparent text-black font-semibold ml-[-18px]   text-[12px]"
          defaultValue={inputs.prno}
        />
        <input
          type="text"
          className="!outline-none bg-transparent text-black font-semibold ml-[-22px]  text-[12px]"
          defaultValue={inputs.invoice}
        />
        <input
          type="text"
          className="outline-none bg-transparent text-black font-semibold ml-[54px]  text-[12px]"
          defaultValue={inputs.value}
        />
        <input
          type="text"
          className="outline-none bg-transparent  text-black font-semibold ml-[-28px]  text-[12px]"
          defaultValue={inputs.quality}
        />
        <input
          type="text"
          className="outline-none bg-transparent text-black font-semibold ml-[-20px]  text-[12px]"
          defaultValue={inputs.pmark}
        />
      </div>

      <div className="absolute flex  top-[50vh] gap-[20px] !left-[66vw]">
        <input type="text" className="!outline-none w-[105px] text-[12px] bg-transparent" defaultValue={"jhbevhr"}/>
        <input
          type="text"
          className="!placeholder:hidden bg-transparent outline-none  text-[12px]"
          defaultValue={"lerhvhjerh"}
        />
      </div>
    <p className="absolute bottom-[8vh] text-[10px] font-bold left-[45vw] text-gray-500">This is computer generated bill</p>
    </div>
  );
}

export default VehicleCopy;