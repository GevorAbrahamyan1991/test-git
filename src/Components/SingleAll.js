import StandartContainer from "../Components/StandartContainer";
import { Link, useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { all } from "../Data/all";
import { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
export default function SingleAll() {
  const { id } = useParams();
  const { category } = useParams();
  const [index, setIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const openLightbox = (clickedIndex) => {
    setIndex(clickedIndex);
    setOpen(true);
  };

  const SingleAll = all.find((items) => items.id == id);
  const FilteredAll = all.filter(
    (item) => item.category == category && item.id != id
  );
  const slides = SingleAll.gallery.map((item) => {
    return { src: item.src };
  });

  const content = (
    <>
      <div className="grid  md:grid-cols-1 lg:grid-cols-2">
        <div className="">
          {SingleAll.flexible == "true" && (
            <div className="my-4">
              <Lightbox
                close={() => {
                  setIndex(-1);
                  setOpen(false);
                }}
                controller={{ closeOnBackdropClick: true }}
                index={index}
                open={open}
                slides={slides}
              />

              <div className="">
                {slides &&
                  slides.map((item, index) => {
                    return (
                      <div key={index}>
                        <img
                          src={item.src}
                          alt={item.alt}
                          onClick={() => openLightbox(index)}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
        <div className="">
          {SingleAll.flexible == "true" && <div>Title</div>}
          <div className="">
            {FilteredAll &&
              FilteredAll.map((item, index) => {
                return (
                  <div key={index}>
                    <Link
                      className="text-[#010101] font-font-Header text-xl"
                      to={`/single-shop/${item.id}/${item.category}`}
                    >
                      {item.category}
                    </Link>
                  </div>
                );
              })}

            {SingleAll.textAll &&
              SingleAll.textAll.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="text-[#82868e] text-base font-font-Header "
                  >
                    {item}
                  </div>
                );
              })}

            {/* <div className="text-[#82868e] text-base font-font-Header ">
              {SingleAll.textw}
            </div>
            <div className="text-[#82868e] text-base font-font-Header my-4">
              {SingleAll.texte}
            </div>
            <div className="text-[#82868e] text-base font-font-Header ">
              {SingleAll.textr}
            </div>
            <div className="text-[#82868e] text-base font-font-Header ">
              {SingleAll.textx}
            </div>
            <div className="text-[#82868e] text-base font-font-Header ">
              {SingleAll.textm}
            </div>
            <div className="text-[#82868e] text-base font-font-Header ">
              {SingleAll.textp}
            </div> */}
            <div className="my-4">
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.both}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.rest}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.to}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.do}
              </div>
            </div>
            <div className="my-4">
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.as}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.in}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.ye}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.on}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.sir}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.so}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.get}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.all}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.be}
              </div>
              <div className="text-[#82868e] text-base font-font-Header ">
                {SingleAll.not}
              </div>
            </div>

            <div className="flex gap-2 ">
              <div className="font-bold text-[#82868e] text-base font-font-Header">
                {SingleAll.texta}{" "}
              </div>
              <div className="text-base text-[#82868e] text-base font-font-Header">
                {SingleAll.textq}{" "}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="font-bold text-[#82868e] text-base font-font-Header">
                {SingleAll.textl}{" "}
              </div>
              <div className="text-[#82868e] text-base font-font-Header">
                {SingleAll.texto}{" "}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="font-bold text-[#82868e] text-base font-font-Header">
                {SingleAll.texty}{" "}
              </div>
              <div className="text-[#82868e] text-base font-font-Header">
                {SingleAll.texti}{" "}
              </div>
            </div>

            <div className="relative flex gap-4 group">
              <div className="mt-4 text-[#82868e] flex items-center gap-2 border-2 bg-opacity-10 rounded-full h-10 w-18 p-2 transition-all duration-300 group-hover:opacity-0">
                <CiShare2 className="text-white" />
                Share
              </div>
              <div className="mt-4 absolute left-0 text-[#82868e] flex items-center gap-2 group-hover:border-2  rounded-full h-10  transition-all duration-300   w-0 overflow-hidden group-hover:w-full">
                <div>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthemes.easysite.by%2Fessu%2Fportfolio%2Fthe-bottle%2F%3Fstyle%3Ddark">
                    <FaFacebookF className="hover:text-[#3b5999]" />
                  </a>
                </div>
                <div>
                  <a href="https://x.com/intent/post?text=The+Bottle&url=https%3A%2F%2Fthemes.easysite.by%2Fessu%2Fportfolio%2Fthe-bottle%2F%3Fstyle%3Ddark">
                    <FaTwitter />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/shareArticle/?mini=true&url=https%3A%2F%2Fthemes.easysite.by%2Fessu%2Fportfolio%2Fthe-bottle%2F%3Fstyle%3Ddark">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div>
                  <a href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fthemes.easysite.by%2Fessu%2Fportfolio%2Fthe-bottle%2F%3Fstyle%3Ddark&media=https%3A%2F%2Fthemes.easysite.by%2Fessu%2Fwp-content%2Fuploads%2Fsites%2F12%2F2016%2F08%2Fbeer-bottle.jpg&description=The%20Bottle">
                    <FaPinterestP />
                  </a>
                </div>
                <div>
                  <a href="mailto:?Subject=The%20Bottle&body=https%3A%2F%2Fthemes.easysite.by%2Fessu%2Fportfolio%2Fthe-bottle%2F%3Fstyle%3Ddark">
                    <MdEmail />
                  </a>
                </div>
              </div>
              <div className="mt-4 text-[#82868e] flex items-center gap-2 border-2 bg-opacity-10 rounded-full h-10 w-18 p-2 group-hover:opacity-0 transition-all duration-300">
                <CiHeart /> 32
              </div>
            </div>
          </div>
        </div>
      </div>
      {SingleAll.flexible != "true" && (
        <div className="my-4">
          <Lightbox
            close={() => {
              setIndex(-1);
              setOpen(false);
            }}
            controller={{ closeOnBackdropClick: true }}
            index={index}
            open={open}
            slides={slides}
          />

          <div className="">
            {slides &&
              slides.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      onClick={() => openLightbox(index)}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
  return <StandartContainer content={content} />;
}
