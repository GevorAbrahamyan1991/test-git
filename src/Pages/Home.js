import All from "../Components/All";
import Cardnn from "../Components/Cardnn";
import { all } from "../Data/all";


export default function Home() {
  return <>
  <Cardnn />
  <All Data={all} />
  
  </>;
}
