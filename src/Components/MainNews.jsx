import React from "react";

export default function MainNews(props){
    return (
        <div className="flex flex-col mt-10" >
            <img className="h-[600px] w-[95%] mx-auto mt-[30px] md:flex-col sm:flex-col lg:flex-row" src={props.image} ></img>
            <p className="mx-auto font-bold text-center text-4xl mt-10  md:flex-row sm:flex-col" >{props.heading}</p>

        <div className="flex text-center justify-center md:flex-col sm:flex-col lg:flex-row ">
       <p className=" mt-[30px] mr-[10px] ml-[10px] mb-20 font-normal" >{props.news1}</p>
        </div> 
        <hr></hr>
        </div>
        
    )
}