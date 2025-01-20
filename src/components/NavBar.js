import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const listElements = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a >
  });
  return <nav>{listElements}</nav>;
}

export default NavBar;
