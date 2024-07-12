import StandartContainer from "./StandartContainer";

export default function Cardnn(){
    const content=(
        <>
         <div className="lg:flex grid md:grid-cols-1">
          <div className="w-1/2 text-white text-5xl font-cardnn py-24 p-10">
              <div>We’re Essu</div>
              <div>Creative agency</div>
          </div>
          <div className="w-1/2 text-white text-base font-font-Header py-24 p-10">
            <div>Essu is an award winning full service Los Angeles digital</div>
            <div>agency. We combine branded web development and user</div>
            <div>experience design to create memorable digital products</div>
            <div>people love.</div>
         </div>
         </div>
        </>
    )
 return <StandartContainer content={content} />
}