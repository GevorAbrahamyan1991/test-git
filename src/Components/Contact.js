import StandartContainer from "./StandartContainer";

export default function Contact(){
    const content=(
      <>
       <div className="lg:flex grid md:grid-cols-1">
          <div className="w-1/2 text-white text-5xl font-cardnn py-24 p-10">
              <div>Get in Touch</div>
          </div>
          <div className="w-1/2 text-white text-base font-font-Header py-24 p-10">
            <div>Have a question, want to share a review or suggest an</div>
            <div>improvement? We want to hear from you!</div>
           </div>
         </div>

         <div className="lg:flex grid md:grid-cols-1">
            <div className="w-1/2 text-base font-font-Header py-24 p-10 text-[#444444]">
            <div>Real sold my in call. Invitation on an advantages</div>
            <div>collecting. But event old above shy bed noisy. Had</div>
            <div>sister see wooded favour income has. Stuff rapid</div>
            <div>since do as hence. Too insisted ignorant procured</div>
            <div>remember are believed yet say finished.</div>
            <div className="my-4 font-bold">
             <div>Wanessa str 14-55C,</div>
             <div>London, UK</div>
            </div>
            <div className="my-4">
             <a href="https://themes.easysite.by/essu/contact/" className="hover:text-[#0097A7] "> hello@essu.me</a>
             <div>+180 123 456 789</div>
            </div>
            </div>
            <div className="w-1/2">
            
            <div className="text-[#8D8D8D] py-20 top-6 ">
             <label for="name" className=""> </label>
            <input type="text" placeholder="Name*" id="name" required  className="bg-black"/>
            <div className="text-[#8D8D8D] my-4 ">
            <label for="email" className=""> </label>
            <input type="text" placeholder="Email*" id="email" required  className="bg-black"/>
            </div>
            <div className="text-[#8D8D8D] my-4 ">
            <label for="subject" className=""> </label>
            <input type="text" placeholder="Subject" id="subject" required  className="bg-black"/>
            </div>
            <div className="text-[#8D8D8D] my-4 ">
                Message*
            </div>
            <div className="my-4 w-50 h-30">
            <textarea className="bg-black border-2 border-gray-500 "></textarea>
            </div>
            </div>
            
            
            
            </div>
         </div>
      </>
    )
    return <StandartContainer content={content} />
}