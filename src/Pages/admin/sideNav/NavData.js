
import { FaBookReader } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { LiaBarcodeSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import { IoImagesSharp } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";

const components = {
    MdDashboard: MdDashboard,
    HiUserGroup: HiUserGroup,
    FaBookReader: FaBookReader,
    LiaBarcodeSolid: LiaBarcodeSolid,
    IoImagesSharp: IoImagesSharp,
    FaCloudUploadAlt: FaCloudUploadAlt,
    GrScorecard: GrScorecard,
};

const menuItems = [
  {
    title: "Dashboard",
    icon: "MdDashboard",
    link: "",
  },
  {
    title: "Students",
    icon: "HiUserGroup",
    link: "/students"
  },
  {
    title: "Serial Number",
    icon: "LiaBarcodeSolid",
    link: "/serial-number"
  },
  {
    title: "Exams",
    icon: "FaBookReader",
    link: "/exam-board"
  },
  {
    title: "Exam Upload",
    icon: "FaCloudUploadAlt",
    link: "/exam-upload"
  },
  {
    title: "Students Result",
    icon: "GrScorecard",
    link: "/student-result"
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