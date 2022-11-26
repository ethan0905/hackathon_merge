import ConnectButton from "../components/connect-button.jsx";
import Logo from "../assets/PAYCONSENT.svg";
import { useNavigate } from "react-router-dom";
import abstract from "../assets/images/Abstract-design.png";
import abstractV2 from "../assets/images/Abstract-v2.png";

function MainPage() {
  return (
    <div className="w-screen h-screen bg-[#f4f1ee] absolute flex flex-col">
      <nav>
        <img src={Logo} alt="Logo" className="h-[30px] ml-[80px] mt-[30px]" />
      </nav>
      {/* <div className="flex flex-row justify-center"> */}
      <main className="absolute bottom-1.5 top-2 w-screen flex-grow flex flex-start justify-center items-center">
        <div className="absolute z-50 text-align-left flex flex-col items-start max-w-[90%] left-40">
          <h1 className="w-fit self-center text-3xl sm:text-8xl font-thunder">
            Giving You Solutions <br></br>For Smarter Contracts
          </h1>
          <p className="w-fit  text-xs sm:text-2xl text-[#282828] font-inter">
            Are you tired of complex and slow administration ? <br></br>Get your
            first decentralized contract, entirely <br></br>managed with
            blockchain technology
          </p>
          <ConnectButton />
        </div>
        <div className="absolute z-0 right-12 w-[1300px] flex justify-center">
          {/* <img src={abstract} className="h-[1120px]"></img> */}
          <img src={abstractV2} className="w-screen"></img>
        </div>
      </main>
      {/* </div> */}
    </div>
  );
}

export default MainPage;
