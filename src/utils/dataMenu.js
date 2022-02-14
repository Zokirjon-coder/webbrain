import Asosiy from "../pages/Asosiy";
import Kurslarimiz from "../pages/Kurslarimiz";
import Youtube from "../pages/Youtube";
import Natijalar from '../pages/Natijalar';
import Generic from "../pages/Generic";

export const dataMenu = [
  {
    id: 1,
    title: "Asosiy",
    pathname: "/asosiy",
    Element: Asosiy,
    hidden: false,
  },
  {
    id: 2,
    title: "Kurslarimiz",
    pathname: "/kurslarimiz",
    Element: Kurslarimiz,
    hidden: false,
  },
  {
    id: 3,
    title: "Natijalar",
    pathname: "/natijalar",
    Element: Natijalar,
    hidden: false,
  },
  {
    id: 4,
    title: "Bizning jamoa",
    pathname: "/bizningjamoa",
    Element: Generic,
    hidden: false,
  },
  {
    id: 5,
    title: "Youtube",
    pathname: "/youtube",
    Element: Youtube,
    hidden: false,
  },
  {
    id: 6,
    title: "Login",
    pathname: "/login",
    Element: Generic,
    hidden: true,
  },
  {
    id: 7,
    title: "Signin",
    pathname: "/signin",
    Element: Generic,
    hidden: true,
  },
];
