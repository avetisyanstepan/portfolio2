import Image from "next/image";
import FilterArtilceImg from "../../../public/images/img2.png";


export const FilterCustomArticle = () => {
    return (
        <div className="realative flex flex-col">
            <span className="font-montserrat font-medium text-[15px] text-orange tracking-[1.6px] leading-none mb-[20px] ">BLOG</span>
            <h1 className="font-montserrat text-[45px] text-white tracking-[1.6px] leading-none mb-[30px]">How to filter custom posts by custom field in WordPress admin area</h1>
            <p className="font-montserrat font-medium text-[14px] text-custom_grey_200 mb-[76px]">
                February 15, 2016
            </p>
            <h3 className="font-montserrat text-[25px] text-white mb-[32px] ">
                The Problem
            </h3>
            <p className="font-montserrat text-[14px] text-custom_grey_200 mb-[60px]">
                When we use custom posts type and it has thousands of posts, it become necessary to filter those posts in WordPress admin dashboard. Recently I faced a similar problem. I was working on a WordPress site for antique products and I was using custom post type and custom fields. But because there was a lot of different type of products and had to rearrange and edit those often, client asked for a solution to filter sold and unsold products separately in WordPress admin.
            </p>
            <div className="relative w-[768px] h-[270px] mb-[86px]">
                <Image 
                    src={FilterArtilceImg || "/"}
                    layout='fill'
                    objectFit="cover"
                />
            </div>
            <h3 className="font-montserrat text-[25px] text-white mb-[32px] ">
                The Solution
            </h3>
            <p className="font-montserrat text-[14px] text-custom_grey_200 mb-[60px]">
                I added these code in functions.php file to create a dropdown of filter options at the top of the all posts. So, when I select SOLD and click on filter button, only sold items will be displayed. Here is the code you can use too for your project:
            </p>
            <h3 className="font-montserrat text-[14px] text-white">
                Step 1:
            </h3>
            <p className="font-montserrat text-[14px] text-custom_grey_200 mb-[60px]">
                Add this code in the functions.php file of your WordPress theme.
            </p>
            <h3 className="font-montserrat text-[14px] text-white">
                Step 2:
            </h3>
            <p className="font-montserrat text-[14px] text-custom_grey_200 mb-[60px]">
                 Read the comments in the code and replace with your custom post name, the value of custom fields and the name of custom field as described.
            </p>
        </div>
    )
}