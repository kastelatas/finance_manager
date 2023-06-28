import * as React from "react";
import { menuLink } from "@/constants/menuLink";
import { v4 as uuidv4 } from "uuid";
import SideBarLinks from "./SideBarLinks";

export default function SideBarLinksList() {
  return (
    <>
      {menuLink.map(link => {
        return (
          <SideBarLinks
            key={uuidv4()}
            icon={link.text}
            text={link.text}
            path={link.link}
          />
        );
      })}
    </>
  );
}
