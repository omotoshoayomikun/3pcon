"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLinks } from "../../../utils/Links";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* THIS IS FOR HIDDEN LINK */}
      <Link href="#main-content" className={styles.skip_link}>Skip to Content</Link>
      {/* ----------------------- */}

      <header
        className={` ${styles.nav_container} ${
          pathName == "/" ? "nav-bg-home" : "nav-bg-shared"
        }`}
      >
        <Link href="/" className={styles.logo}>
          <Image src="/images/3pcon_logo.svg" alt="3pcon image" fill objectFit="contain" />
        </Link>
        <nav>
          {/* THIS IS FOR SMALLER SCREEN HANDBUGER */}
          <div
            className={`${styles.hamburger} ${sidebarOpen ? styles.open : ""}`}
            onClick={handleSidebar}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          {/* ------------------------------------ */}
          <div className={`${styles.nav_link} ${sidebarOpen ? styles.open : ""}`}>
            <div className={styles.sm_head}>
              <div className="relative">
                <Image src="/images/3pcon_logo.svg" alt="menu icon" width={100} height={60} />
              </div>
              <div onClick={() => setSidebarOpen(false)} className="mr-4">
              <Image src="/images/close.png" alt="menu icon" width={40} height={40} />
              </div>
            </div>
          <ul>
            {NavLinks.map((link, index) => {
              let checkURL = ""
              if(pathName.includes("services")) {
                checkURL = "/services"
              } else {
                checkURL = pathName
              }

              return (
              <li key={index}>
                <Link
                  href={link.url}
                  onClick={() => setSidebarOpen(false)}
                  className={`${
                    checkURL == link.url ? "text-[#4AD3D5]" : "text-white"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
              )
            }
            )}
          </ul>
          <div className={styles.sm_contact}>
            <div className="flex gap-10 mb-5">
              <Link href="">
                <Image src="/images/solution/blue-fb.png" alt="" width={27} height={27} />
              </Link>
              <Link href="">
                <Image src="/images/solution/blue-twitter.png" alt="" width={27} height={27} />
              </Link>
              <Link href="https://www.linkedin.com/company/94791400/admin/dashboard/">
                <Image src="/images/solution/blue-linkedin.png" alt="" width={27} height={27} />
              </Link>
            </div>
            <div className="mb-2">
              <Link href="mailto:3PCONtech@gmail.com">
                <div className="flex items-center gap-2 text-white">
                  <Image src="/images/solution/blue-fly.png" alt="" width={24} height={24} />
                  <span className="font-bold">3PCONtech@gmail.com</span>
                </div>
              </Link>  
            </div>
            <div className="">
              <Link href="tel:09060000278">
                <div className="flex items-center gap-2 text-white">
                  <Image src="/images/solution/blue-phone.png" alt="" width={24} height={24} />
                  <span className="font-bold">09060000278</span>
                </div>
              </Link>  
            </div>
            <div className="">
              <Link href="tel:09083511770">
                <div className="flex items-center gap-2 text-white">
                  <Image src="/images/solution/blue-phone.png" alt="" width={24} height={24} />
                  <span className="font-bold">09083511770</span>
                </div>
              </Link>  
            </div>
          </div>
          </div>
        </nav>
      </header>
      {/* THIS IS THE COVER THAT COVERS THE ENTIRE PAGE WHEN THE SIDEBAR IS OPEN */}
      <div
        onClick={() => setSidebarOpen(false)}
        style={{ visibility: sidebarOpen ? "visible" : "hidden", zIndex: -1 }}
        className={styles.auto_close}
      ></div>
      {/* ---------------------------------------------------------------- */}
    </>
  );
}

export default Navbar;
