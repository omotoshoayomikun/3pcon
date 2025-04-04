"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css"
import { NavLinks } from "../../../utils/Links";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathName = usePathname();
    console.log(pathName)

  return (
    <header className={` ${styles.nav_container} ${pathName == "/"? "nav-bg-home" : "nav-bg-shared"}`}>
      <Link href="/" className="relative w-[120px] h-full">
        <Image src="/images/3pcon_logo.svg" alt="3pcon image" fill />
      </Link>
      <nav>
        {/* THIS IS FOR SMALLER SCREEN HANDBUGER */}
        <div className={styles.handbuger}></div>
        {/* ------------------------------------ */}
      <ul className={`${styles.nav_link}`}>
        {
            NavLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url} className={`${pathName == link.url ? "text-[#4AD3D5]" : "text-white"}`}>{link.title}</Link>
              </li>
            ))
        }
      </ul>
      </nav>
    </header>
  );
}

export default Navbar;
