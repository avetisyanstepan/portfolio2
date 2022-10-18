import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Avatar from "/public/images/def.png";
import Linkdin from "/public/icons/in.svg";
import Github from "/public/icons/github.svg";
import Behnace from "/public/icons/behance.svg";
import Ball from "/public/icons/ball.svg";
import Twiter from "/public/icons/twiter.svg";



export const SideBar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showicons, setShowIcons] = useState(false);
  return (
  <div className="fixed flex h-full z-50">
  <div className="flex  flex-col max-w-[85px] w-full h-full bg-darkGrey py-[120px] justify-between">
      <div className="flex mx-auto w-[52px] h-[52px] relative">
        <Link href={'/'}>
          <a>
            <Image 
              src={Avatar}
              layout="fill"
              objectFit='cover'
              className="rounded-full"
              alt="i am abdus"
            />
          </a>
        </Link>
      </div>
      <div className="-mb-[88px] px-[42px] relative w-full "  onMouseOut={() => setShow(false)} onMouseOver={() => setShow(true)}>
        <ul className="flex mx-auto  flex-col gap-5 pt-[40px]">
         <Link href={'/'}>
            <li className={`w-[2px] h-[25px] cursor-pointer ${router.asPath === '/' ? 'bg-orange' : 'bg-custom_grey_100'}`}>
              {show && 
              <div className="w-[105px] h-[40%] absolute ml-[14px]" >
                  <a className=" text-custom_grey_200 hover:text-white text-xs font-monserrat font-medium	tracking-[2px] leading-[2px]">
                    ABOUT ME
                  </a>
              </div>
              }
            </li>
          </Link>
          <Link href={'/portfolio'}>
          <li className={`w-[2px] h-[25px] cursor-pointer ${router.asPath === '/portfolio' ? 'bg-orange' : 'bg-custom_grey_100'}`}>
            {show && 
              <div className="w-[105px] h-[40%] absolute ml-[14px]" >
                  <a className=" text-custom_grey_200 hover:text-white text-xs font-monserrat font-medium	tracking-[2px] leading-[2px]">
                    MY WORKS
                  </a>
              </div>
            }
          </li>
          </Link>
          <Link href={'/blog'}>
          <li className={`w-[2px] h-[25px] cursor-pointer ${router.asPath.slice(0,5) === '/blog' ? 'bg-orange' : 'bg-custom_grey_100'}`}>
            {show && 
              <div className="w-[105px] h-[40%] absolute ml-[14px]" >
                  <a className=" text-custom_grey_200 hover:text-white text-xs font-monserrat font-medium	tracking-[2px] leading-[2px]">
                    READE ME
                  </a>
              </div>
            }
          </li>
          </Link>
          <Link href={'/contact'}>
          <li className={`w-[2px] h-[25px] cursor-pointer ${router.asPath === '/contact' ? 'bg-orange' : 'bg-custom_grey_100'}`}>
          {show && 
            <div className="w-[105px] h-[40%] absolute ml-[14px]" >
                <a className=" text-custom_grey_200 hover:text-white text-xs font-monserrat font-medium	tracking-[2px] leading-[2px]">
                  CONTACT ME
                </a>
            </div>
            }
          </li>
          </Link>
        </ul>
           
      </div>
      
      <div className="h-[230px] relative cursor-pointer" onMouseOut={() => setShowIcons(false)} onMouseOver={() => setShowIcons(true)}>
        {
          !showicons 
          ?
            <ul className="flex h-[4px] mb-[18px] justify-center absolute bottom-0 left-[28px] gap-[9px] mx-auto cursor-pointer" >
              <li className="w-[4px] h-[4px] bg-custom_grey_200">
              
              </li>  
              <li className="w-[4px] h-[4px] bg-custom_grey_200">
              
              </li>
              <li className="w-[4px] h-[4px] bg-custom_grey_200">
              
              </li>
            </ul>
          :
          <div className="absolute bottom-[11px] left-[22px] ">
            <div className="flex flex-col gap-[24px] items-center -mr-2 mb-[20px]">
              <Link href='https://github.com/'>
                <a>
                  <Github  className='w-[14px] h-[16px] text-custom_grey_200 hover:text-white'/>
                </a>
              </Link>
              <Link href={'https://www.behance.net/'}>
                <a>
                  <Behnace  className='w-[14px] h-[16px] text-custom_grey_200 hover:text-white'/>
                </a>
              </Link>
              <Link href={"https://dribbble.com/"}>
                <a>
                  <Ball  className='w-[14px] h-[16px] text-custom_grey_200 hover:text-white'/>
                </a>
              </Link>
              <Link href={'https://twitter.com/'}>
                <a>
                  <Twiter  className='w-[14px] h-[16px] text-custom_grey_200 hover:text-white'/>
                </a>
              </Link>
              <Link href={'https://www.linkedin.com/'}>
                <a>
                  <Linkdin  className='w-[14px] h-[16px] text-custom_grey_200 hover:text-white'/>
                </a>
              </Link>
            </div>  
            <a className="text-[8px] font-medium text-white ml-[5px]">
              FOLLOW
            </a>
          </div>  

        }
       
      </div>
    </div>
    </div>
   
    
  )
}