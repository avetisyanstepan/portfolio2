import Link from "next/link";
import { useRouter } from "next/router";
import { Share } from "../share/idnex";

export const WooCommerceArticle = () => {
    const router = useRouter()
    return (
        <div className="realative flex flex-col pb-[24px]">
            <span className="font-montserrat font-medium text-[15px] text-orange tracking-[1.6px] leading-none mb-[20px] ">BLOG</span>
            <h1 className="font-montserrat text-[45px] text-white tracking-[1.6px] leading-none mb-[30px]">Woocommerce, an easy eCommerce shopping cart solution for small businesses</h1>
            <p className="font-montserrat font-medium text-[14px] text-custom_grey_200 mb-[76px]">
                April 27, 2013
            </p>
            <ul className="list-disc pl-[40px]">
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Free:</strong> Woocommerce is a free WordPress eCommerce plugin and this is the reason it suits best for a small businesses.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Security:</strong> Sucuri, the well known WordPress security firm ensures the top security standard of Woocommerce.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Easy store management:</strong> Woocommerce makes day to day management of your site easier.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Digital products:</strong> Woocommerce makes selling digital / downloadable products easier. You can also set different download methods for each category of products. Some products may require payment before access, some other may require logging in or you can provide some free products too.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Reports:</strong> You can get all the necessary performance reports of a product category or an individual product periodically.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Marketing and promotion:</strong> Campaign offers can be promoted by Woocommerce ,you can also encourage customers by adding a discount option or even restrict users.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Tax and shipping:</strong> You can create your own shipping rules by configuring the comprehensive tax setting.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>SEO:</strong> Woocommerce helps your site to rank high in the search engine ranking because it is written in HTML5.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Conversion:</strong> Customers can checkout easily without any distraction in one page which increases the conversion rate.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Reviews and comments:</strong> There is a built in easily manageable comment system in Woocommerce review system.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Social marketing:</strong> Sharing a product via social media encourages new customers to come to your site and you can also offer discounts through ‘share your cart’ a social marketing toolkit.

                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Account panel:</strong> Woocommerce account panel helps customers to login and manage their orders very easily.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Shipping calculator:</strong> Shipping calculator gives customers the liberty to analyse the shipping costs before checking out.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Navigation:</strong> Users can find what they are looking for conveniently with the help of Woocommerce navigation widget.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Extendable:</strong> Woocommerce is an open source plugin. You can get a lot of free and premium WordPress eCommerce extensions for your store.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>APIs:</strong> Developers can build their own shipping methods, payment gateways and other related extensions using various APIs.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Reference:</strong> There are ‘User Guide’, ‘Developer Reference’ and other useful sources of information and most importantly inline documentation of every file in Woocommerce.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>Templating, hooks and filters:</strong> Developers can use the hooks and filters in Woocommerce by which they can edit the templates.
                </li>
                <li className="text-[16px] text-custom_grey_200 font-montserrat">
                    <strong>WordPress codebase:</strong> The Woocommerce codebase is very lightweight and reliable because it uses native WordPress functionality.
                </li>
            </ul>
            <strong className="py-[48px] text-[22px] text-white font-montserrat">
                These are the features that make Woocommerce  an easy, secured, 
                business oriented and comprehensive WordPress eCommerce toolkit from <Link href='https://woocommerce.com/'>
                    <a className="text-blue" target={"_blank"}>
                    woothemes
                    </a>
                </Link>
            </strong>
            <Share url={router.pathname}/>
            <strong className="text-white font-montserrat py-5">You might enjoy these too</strong>
            <div className="bg-custom_grey_100 w-1/2 flex items-center justify-center">
            <Link href="/using-wordpress-ecommerce">
                <a className="p-[50px] text-[24px] text-white font-montserrat">
                    5 ways to start using WordPress as an eCommerce site
                    <br />
                    <span className="text-[14px] text-custom_grey_200">August 10, 2013</span>
                </a>
            </Link>
        </div>
           
        </div>       

    )
};