import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import CardTypeOne from "./Components/CardTypeOne";
import platform1 from "./assets/platform1.png"
import PiData from "./Components/Chart/PiData";
import ProcessCard from "./Components/ProcessCard";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
    <Navbar/>
    <Header/>


    {/* Section for some quick intro about business */}
    <div className="flex text-center w-full mt-24 mb-8 justify-center">
      <div className="font-bold text-center text-5xl">What We{" "}
      <span className="text-green-500 font-bold text-5xl">Can Do ?</span></div>
    </div>
    <div className="flex justify-center align-center">
      <div className="grid grid-cols-3">
      <CardTypeOne text="A" color={"blue"} heading="Business Writing" description={"Business Writing Business Writing Business Writing Business Writing Business Writing"}/>
      <CardTypeOne text="A" color={"green"} heading="Business Writing" description={"Business Writing Business Writing Business Writing Business Writing Business Writing"}/>
      <CardTypeOne text="A" color={"red"} heading="Business Writing" description={"Business Writing Business Writing Business Writing Business Writing Business Writing"}/>
      </div>
    </div>

  <div className="pt-10 pb-20 bg-gray-100">
      <div className="flex text-center w-full pb-24 justify-center">
        <div>
          <p className="font-bold text-center text-green-500 pt-10 pb-5 text-xl">Bringing together needy to provider</p>
          <div className="font-bold text-center text-5xl">
            10000+ swab test and monitoring{" "}
            <span className="text-green-500 font-bold text-5xl">on our platform</span>
          </div>
        </div>
      </div>

      <div className="md:flex">
        <div className="w-1/2 justify-center text-center align-center flex">
            <img src={platform1} style={{width: "500px", height: "300px"}}/>
        </div>

        <div className="w-1/2">
          <h1 className="text-3xl font-bold capitalize">point 1</h1>
          <p className="py-4 pr-48 pl-2 text-lg text-gray-400 font-light">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>

          <h1 className="text-3xl font-bold capitalize">point 1</h1>
          <p className="py-4 pr-48 pl-2 text-lg text-gray-400 font-light">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>

          <h1 className="text-3xl font-bold capitalize">point 1</h1>
          <p className="py-4 pr-48 pl-2 text-lg text-gray-400 font-light">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>

        </div>
      </div>
    </div>

    <div className="flex align-center justify-center mx-24">
      <div className="w-1/2">
      <PiData/>
      </div>
      <div className="w-1/2 justify-center flex">
        <ul>
          <li className="text-3xl text-blue-800 p-4 list-disc">10000+ swab test and monitoring</li>
          <li className="text-3xl text-blue-800 p-4 list-disc">10000+ swab test and monitoring</li>
          <li className="text-3xl text-blue-800 p-4 list-disc ">10000+ swab test and monitoring</li>
          <li className="text-3xl text-blue-800 p-4 list-disc">10000+ swab test and monitoring</li>
          <li className="text-3xl text-blue-800 p-4 list-disc">10000+ swab test and monitoring</li>
        </ul>
      </div>
    </div>

    <div className="flex text-center w-full pb-24 justify-center">
      <div>
        <p className="font-bold text-center text-green-500 pt-10 pb-5 text-xl">This is How we Roll</p>
        <div className="font-bold text-center text-5xl">
          How Covi Test{" "}
          <span className="text-green-500 font-bold text-5xl">WORKS for You</span>
        </div>
      </div>
    </div>
    <div className="mx-48">
      <ProcessCard num={1} callword={"Patient"} title={"Symptomatic patients calls"}  desc={"Symptomatic patients call published phone number to request home swab collection"}/>
      <ProcessCard  num={2} callword={"Call Center"} title={"Agent collects basic location"}  desc={"Call centre agent collects basic location details if caller and registers a request"}/>
      <ProcessCard  num={3} callword={"Wards Aletred"} title={"Home swab collection"}  desc={"Home swab collection is automatically mapped to the ward the locations belongs to"}/>
      <ProcessCard  num={4} callword={"Collector"} title={"ward swab collectors notified"}  desc={"Pre-assigned ward swab collector gets notification of collection request"}/>
      <ProcessCard  num={5} callword={"SRF/ICMR"} title={"Swab collector visits"}  desc={"Swab collector visits the home, collects swab and creates ICMR request and generates SRF ID and captures SRF ID in the app"}/>
      <ProcessCard  num={6} callword={"Testing"} title={"Swab collector sends samples for testing"}  desc={"Swab collector sends samples for testing."}/>
      <ProcessCard  num={7} callword={"Result"} title={"Test results are uploaded on platform"}  desc={"Test results are uploaded on platform by Admin"}/>
      <ProcessCard  num={8} callword={"SMS"} title={"Patients with negative results are sent a sms"}  desc={"Patients with negative results are sent a sms about their test result. (Positive patients are handled by ICMR platform directly)"}/>
    </div>

    <Footer/>
    </>
  );
}

export default App;
