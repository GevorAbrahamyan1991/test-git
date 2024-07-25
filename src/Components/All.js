import { Link } from "react-router-dom";
import { all } from "../Data/all";
import StandartContainer from "./StandartContainer";
import { useState } from "react";

export default function All() {
  const [selectedCategory, setSelectedCategory] = useState("");
  function filterByCategory(item) {
    return !selectedCategory || item.category === selectedCategory;
  }
  const filteredAll = all.filter((item) => filterByCategory(item));

  const [count, setCount] = useState(6);
  const content = (
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
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAll.slice(0, count).map((item, index) => {
          return (
            <div key={index} className="">
              <Link
                to={`/single-all/${item.id}/${item.category}`}
                className=" text-red-500 hover:text-[#E55472] text-base "
              >
                <div className="h-96 relative group">
                  <div className="absolute w-0 h-full bg-[#f1f1f1] top-0 left-0 overflow-hidden group-hover:w-full transition-all duration-300 text-[#444444] ">
                    <div className="py-72 p-10">
                      <div className="text-base">
                      {item.title}
                      </div>
                      <div className="text-xs">
                      {item.text}
                      </div>                   
                    </div>
                    
                  </div>
                  <img
                    src={item.cover_image}
                    className="w-full h-full object-cover"
                  />
                  </div>
              </Link>
            </div>
          );
        })}
         {filteredAll.slice(9, count).map((item, index) => {
          return (
            <div key={index} className="">
              <Link
                to={`/single-all/${item.id}/${item.category}`}
                className=" text-red-500 hover:text-[#E55472] text-base "
              >
                <div className="h-96 relative group">
                  <div className="absolute w-0 h-full bg-[#f1f1f1] top-0 left-0 overflow-hidden group-hover:w-full transition-all duration-300 text-[#444444] ">
                    <div className="py-72 p-10">
                      <div className="text-base">
                      {item.title}
                      </div>
                      <div className="text-xs">
                      {item.text}
                      </div>                   
                    </div>
                    
                  </div>
                  <img
                    src={item.cover_image}
                    className="w-full h-full object-cover"
                  />
                  </div>
              </Link>
            </div>
          );
        })}
        <button
          className="text-white border rounded-2xl border-white p-4 "
          onClick={() => setCount(count + 3)}
        >
          Click
        </button>
      </div>
    </>
  );
  return <StandartContainer content={content} />;
}
