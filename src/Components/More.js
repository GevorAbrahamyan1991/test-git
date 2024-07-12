import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"
import StandartContainer from "./StandartContainer";
import { useState } from "react";
import { more } from "../Data/more";
import { useParams } from "react-router-dom";

export default function More(){
    const { id } = useParams();
    const [index, setIndex] = useState(-1)
    const [open, setOpen] = useState(false)
    const openLightbox = (clickedIndex) => {
      setIndex(clickedIndex)
      setOpen(true)
    }
    const More = more.find((items) => items.id == id)
    const slides = More.gallery.map((item) => {
      return { src: item.src }
    })
    const content=(
        <>
         <div className="lg:flex grid md:grid-cols-1">
            <div className="w-1/2 text-white text-5xl font-cardnn py-24 p-10">
            <div>
            Envira Gallery
            </div>
            </div>
            <div className="w-1/2 text-white text-lg font-font-Header py-24 p-10">
            <div>Endless gallery layouts. Use anywhere: pages, posts, projects</div>
            <div>. Easy to use, mobile friendly, fully customizable. Cool, huh?</div>
        </div>
        </div>
        <div className="my-4 ">
            <Lightbox close={() => {
              setIndex(-1)
              setOpen(false)
            }}
              controller={{ closeOnBackdropClick: true }}
              index={index}
              open={open}
              slides={slides}
            />

            <div className="flex grid  md:grid-cols-1 lg:grid-cols-3 ">
              {
                slides && slides.map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item.src} alt={item.alt} onClick={() => openLightbox(index)} className="w-50 h-30 opacity-90 hover:opacity-100" />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </>
    )
    return <StandartContainer content={content} />
}