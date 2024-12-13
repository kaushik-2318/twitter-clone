import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import React from "react";
import FeedCard from "@/components/FeedCard";
import { CiSearch } from "react-icons/ci";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { MdMoreHoriz } from "react-icons/md";


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
    icon: <CiSearch />,
  }, {
    title: "Notifications",
    icon: <BsBell />,
  }, {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Money",
    icon: <FaRegMoneyBill1 />
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <MdMoreHoriz />,
  }
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-10 h-screen w-full px-36">
        <div className="col-span-2 justify-start mt-1">
          <div className="text-3xl text-[#e7e9ea] hover:bg-[#181818] rounded-full p-3 h-fit w-fit cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="text-xl mt-1 pr-4">
            <ul>
              {
                sidebarMenuItems.map((item) => (<li key={item.title} className="flex justify-start items-center gap-4 hover:bg-[#181818] rounded-full px-3 py-2 w-fit cursor-pointer text-[#e7e9ea]"><span className="text-3xl ">{item.icon}</span><span>{item.title}</span></li>))
              }
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#EFF3F4] p-4 rounded-full w-full font-semibold text-black">Post</button>
            </div>
          </div>
        </div>

        <div className="col-span-5 border-x-[1px] border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div >
    </div>
  );
}
