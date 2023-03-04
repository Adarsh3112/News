import React from "react";
import Images from '../images/paypal.webp'

export default function News(){
    return(
        <div className="main-thing" >
        //img devision start//
        <div className="main-img">
        <img src={Images}></img>
        </div>kj[ ]
            {/* img div ends here */}


        {/* //news letter div starts // */}
        <div className="news-letter" >
        <p className="" >The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.</p>
        </div>
        </div>
    )
}