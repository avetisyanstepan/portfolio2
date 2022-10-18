import Link from "next/link";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { Share } from "../share/idnex";
import ImgOption from '../../../public/images/img.png'
import ImgOption2 from '../../../public/images/iimg.png'

import Image from "next/image";

export const ThumbnailImageArticle = () => {
    const router = useRouter()
    return (
        <div className="realative flex flex-col pb-[34px]">
            <span className="font-montserrat font-medium text-[15px] text-orange tracking-[1.6px] leading-none mb-[20px] ">BLOG</span>
            <h1 className="font-montserrat text-[45px] text-white tracking-[1.6px] leading-none mb-[30px]">How to change thumbnail image size of WooCommerce cart page</h1>
            <p className="font-montserrat font-medium text-[14px] text-custom_grey_200 mb-[76px]">
                June 28, 2013
            </p>
           
            <h3 className="text-white text-[25px] font-montserrat font-medium mb-[15px]">Video Tutorial</h3>
            <YouTube
                videoId={"22JLYRP4rQ0"}  
                className={'h-[500px]'}
                iframeClassName={'w-full h-full'}
            />
            <p className="pt-[30px] text-[14px] text-custom_grey_200">
                {`The default thumbnail size of woocommerce cart is 90px width. I found this too small for some store. You may like to display bigger and cleaner image in your cart page. If you look into “woocommerce > templates > cart > cart.php” you will find a filter woocommerce_cart_item_thumbnail or woocommerce_in_cart_product_thumbnail depending on your version of woocommerce. You don’t need to the edit that code. I will show here how to change thumbnail size without editing the template code.`}
            </p>
            <h3 className="text-[25px] pt-[45px] text-white">STEP 1</h3>
            <p className="text-[14px] pt-[25px] pb-[45px] text-custom_grey_200">
                {`Go to “WooCommerce > Settings > Catalog” from your WordPress dashboard and you will find image options on that page. Now change the value of Product Thumbnails to image size you desire.`}
            </p>
            <div className="max-w-[745px] h-[247px] relative">
                <Image 
                    src={ImgOption}
                    objectFit={'cover'}
                    layout={'fill'}
                />
            </div>
            <h3 className="text-[25px] pt-[45px] text-white">STEP 2</h3>
            <p className="text-[14px] pt-[25px] pb-[45px] text-custom_grey_200">
                Add this css to your theme style sheet.
            </p>
            <pre className="border-l-[10px] border-custom_grey_100 text-left text-white whitespace-pre-line pl-3">
                {`
                .woocommerce table.cart img, .woocommerce #content table.cart img, .woocommerce-page 
                table.cart img, .woocommerce-page #content table.cart img {
                      width: auto !important;
                }`}
            </pre>
            <h3 className="text-[25px] pt-[45px] text-white">STEP 3</h3>
            <p className="text-[14px] pt-[25px] pb-[45px] text-custom_grey_200">
                {`This is an optional step. If you have existing products and you want to apply changes on those, do this step. Install “AJAX Thumbnail Rebuild” plugin and go to “Tools > Rebuild Thumbnails”. Select only “shop_thumbnail” and hit “Rebuild All Thumbnails” button and you will see your thumbnails.`}
            </p>
            <div className="max-w-[745px] h-[247px] relative mb-[60px]">
                <Image 
                    src={ImgOption}
                    objectFit={'cover'}
                    layout={'fill'}
                />
            </div>
            <Share url={router.pathname}/>
        </div>       

    )
};