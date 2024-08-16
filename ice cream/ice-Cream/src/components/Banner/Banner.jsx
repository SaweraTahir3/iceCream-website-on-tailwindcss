import React from "react";
import iceImg from "../../images/girl.jpg";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={iceImg}
                  alt="ice img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl  italic  font-bold">
                  Crafting Moments of Sweetness
                </h1>
                <p className="text-1xl text-gray-500 tracking-wide  leading-7 justify-center italic  font-serif">
                  Our Story
                  At Scoops & Smiles, we believe in the power of ice cream
                  to create moments of joy and connection. Our journey began with a
                  simple mission: to craft the finest handcrafted ice creams using only the highest 
                  quality ingredients and time-honored recipes. From classic flavors that evoke nostalgia
                   to innovative creations that push the boundaries of taste, each scoop is a labor of love,
                   meticulously crafted to delight your senses. Join us on our sweet journey and experience the magic of Scoops & Smiles today!
                
              
               
              </p>
              <div className="flex gap-6">
                <div>
                  <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                </div>
                <div>
                  <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                </div>
                <div>
                  <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                </div>
              </div>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner;
