import { SideBar } from "../containers/sidebar"

export const MainLayout = ({children}) => {
  return (
    <div className="flex">
      <div className="bg-darkGrey flex-1 z-50" />
        <div className={`flex max-w-[1200px]  w-full shrink-0 mx-auto bg-lightGrey aligne-center `}>
          <SideBar />
          <main className="ml-[165px] pt-[125px] min-h-screen  w-full">
          {children}  
          </main>
        </div>
      <div className="bg-lightGrey flex-1 relative" />
      
      <div className="animate__animated mainPage animate__slideOutLeft  animate_faster w-full h-full bg-orange absolute "/>
      <span />
    </div>
  )
}






