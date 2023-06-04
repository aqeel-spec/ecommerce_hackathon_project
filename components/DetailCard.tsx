"use client";
import { client } from "@/src/lib/sanityClient";
import { usePathname, useRouter } from "next/navigation";
import { IProduct } from "@/src/types/product";

import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "./ImageBuilder";
import { Button } from "./ui/button";
import { CgShoppingCart } from "react-icons/cg";
import { formatPrice } from "@/src/lib/helper";

const DetailCard = ({ data }: { data: IProduct[] }) => {
  const [index, setIndex] = useState(0);
  console.log("card data is ->", data);
  return (
    <div className="products p-20 w-full h-auto ">
      {data &&
        data.map((item) => (
          // head section
          <div className="" key={item._id}>
            <div className="flex gap-4  min-h-min justify-evenly  ">
              {/** left images section */}
              <div className=" space-y-4 ">
                {item.images.map((img, ind) => (
                  <img
                    key={ind}
                    src={urlFor(img).url()}
                    onMouseEnter={() => setIndex(ind)}
                    alt="product image"
                    className="object-cover object-top h-[100px] w-[100px] "
                  />
                ))}
              </div>
              {/* middle big image */}
              <div className=" w-[40%] h-[60%]  ">
                <img
                  src={urlFor(item.images && item.images[index]).url()}
                  alt={item.name}
                  className="h-[100%] w-[100%] "
                />
              </div>
              {/* add to cart details */}
              <div className="flex flex-col gap-y-4 my-auto ">
                <div className=" gap-y-2 ">
                  <h1 className=" font-normal text-2xl leading-[0.5rem] mb-2 ">
                    {" "}
                    {item.name}{" "}
                  </h1>
                  <h2 className=" text-2xl font-semibold opacity-30 ">
                    {" "}
                    {item.tag.tag}{" "}
                  </h2>
                </div>
                <div className="size">
                  <p className="text-primary">SELECT SIZE</p>
                  <ul className="size flex  gap-8 mt-4">
                    <li>XS</li>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                  </ul>
                </div>
                <div className="flex items-center gap-4">
                  <h1 className=" font-bold text-base text-black ">
                    Quantity :{" "}
                  </h1>
                  <div className="flex items-center text-center gap-4">
                    <div className="btn2">-</div>
                    <p>1</p>
                    <div className="btn3">+</div>
                  </div>
                </div>
                <div className="flex gap-4 items-center ">
                  <Button className="hbtn rounded-xl text-lg font-normal gap-1 m-2 p-6 text-white ">
                    {" "}
                    <CgShoppingCart size={20} /> Add to card
                  </Button>
                  <h1 className="text-2xl  font-bold "> {formatPrice(item.price,"PKR")} </h1>
                </div>
              </div>
            </div>
            {/* Product Information */}
            <div className="product-desc-container">
              <div className="desc-title ">
                <div className="desc-background">OVERVIEW</div>
                <h1>Product Information</h1>
              </div>
              {/* desc and care details */}
              <div className="flex flex-1  gap-12">
                <h4 className=" w-full flex-grow font-bold text-base leading-6 text-shade ">PRODUCT DETAILS</h4>
                <p className=" flex-grow font-light text-base tracking-wider leading-7 text-justify text-primary ">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-1  gap-2  ">
              <h4 className=" font-bold text-base leading-6 text-shade ">PRODUCT CARE</h4>
                <ul className=" list-disc mx-auto  font-light text-base tracking-wider leading-7 text-justify text-black">
                  {item.care.map((list,ind) => (
                    <li className="" key={ind} >
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DetailCard;
