import StandartContainer from "./StandartContainer";

export default function About(){
    const content=(
        <>
        <div className="lg:flex grid md:grid-cols-1">
            <div className="w-1/2 ">
              <div className="text-white text-5xl font-cardnn py-24 p-10">
                About Me
              </div>
          </div>
            <div className="w-1/2 text-white text-lg font-font-Header py-24 p-10">
             <div className="text-white text-base font-font-Header">
              This is where you will find more about me and the services I
              </div>
              <div className="text-white text-base font-font-Header">
               provide.
              </div>
             </div>
             
            
          </div>
          <div className="lg:flex grid md:grid-cols-1">
          <div className="w-1/2">
             <div className=" py-24 p-10">
                <img src="https://themes.easysite.by/essu/wp-content/uploads/sites/12/2016/09/765119.jpg" alt="about" />
              </div>
             </div>
             <div className="w-1/2">
             <div className="py-40 top-6">
                 <div className="text-white font-font-Header">
                  Bio
                 </div>
                 <div className="font-font-Header text-xl text-[#444444] my-4">
                 My name’s Jessy and I’m a Senior Designer with 12 years of
                 </div>
                 <div className="font-font-Header text-xl text-[#444444] ">
                 professional experience. I’ve spent most of my career working
                 </div>
                 <div className="font-font-Header text-xl text-[#444444] ">
                 in New York but have recently moved to Stockholm.
                 </div>
                 <div className="my-6">
                <div className="text-[#82868e] text-base">
                Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability
                </div>
                <div className="text-[#82868e] text-base">
                thought enquire settled prudent you sir. Or easy knew sold on well come year.
                </div>
                <div className="text-[#82868e] text-base">
                Something consulted age extremely end procuring.
                </div>
              </div>
              <div className="my-6">
                <div className="text-[#82868e] text-base">
                Ought these are balls place mrs their times add she. Taken no great widow spoke
                </div>
                <div className="text-[#82868e] text-base">
                of it small. Genius use except son esteem merely her limits. Sons park by do make
                </div>
                <div className="text-[#82868e] text-base">
                on. It do oh cottage offered cottage in written. Especially of dissimilar up
                </div>
                <div className="text-[#82868e] text-base">
                attachment themselves by interested boisterous.
                </div>
              </div>
              </div>
              <div className="">
                <div className="text-[#dedede] font-font-Header text-base">
                  Services
                </div>
                <ol className="my-4 text-[#82868e] font-font-Header text-base">
                  <li>
                    Web design
                  </li>
                  <li>
                    Branding
                  </li>
                  <li>
                    Marketing
                  </li>
                </ol>
              </div>
             </div>
          </div>
        </>
    )
    return <StandartContainer content={content} />
}