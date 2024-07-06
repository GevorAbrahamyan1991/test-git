import All from "../Components/All";
import Cardnn from "../Components/Cardnn";
import Footer from "../Components/Footer";
import { all } from "../Data/all";


export default function Home() {
  return <>
  <Cardnn />
  <All Data={all} />
  <Footer />
  </>;
}
