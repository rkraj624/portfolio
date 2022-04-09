import React, {useState}  from 'react'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";



const Sidebar = () => {
    const { theme, setTheme } = useTheme();
    const [title, setTitle] = useState("Dark  ")

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if(title==="Light"){
      setTitle("Dark")
    }else{
      setTitle("Light")
    }
  };

 
  

  return (
    <div>
        <Image
          src="/profile.jpg"
          alt="avatar"
          className="mx-auto border rounded-full "
          height="128px"
          width="128px"
          layout="intrinsic"
          quality="100"
        />
        <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan"><span  > RK</span> <span className='text-blue-600'> Raj</span> </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Full Stack Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Resume.pdf"
        download="RK RAJ Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-600 md:w-full ">
        <a href="https://www.youtube.com/channel/UCgtBBGYaciGmCmX5uRYZWMA" aria-label='Youtube'>
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/ravi-kishan-raj-b49a5b165/" aria-label='Linkdin' >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/rkraj624" aria-label='Github'>
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Durgapur,India </span>
        </div>
        <p className="my-2 "> ravikishan624@gmail.com </p>
        <p className="my-2"> +91 6302028752 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-name hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:ravikishan624@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-name focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        {title} Mode
      </button>
    </div>
  )
}

export default Sidebar

