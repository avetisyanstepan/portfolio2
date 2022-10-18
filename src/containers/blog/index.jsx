import Link from "next/link"
import { MainLayout } from "../../layout/mainLayout"

export const Blog =  () => {
    return (
        <MainLayout>
            <div className="flex flex-col relative h-auto">
                <div>
                    <span className="font-montserrat w-[50px] second animate__animated animate__bounceInLeft font-medium text-[15px] text-orange tracking-[1.6px] leading-none">BLOG</span>
                </div>
                <div className="mt-[20px]">
                    <span className="font-abril text-[45px] third animate__animated animate__bounceInLeft text-white tracking-[1.6px] leading-none">My opinions and useful resources</span>
                </div>
                <div className="flex flex-col gap-8 mt-[60px] fourth animate__animated animate__fadeIn z-10">
                    <div className="max-w-[1010px] w-full bg-[#383c4f] ">
                        <Link href={`blog/filter-custom-posts-by-custom-field`}>
                            <a>
                                <h3 className="text-[25px] text-white font-montserrat p-[50px]">How to filter custom posts by custom field in WordPress admin area</h3>
                            </a>
                        </Link>
                    </div>
                    <div className="max-w-[1010px] w-full bg-[#383c4f] ">
                        <Link href={`blog/using-wordpress-ecommerce`}>
                            <a>
                                <h3 className="text-[25px] text-white font-montserrat p-[50px]">
                                    5 ways to start using WordPress as an eCommerce site
                                </h3>
                            </a>
                        </Link>
                    </div>
                    <div className="max-w-[1010px] w-full bg-[#383c4f] ">
                        <Link href={`blog/thumbnail-image-size-cart`}>
                            <a>
                                <h3 className="text-[25px] text-white font-montserrat p-[50px]">
                                    How to change thumbnail image size of WooCommerce cart page
                                </h3>
                            </a>
                        </Link>
                    </div>
                    <div className="max-w-[1010px] w-full bg-[#383c4f] ">
                        <Link href={`blog/woocommerce-shopping-cart-for-small-businesses`}>
                            <a>
                                <h3 className="text-[25px] text-white font-montserrat p-[50px]">
                                    Woocommerce, an easy eCommerce shopping cart solution for small businesses
                                </h3>
                            </a>
                        </Link>
                    </div>
                    <div className="max-w-[1010px] w-full bg-[#383c4f] ">
                        <Link href={`blog/woocommerce-shopping-cart-for-small-businesses`}>
                            <a>
                                <h3 className="text-[25px] text-white font-montserrat p-[50px]">
                                    Woocommerce, an easy eCommerce shopping cart solution for small businesses
                                </h3>
                            </a>
                        </Link>
                    </div>
                    <div className="max-w-[1010px] w-full bg-[#383c4f] ">
                        <Link href={`blog/woocommerce-shopping-cart-for-small-businesses`}>
                            <a>
                                <h3 className="text-[25px] text-white font-montserrat p-[50px]">
                                    Woocommerce, an easy eCommerce shopping cart solution for small businesses
                                </h3>
                            </a>
                        </Link>
                    </div>
                    <div className="max-w-[1010px] w-full bg-[#383c4f] ">
                        <Link href={`blog/woocommerce-shopping-cart-for-small-businesses`}>
                            <a>
                                <h3 className="text-[25px] text-white font-montserrat p-[50px]">
                                    Woocommerce, an easy eCommerce shopping cart solution for small businesses
                                </h3>
                            </a>
                        </Link>
                    </div>
                </div>
                
            </div>
        </MainLayout>
    )
}