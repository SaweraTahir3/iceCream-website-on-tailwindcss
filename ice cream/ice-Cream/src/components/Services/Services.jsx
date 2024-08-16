import React from "react";
import Img from "../../images/ice1.webp";
import Img2 from '../../images/ice2.jpeg'
import Img3 from "../../images/ice1.webp";

const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "American Sundae",
    description:
      " Creamy vanilla ice cream, known for its smooth texture and subtle sweetness.",
  },
  {
    id: 2,
    img: Img2,
    name: "Caramel Sundae",
    description:
      "A caramel sundae is a classic and indulgent dessert caramel sauce",
      
  },
  {
    id: 3,
    img: Img3,
    name: "American Sundae",
    description:
      "This dessert begins with a generous serving of rich, creamy vanilla iceCream, known for its smooth texture and subtle sweetness.",
      
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className=" bg-clip-text text-4xl text-transparent bg-gradient-to-r from-primary to-secondary  font-serif   ">
          Discover Our Delicious Offerings
          <br/>
          
            </p>
            <h1 className="text-2xl font-normal font-serif ">Every Scoop Tells a Story...</h1>
           <br/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary  dark:hover:bg-primary relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[175px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                   
                  </div>
                  <h1 className="text-2xl font-serif">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-black duration-high text-sm line-clamp-2">
                    {service.description}
                    <button>Order Now</button>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
