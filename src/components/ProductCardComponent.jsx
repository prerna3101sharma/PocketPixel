import React from 'react'
import { IoIosStar } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { NavLink } from 'react-router';
import { CiDeliveryTruck } from "react-icons/ci";

const ProductCardComponent = (props) => {
  return (
    // <div className='border-3 bg-[#1a1a1a] border-[#333333] border-b-[#404040] border-r-[#404040] 
    // p-6 pt-2 rounded-[10px] min-h-[400px] h-full w-full cursor-pointer 
    // transform hover:scale-[1.03] transition-transform duration-200 ease-in-out' onClick={() => {
    //     window.open(`${props.url}`, "_blank")
    //   }}>
    <NavLink to={`/product/${props.id}`}>

          <div className='border-3 bg-[#1a1a1a] border-[#333333] border-b-[#404040] border-r-[#404040] 
    p-6 pt-2 rounded-[10px] min-h-[400px] h-full w-full cursor-pointer 
    transform hover:scale-[1.03] transition-transform duration-200 ease-in-out'>
      <img src={props.image} className='w-[130px] mx-auto my-4 h-[130px] min-h-30 max-h-80 object-contain' alt="" />
      <h3 className='mt-2 font-bold text-white'>{props.title}</h3>
      <h4 className='font-bold text-white mt-2 text-2xl'>Price: {props.price}</h4>
      {props.rating && <h5 className='text-white bg-green-600 w-15 text-center rounded-sm my-3 flex justify-items-center align-middle p-1.5'>{Number(props?.rating)?.toFixed(1)} <div className='p-1'><IoIosStar /></div></h5>}

      <span className='text-white my-3 p-1.5 flex'>

      ⦿&nbsp;
        {props.delivery?.split("Or")[0]?.toUpperCase()}
      </span>
      <span className='text-white my-3 p-1.5 flex'>

        {props.delivery?.split("Or")[1]?<>⦿&nbsp;<>{props.delivery?.split("Or")[1]?.toUpperCase()}</></>:<></>}
      </span>
      <span className='text-white my-3 p-1.5 flex'>

        {props.delivery?.split("Only ")[1]?<>⦿&nbsp;ONLY&nbsp;{props.delivery?.split("Only ")[1]?.toUpperCase()}</>:<></>}
      </span>
    </div>
    </NavLink>
  )
}

export default ProductCardComponent
