
import { FaBookReader } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { LiaBarcodeSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import { IoImagesSharp } from "react-icons/io5";

const components = {
    MdDashboard: MdDashboard,
    HiUserGroup: HiUserGroup,
    FaBookReader: FaBookReader,
    LiaBarcodeSolid: LiaBarcodeSolid,
    IoImagesSharp: IoImagesSharp,
};

const menuItems = [
  {
    title: "Dashboard",
    icon: "MdDashboard",
    link: "/dashboard",
  },
  {
    title: "Students",
    icon: "HiUserGroup",
    link: "/students"
  },
  {
    title: "Exams",
    icon: "FaBookReader",
        link: "/exam-board"
  },
  {
    title: "Serial Number",
    icon: "LiaBarcodeSolid",
    link: "/serial-number"
  },
  {
    title: "Gallery",
    icon: "IoImagesSharp",
    link: "/gallery-settings"
  }
  
];



const NavBarData = () => {
  return { menuItems, components };
};

export default NavBarData;