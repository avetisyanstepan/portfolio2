import Link from "next/link"
import { MainLayout } from "../../layout/mainLayout"

export const AboutMe = () => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <span className="font-montserrat font-medium	text-[15px] text-orange tracking-[1.6px] leading-none mb-[240px] animate__animated animate__bounceInLeft ">I AM ABDUS SALAM</span>
        <div className="w-[400px] relative">
          <span className="a1 animate__animated animate__infinite animate__fadeOutRight text-[40px] absolute right-0">I Drem</span>
          <span className="a2 animate__animated  animate__infinite animate__fadeOutRight ">I Look</span>
        </div>
        <span className="text-[16px] tracking-[1.8px] leading-relaxed	 font-montserrat font-medium text-custom_grey_200 mb-[25px]">
          As a freelance UI/UX Designer I have 8 years of experience in creating user friendly interfaces that helped my clients achieving their business objectives. I design User Experience (UX) that begins with user research, then I study the usability to create the user flows. Finally I create the wireframes and prototypes that goes through a usability test.
        </span>
        <span className="text-[16px] tracking-[1.8px] leading-relaxed	 font-montserrat font-medium text-custom_grey_200 mb-[218px]">
          Working with clients from all over the world has given me insights into various projects with non-identical requirements. I design attractive and visually pleasant UI and graphics for website, landing page, dashboard, sass app, mobile app and develop responsive and retina ready front-ends. And most importantly, I ensure an outstanding end product that meets customer satisfaction.
        </span>
        <div className="flex gap-[72px]">

          <Link href='/portfolio'>
            <div className="flex flex-col group cursor-pointer">
              <a className="text-white font-montserrat font-medium text-[14px] tracking-[2.8px]">
                My Works
              </a>
            <span className="w-[70%] transition-all ease-in delay-75 group-hover:w-full h-1 mt-2 bg-orange"/>
            </div>
          </Link>

          <Link href='/portfolio'>
            <div className="flex flex-col group cursor-pointer">
              <a className="text-white font-montserrat font-medium text-[14px] tracking-[2.8px]">
                Read Me
              </a>
              <span className="w-[70%] transition-all ease-in delay-75 group-hover:w-full h-1 mt-2 bg-orange"/>
            </div>
          </Link>
          <Link href='/portfolio'>
            <div className="flex flex-col group cursor-pointer">
              <a className="text-white font-montserrat font-medium text-[14px] tracking-[2.8px]">
                Contact Me
              </a>
              <span className="w-[70%] transition-all ease-in delay-75 group-hover:w-full h-1 mt-2 bg-orange"/>
            </div>
          </Link>

        </div>
      </div>
    </MainLayout>

  )
}