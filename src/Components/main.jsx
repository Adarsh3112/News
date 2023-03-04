import React from "react";
import '../App.css'
import Cover from '../images/cover.avif'
import Short from '../Components/short'
import data2 from '../Components/data2'
export default function Main(){
  const SubEl = data2.map(head=>{
    return(
  <Short img1 = {head.img1} heading1 = {head.heading1} key = {head.id}/>
    )
  })
    return(
    <div className=" flex  md:flex-row lg:flex-row sm:flex-col mt-[20px] ml-[30px]" >

    <div class="border-b-2 divide-y p-2">
    <header>
    <h1 class="text-5xl font-bold ">THE LIGHT STAR</h1>
    <div class="flex mt-[10px]">
      <p className="font-bold text-[17px] p-2" >Friday, <span className="font-normal text-[17px] text-gray-500">March 3, 2023 <span className="border-r-2 ml-2 "></span></span></p>
      <p class="uppercase text-red-600 text-[20px] p-2 ">your right to know</p>
    </div>
    </header>
<div className=" flex justify-start md:flex-row sm:flex-col lg:flex-row" >
  <img className="h-[500px] w-[500px] pt-6 flex" src={Cover} ></img>
  <div>
  <h3 className="font-bold text-2xl ml-[100px] mt-[20px]  text-red-500" >LATEST NEWS</h3>
  {SubEl}
  </div>
</div>
  </div>
  <div>
  </div>
  
    </div>
 
    )
}