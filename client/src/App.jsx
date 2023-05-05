/** @format */

import fxrImg from "./assets/img/fixirorimage.jpg";
import { FaTiktok } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const App = () => {
  const handleYoutube = () => {
    window.location.replace("https://www.instagram.com/fixiror/");
  };

  return (
    <>
      <body className='sm:block'>
        <div className='flex w-full h-screen bg-gray-800 mt-0 items-center justify-center overflow-y-hidden'>
          <div className='flex-col w-[600px] h-[600px] bg-gray-950 shadow-md shadow-[#00fdfd] hover:border border-[#45109b] items-center justify-center rounded-3xl'>
            <div className='flex flex-col mt-[3rem] gap-y-5 items-center justify-center'>
              <img src={fxrImg} alt='profile' className='w-[70px] h-[70px] rounded-full' />
              <p className='text-[#ffffff] text-base font-[Arvo] font-semibold'>Fixiror Team</p>
            </div>
            <div className='flex flex-col mt-[3rem] gap-y-6 items-center justify-center'>
              <button onClick={handleYoutube} className='flex w-[350px] h-[50px] bg-[#45109b] gap-5 hover:shadow-md hover:shadow-[#23ffff] rounded-2xl  hover:bg-gradient-to-r from-[#45109b] via-[#072475] to-[#109b6d] items-center justify-center ease-in-out duration-600 hover:scale-105'>
                <BsYoutube className='w-[30px] h-[30px] text-white hover:animate-bounce' />
                <span className='text-base text-white text-center font-[Nunito Sans] font-bold hover:animate-pulse'>Youtube Official</span>
              </button>

              <button className='flex w-[350px] h-[50px] bg-[#45109b] gap-5 hover:shadow-md hover:shadow-[#23ffff] rounded-2xl  hover:bg-gradient-to-r from-[#45109b] via-[#072475] to-[#109b6d] items-center justify-center ease-in-out duration-600 hover:scale-105'>
                <FaTiktok className='w-[30px] h-[30px] text-white hover:animate-bounce' />
                <span className='text-base text-white text-center font-[Nunito Sans] font-bold hover:animate-pulse'>Tiktok Official</span>
              </button>

              <button className='flex w-[350px] h-[50px] bg-[#45109b] gap-5 hover:shadow-md hover:shadow-[#23ffff] rounded-2xl  hover:bg-gradient-to-r from-[#45109b] via-[#072475] to-[#109b6d] items-center justify-center ease-in-out duration-600 hover:scale-105'>
                <BsGithub className='w-[30px] h-[30px] text-white hover:animate-bounce' />
                <span className='text-base text-white text-center font-[Nunito Sans] font-bold hover:animate-pulse'>Github Official</span>
              </button>

              <button className='flex w-[350px] h-[50px] bg-[#45109b] gap-5 hover:shadow-md hover:shadow-[#23ffff] rounded-2xl  hover:bg-gradient-to-r from-[#45109b] via-[#072475] to-[#109b6d] items-center justify-center ease-in-out duration-600 hover:scale-105'>
                <BsDiscord className='w-[30px] h-[30px] text-white hover:animate-bounce' />
                <span className='text-base text-white text-center font-[Nunito Sans] font-bold hover:animate-pulse'>Discord Official</span>
              </button>
            </div>
            <div className='flex mt-[3rem] gap-3 items-center justify-center'>
              <span className='text-base text-white font-[Arvo] tracking-wide'>&copy;2023</span>
              <p className='text-[#ffffff] text-base font-[Arvo]'>Fixiror.com</p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default App;
