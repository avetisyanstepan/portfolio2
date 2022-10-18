import Link from "next/link"
import { useRouter } from "next/router"
import { Share } from "../share/idnex"

export const WpEcomerceArticle = () => {
    const router = useRouter()
    console.log("S",router)
    return (
    <div className="flex flex-col pb-[30px]">
        <span className="font-montserrat font-medium text-[15px] text-orange tracking-[1.6px] leading-none mb-[20px] ">BLOG</span>
        <h1 className="font-montserrat text-[45px] text-white tracking-[1.6px] leading-none mb-[30px]">5 ways to start using WordPress as an eCommerce site</h1>
        <p className="font-montserrat font-medium text-[14px] text-custom_grey_300 mb-[76px]">
            August 10, 2013
        </p>
        <p className="font-montserrat text-[14px] text-custom_grey_300 mb-[34px]">
        In this article I will tell you how to start using WordPress as an ecommerce site. Maybe you are planning to start an online store where you will sell products or digital downloads. And you love WordPress like I do. Then why not build your new ecommerce site in WordPress? If you already have a WordPress site and want to start selling from right there, that’s possible too. But question is how and what will be the better way for you.
        </p>
        <p className="font-montserrat text-[14px] text-custom_grey_300 mb-[34px]">
            I did brainstorming for one hour and found five ways to do this:
        </p>
        <p className="font-montserrat text-[14px] text-[#c1c4d0] mb-[34px]">
          1.  <strong className="pl-3">PayPal button</strong> – If you are looking for an easy solution, 
            you can use PayPal “buy now” button. You can use this button in a page, post or sidebar. 
            There are two methods, Shortcode plugin and direct from PayPal site.
            This is very easy and you don’t need to hire anyone. <Link href='https://wordpress.com/support/paypal/'><a className="text-blue" target={"_blank"}>Check this</a></Link> how you can get “buy now” button from PayPal. 
            <Link href={"https://wordpress.org/plugins/enhanced-paypal-shortcodes/"}><a className="text-blue" target={"_blank"}> This plugin</a></Link>is helpful for creating a PayPal button using shortcode and you don’t need to go to PayPal site to create the button.
        </p>
        <p className="font-montserrat text-[14px] text-[#c1c4d0] mb-[34px]">
          2.  <strong className="pl-3">Premium E-Commerce theme </strong> – There are many premium e-commerce themes in the marketplaces. You can buy a theme from marketplaces like
            <Link href='https://themeforest.net/category/wordpress/ecommerce'><a className="text-blue" target={"_blank"}> Themeforest,</a></Link>
            <Link href='https://woocommerce.com/storefront/'><a className="text-blue" target={"_blank"}>  Woothemes</a></Link> and
            <Link href='http://www.mojo-themes.com/categories/wordpress/ecommerce-wordpress/'><a className="text-blue" target={"_blank"}>  Mojothemes.</a></Link>These themes have options panel so you can customize it the way you want. But if you want to add some extra features or want to make it little unique, then
            <Link href={"/"}><a className="text-blue"> hire a WordPress developer.</a></Link>
        </p>
        <p className="font-montserrat text-[14px] text-[#c1c4d0] mb-[34px]">
          3.<strong className="pl-3">Custom E-commerce theme </strong> – If you need a unique look and feel for your store that will represent your brand and business, then you have to go for a custom theme. Hire someone who can design and develop a custom e-commerce theme.
        </p>
        <p className="font-montserrat text-[14px] text-[#c1c4d0] mb-[34px]">
          4.  <strong className="pl-3"> E-commerce API </strong> – This is a cloud solution, you can sell your products anywhere including your WordPress site, Facebook , Thumbler .
            <Link href='https://themeforest.net/category/wordpress/ecommerce'><a className="text-blue" target={"_blank"}>  Ecwid </a></Link>and
            <Link href='https://woocommerce.com/storefront/'><a className="text-blue" target={"_blank"}>   Shopify</a></Link> providing this service.
        </p>
        <p className="font-montserrat text-[14px] text-[#c1c4d0] mb-[34px]">
          5.  <strong className="pl-3"> Custom E-commerce plugin </strong> –Looking for more custom solutions? Hire a developer to code fully customize e-commerce plugin and theme for you.
        </p>
        <p className="font-montserrat text-[14px] text-[#c1c4d0] mb-[34px]">
        These are the options you have to enable shop facilities in WordPress for your ecommerce site. You can always choose one that suits your business and budget.
        </p>
        <Share url={router.pathname} />
        <strong className="text-white font-montserrat py-5">You might enjoy these too</strong>
        <div className="bg-custom_grey_100 w-1/2 flex items-center justify-center">
            <Link href="/woocommerce-shopping-cart-for-small-businesses">
                <a className="p-[50px] text-[24px] text-white font-montserrat">
                    Woocommerce, an easy eCommerce shopping cart solution for small businesses
                    <br />
                    <span className="text-[14px] text-custom_grey_200">April 27, 2013</span>
                </a>
            </Link>

        </div>
    </div>
    )
}