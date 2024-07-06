import { Link } from "react-router-dom";
import { all } from "../Data/all";
import StandartContainer from "./StandartContainer";
import { useState } from "react";

export default function All(){
    const [selectedCategory, setSelectedCategory] = useState("");
    function filterByCategory(item) {
      return !selectedCategory || item.category === selectedCategory;
    }
   const filteredShop = all.filter(
      (item) =>
        filterByCategory(item) 
    );
  const content=(
        <>
         <div className=" ">
        
        <select
          name=""
          id=""
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-6 text-[#757575] text-sm font-font-Header bg-black"
        >
          <option value="">All Categories</option>
          {all &&
            Array.from(new Set(all.map((item) => item.category))).map(
              (category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            )}
        </select>
        
     
      </div>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
           {filteredShop.map((item, index) => {
            return (
              <div key={index} className="flex  ">
                <div className="h-50 w-50   ">
                    <Link to={`/single-all/${item.id}/${item.category}`}
                    className=" text-red-500 hover:text-[#E55472] text-base ">
                        <img src={item.cover_image} className=""/>
                    </Link>
                  
               {/* <div className="bg-[#9FA4B2] text-white text-sm font-font-Header text-center absolute h-40 bottom-0 left-0 translate-y-12 group-hover:translate-y-0 transition-all duration-300">
               <div>
                    {item.title}

                  </div>
                  <div>
                    {item.text}
                    
                  </div>
               </div> */}
               </div>
            </div>
            );
          })}
           </div>

        </>
    )
    return <StandartContainer content={content} />
}