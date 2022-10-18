import Link from "next/link"

export const Contact = () => {
    return (
        <div className="flex flex-col z-10">
            <div>
                <span className="w-[50px] second animate__animated animate__bounceInLeft font-montserrat font-medium text-[15px] text-orange tracking-[1.6px] leading-none mb-[20px] ">CONTACT</span>
            </div>
            <div>
                <span className="font-abril third animate__animated animate__bounceInLeft text-[45px] text-white tracking-[1.6px] ">Want to talk about your project?</span>
            </div>
            <p className="text-[14px]  third animate__animated animate__bounceInLeft leading-relaxed tracking-[2.8px] font-montserrat text-custom_grey_200">You can email me at <Link href="gmail.com"><a className="text-white">hello@iamabdus.com</a></Link> or submit this form:</p>
            <form className="flex flex-col pt-[100px] gap-32  fourth animate__animated animate__bounceInLeft">
                <div className="flex justify-between gap-[80px]">
                    <input type={'text'} placeholder="Your Name"  className="bg-lightGrey w-full font-montserrat font-medium text-white text-[30px] border-b-[5px] border-l-r-t-none border-custom_grey_100 outline-0	"/>
                    <input type={'text'} placeholder="Your Email"  className="bg-lightGrey w-full font-montserrat font-medium text-white text-[30px] border-b-[5px] border-l-r-t-none border-custom_grey_100 outline-0	"/>
                </div>
                <div className="flex justify-between gap-[80px]">
                    <select className="bg-lightGrey w-full border-b-[5px] border-l-r-t-none text-[30px] border-custom_grey_100 outline-0 text-custom_grey_200  focus:outline-none ">
                        <option value="" selected disabled hidden>Country</option>
                        <option className="">Albania</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                    <input type={'text'} placeholder="How did you find me?"  className="bg-lightGrey w-full font-montserrat font-medium text-white text-[30px] border-b-[5px] border-l-r-t-none border-custom_grey_100 outline-0	"/>
                </div>
                {/* <div className="flex justify-between gap-[80px]">
                    <select className="bg-lightGrey w-full border-b-[5px] border-l-r-t-none text-[30px] border-custom_grey_100 outline-0 text-custom_grey_200  focus:outline-none ">
                        <option value="" selected disabled hidden>Project Type</option>
                        <option className="">Albania</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                    <select className="bg-lightGrey w-full border-b-[5px] border-l-r-t-none text-[30px] border-custom_grey_100 outline-0 text-custom_grey_200  focus:outline-none ">
                        <option value="" selected disabled hidden>Project budget</option>
                        <option className="">500$</option>
                        <option className="">1000$</option>
                        <option className="">3000$</option>
                        <option className="">5000$</option>
                        <option className="">1000$</option>
                        <option className="">500$</option>
                        <option className="">I want to discuss</option>
                    </select>
                </div> */}
                <textarea  placeholder="Say somthing about project"  className="bg-lightGrey w-full font-montserrat font-medium text-white text-[30px] border-b-[5px] border-l-r-t-none border-custom_grey_100 outline-0	"/>
                <button className="w-full">
                    Send message
                </button>
            </form>
        </div>
    )
}