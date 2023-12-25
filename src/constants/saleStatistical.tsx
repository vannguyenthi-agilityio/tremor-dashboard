import { ReactNode } from "react";
import {
  MdLeaderboard,
  MdOutlinePersonAdd,
  MdOutlineStore,
  MdWeekend,
} from "react-icons/md";

type Icon = {
  bgIcon: string;
  icon: ReactNode;
};

type Sale = {
  [key: string]: Icon;
};

export const SALE_STATISTICAL: Sale = {
  bookings: {
    bgIcon: "bg-[linear-gradient(195deg,#42424a,#191919)]",
    icon: <MdWeekend color="white" size="24px" />,
  },
  todayUser: {
    bgIcon: "bg-[linear-gradient(195deg,#49a3f1,#1A73E8)]",
    icon: <MdLeaderboard color="white" size="24px" />,
  },
  revenue: {
    bgIcon: "bg-[linear-gradient(195deg,#66BB6A,#43A047)]",
    icon: <MdOutlineStore color="white" size="24px" />,
  },
  followers: {
    bgIcon: "bg-[linear-gradient(195deg,#EC407A,#D81B60)]",
    icon: <MdOutlinePersonAdd color="white" size="24px" />,
  },
};
