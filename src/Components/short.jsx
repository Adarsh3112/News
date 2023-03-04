import React from "react";

export default function Short (props){
    return (
        <div className="flex" >
    <img className="h-[100px] w-[100px] ml-[100px] mt-8" src={props.img1}></img>
    <p className="mt-[60px] ml-3">{props.heading1}</p>
  </div>
    )
}