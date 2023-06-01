import { event1, event2, event3 } from "@/public/assests";
import Image from "next/image";
import React from "react";

const Events = () => {
  return (
    <section className="event-container pt-[40px]  ">
      <div className="subtitle">
        <span>PROMOTIONS</span>
        <h2>Our Promotions Events</h2>
      </div>

      {/** event banner  */}
      <div className="flex md:flex-row flex-col justify-items-center  justify-between gap-4  py-[30px] ">
        <div className="flex-1 flex flex-col   gap-4">
          <div className=" w-auto bg-[#d6d6d8] flex justify-between items-center px-8 tracking-wider text-[#212121] ">
            <div className="content">
              <h3 className="font-bold text-2xl md:text-3xl leading-tight text-center md:text-left">
                GET UPTO{" "}
                <span className="font-extrabold text-4xl md:text-5xl leading-tight text-[#212121]">
                  60%
                </span>{" "}
                {"  "} OFF
              </h3>
              <p className="font-normal text-base md:text-lg leading-normal text-center md:text-left">
                For the summer season
              </p>
            </div>
            <Image
              src={event1}
              alt="event"
              className="w-[260px] h-[200px] rounded-md"
            />
          </div>
          <div className="bg-[#212121] text-white flex flex-col justify-center items-center py-8 px-8">
            <h3 className="font-extrabold text-4xl leading-9 mb-4 text-center">
              {" "}
              GET{" "}
              <span className="font-extrabold text-4xl md:text-5xl leading-tight">
                30%
              </span>{" "}
              Off
            </h3>

            <p className="font-normal text-sm tracking-wide">USE PROMO CODE</p>
            <button className="font-bold text-sm  tracking-[0.25rem] text-white border-none bg-[#474747] py-2 px-10 mt-[5px] rounded-[8px]">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        {/** right side card-items of event promotion*/}
        <div className="bg-[#efe1c7] w-auto pt-6 flex flex-wrap justify-between sm:flex-col ">
          <div className="w-full ml-10">
            <p className="font-normal text-base tracking-wider">
              Flex Sweatshirt
            </p>
            <div className="price">
              <span className="relative line-through">$100.00</span>
              <span className="font-semibold text-lg ml-2.5">$75.00</span>
            </div>
          </div>
          <Image
            src={event2}
            alt="event2 pic"
            className="w-[280px] h-[340px] pt-4"
          />
        </div>
        {/** 2nd is above 3nd event image */}
        <div className="bg-[#d7d7d9] pt-6 flex w-auto flex-wrap justify-between sm:flex-col">
          <div className="w-full ml-10">
            <p className="font-normal text-base tracking-wider">
              Flex Push Button Bomber
            </p>
            <div className="price">
              <span className="relative line-through">$225.00</span>
              <span className="font-semibold text-lg ml-2.5">$190.00</span>
            </div>
          </div>
          <Image
            src={event3}
            alt="event2 pic"
            className="w-[280px] h-[340px] pt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
