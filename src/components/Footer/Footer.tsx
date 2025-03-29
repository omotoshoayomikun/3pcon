import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import { FooterData } from "../../../utils/OurServiceData";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="grid grid-cols-4 gap-5">
        <div className="">
          <div className="relative w-[120px] h-[70px] mb-3">
            <Image src="/images/3pcon_logo.svg" alt="3pcon image" fill />
          </div>
          <p>
            We are guided by our core values  of customer <b>Centricity</b>, <b>Courage</b>,
            <b>Respect</b> and <b>Collaboration</b>.
          </p>
          <div className="flex gap-8 mt-5">
            <Link href="">
            <Image src="/images/solution/facebook.png" alt="" width={24} height={24} />
            </Link>
            <Link href="">
            <Image src="/images/solution/twitter.png" alt="" width={24} height={24} />
            </Link>
            <Link href="">
            <Image src="/images/solution/linkedin.png" alt="" width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className="">
          <h3 className="text-[26px] font-bold mb-5">IT Solution</h3>
          {
            FooterData.section2.map((data, index) => (
              <div key={index} className="flex item-center gap-2 mb-4">
                <Image src="/images/solution/x14.svg" alt="" width={16} height={16} />
                <p>{data.title}</p>
              </div>
            ))
          }
        </div>
        <div className="">
        <h3 className="text-[26px] font-bold mb-5">IT Solution</h3>
          {
            FooterData.section3.map((data, index) => (
              <div key={index} className="flex item-center gap-2 mb-4">
                <Image src="/images/solution/x14.svg" alt="" width={16} height={16} />
                <p>{data.title}</p>
              </div>
            ))
          }
        </div>
        <div className=""></div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Image src="/images/solution/copyright.svg" alt="" width={16} height={16} />
          All Copyright 2025 by 3PCON
          </div>
        <div className="flex gap-2 items-center">
          <div>Terms & Condition</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
