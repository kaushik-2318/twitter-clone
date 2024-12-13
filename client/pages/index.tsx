import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import React from "react";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


interface SidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: SidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  }, {
    title: "Explore",
    icon: <BiHash />,
  }, {
    title: "Notifications",
    icon: <BsBell />,
  }, {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },

]

export default function Home() {
  return (
    <div className={geistSans.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 justify-start pt-8 px-4">
          <div className="text-4xl text-[#e7e9ea] hover:bg-[#181818] rounded-full p-4 h-fit w-fit cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="mt-4 text-2xl pr-4">
            <ul>
              {
                sidebarMenuItems.map((item) => (<li key={item.title} className="flex justify-start items-center gap-4 hover:bg-[#181818] rounded-full px-5 py-2 w-fit cursor-pointer text-[#e7e9ea]"><span>{item.icon}</span><span>{item.title}</span></li>))
              }
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] p-4 rounded-full w-full font-semibold text-[#e7e9ea]">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-x-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div >
    </div>
  );
}
