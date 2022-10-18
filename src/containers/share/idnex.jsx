import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "next-share";
import Fb from "../../../public/icons/fb.svg";
import Twitter from "../../../public/icons/twitterIcon.svg";
import LinkDin from "../../../public/icons/linkdinIcon.svg";


export const Share = ({url}) => {
    return (
      <div className="flex flex-col">
        <div className="h-[5px] w-full bg-custom_grey_100 mb-[24px]"/>
        <span className="text-white font-montserrat mb-[24px]">Share this</span>
        <div className="flex gap-4 mb-[48px]">
          <FacebookShareButton
            url={url}
            quote={'next-share is a social share buttons for your next React apps.'}
          > 
          <div className="bg-fbBlue">
            <div className="flex items-center px-[20px] py-[7px] gap-4">
              <div className="flex w-[12px] h-[18px] text-white">
                <Fb/>
              </div>
                <span className="text-white text-[16px] font-montserrat">Facebook</span>
            </div>
          </div>
          </FacebookShareButton>
          <TwitterShareButton

            url={url}
            quote={'next-share is a social share buttons for your next React apps.'}
          > 
          <div className="bg-twitterBlue">
            <div className="flex items-center px-[20px] py-[7px] gap-4">
              <div className="flex w-[18px] h-[18px] text-white">
                <Twitter/>
              </div>
                <span className="text-white text-[16px] font-montserrat">Twitter</span>
            </div>
          </div>
          </TwitterShareButton>
          <LinkedinShareButton
            url={url}
            quote={'next-share is a social share buttons for your next React apps.'}
          > 
          <div className="bg-linkDinBlue">
            <div className="flex items-center px-[20px] py-[7px] gap-4">
              <div className="flex w-[18px] h-[18px] text-white">
                <LinkDin/>
              </div>
                <span className="text-white text-[16px] font-montserrat">Linkdin</span>
            </div>
          </div>
          </LinkedinShareButton>
        </div>
        <div className="h-[5px] w-full bg-custom_grey_100"/>
      </div>
    )
}