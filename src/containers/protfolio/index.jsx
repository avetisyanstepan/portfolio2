import Image from "next/image"
import { worksData } from "../../utils/idnex"

export const Portfolio = () => {
    return (
        <div className="flex flex-col relative mb-20">
            <span className="font-montserrat font-medium text-[15px] text-orange tracking-[1.6px] leading-none mb-[18px] animate__animated animate__bounceInLeft ">MY WORK</span>
            <span className="text-white text-[45px] font-abril tracking-[2.4px] leading-tight a1 animate__animated animate__bounceInLeft">
                Some recent projects from over 8 years of digital innovation
            </span>
            <div className="columns-2 gap-4 space-y-20 p-8">
                {
                    worksData.map((work,i) => (
                        <div className={`flex flex-col cursor-pointer group `}>
                            <div className="max-w-[405px] mb-[30px]">
                                <Image 
                                    src={work.src}
                                    width={800}
                                    height={700}
                                    layout="responsive"
                                    objectFit="contain"
                                />
                             </div>   
                             <div className="flex">
                                <div className="w-[70px] flex">
                                    <span className="w-[70%]  transition-all ease-in delay-75 group-hover:w-full h-1 mt-2 bg-orange"/>
                                </div>    
                                <span className="font-[14px] text-white font-montserrat mb-2 ml-2">
                                    {work.title}
                                </span>
                             </div>   
                             <span className="text-[22px] text-custom_grey_200 font-montserrat ">
                                {work.desc}
                             </span>
                           

                        </div>    
                    ))
                }
            </div>
            
            
        </div>
    )
}