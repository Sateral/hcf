"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logo from "@/public/assets/HCFLogo.webp"
import close from "@/public/assets/close.svg"
import menu from "@/public/assets/menu.svg"

import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button';
import { Cat } from 'lucide-react';

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [toggle, setToggle] = useState(false);

  const menuStyle = "rounded-lg text-3xl font-medium font-lora ring-offset-background w-full p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primaryBg text-secondaryBg hover:bg-[#D2D2D2]/70" 

  const navInfo: { id: string, title: string }[] = [
    {
      id: "next-show",
      title: "Next Show",
    },
    {
      id: "frequently-asked-questions",
      title: "Frequently Asked Questions",
    },
    {
      id: "spectator-information",
      title: "Spectator Information",
    },
    {
      id: "map-and-directions",
      title: "Maps & Directions",
    },
  ];

  const navAbout: { id: string, title: string }[] = [
    {
      id: "aims-and-objectives",
      title: "Aims & Objectives"
    },
    {
      id: "members",
      title: "Members",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  if (toggle) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const pathname = usePathname();

  return (
    <nav className={`${pathname === "/" ? 'fixed' : 'sticky'} top-0 bg-primaryBg w-full flex sm:flex-row flex-col py-6 items-center md:px-16 px-6 z-10`}>
      <div className='flex justify-between items-center w-full z-20'>
        <Link href="/" className='flex flex-row items-center text-secondaryBg'>
          <Cat size={32} className='mr-2 navHidden'/>
          <h2 className='font-lora font-semibold md:text-3xl text-2xl navHidden'>Hamilton Cat Fanciers</h2>
          
          <Image src={logo} alt="HCF Logo" className='sm:hidden w-20' />
        </Link>

        <div className='flex flex-row navHidden text-secondaryBg'>
          <NavigationMenu className='md:mr-6 mr-2'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu className='md:mr-6 mr-2'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Information</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {navInfo.map((option) => (
                    <Link key={option.id} href={option.id}>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {option.title}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <NavigationMenu className='md:mr-6 mr-2'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {navAbout.map((option) => (
                    <Link key={option.id} href={option.id}>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {option.title}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button>
            <Link href="/enter-show">Enter Show</Link>
          </Button>
        </div>

        <Image 
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer sm:hidden'
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <div className={`fixed sm:hidden top-[50%] ${toggle ? 'translate-x-[0%]': 'translate-x-[100%]'} translate-y-[-50%] flex justify-center items-center flex-col bg-primaryBg w-full h-full transition-all ease-in-out duration-300 z-10}`}>
        <ul className=''>
          <li className={menuStyle}><Link href="/">Home</Link></li>

          {navInfo.map((option) => (
            <li key={option.id} className={`mt-4 hover: ${menuStyle}`}>
              <Link href={option.id}>{option.title}</Link>
            </li>
          ))}

          {navAbout.map((option) => (
            <li key={option.id} className={`mt-4 hover: ${menuStyle}`}>
                <Link href={option.id}>{option.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <ul className={`${toggle ? 'flex' : 'hidden'} flex-col w-full justify-start p-2 my-2 min-w-[140px] rounded-xl z-10 transition-all ease-in-out`}>
        <li>Home</li>

        {navInfo.map((option) => (
          <li key={option.id} className='mt-4'>
              {option.title}
          </li>
        ))}
      </ul> */}
    </nav>
  )
}

export default Navbar