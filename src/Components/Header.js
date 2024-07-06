import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import StandartContainer from "./StandartContainer";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

function NavList() {
  const dataNav= [
    {
      href:"",
      text:"Home",
    },
    {
      href:"about",
      text:"About",
    },
    {
      href:"blog",
      text:"Blog",
    },
    {
      href:"more",
      text:"More",
    },
    {
      href:"contact",
      text:"Contact",
    },
  ]

    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  ">
         {
          dataNav && dataNav.map((item, index) => {
            return(
              <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
              key={index}
            >
              <Link to={item.href} spy={true} smooth={true} offset={50} duration={500} className="text-[#757575] text-sm font-font-Header" >
               
                {/* <IoChevronDownOutline className="flex items-center justify-between" />   */}
                           
              {item.text}
              
              </Link>
              
            </Typography>
            )
          })
         }
      </ul>
    );
  }
export default function Header(){
    const [openNav, setOpenNav] = React.useState(false);
 
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
   
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
   
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
    const content=(
        <>
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 bg-black border-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <img src="https://themes.easysite.by/essu/wp-content/themes/essulite/essu-color.png" alt="logo" />
        </Typography>
        <div className=" hidden lg:block ">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
  
        </IconButton>
      </div>
      <Collapse open={openNav} >
        <NavList  />
      </Collapse>
    </Navbar>
  
        </>
    )
    return(
        <StandartContainer content={content} />
    )
}