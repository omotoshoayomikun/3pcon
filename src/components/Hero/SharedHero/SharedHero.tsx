import React from "react";
import styles from "./SharedHero.module.css";
import Image from "next/image";
import Link from "next/link";

interface ValueInterface {
  title: string;
  url: string;
}
function SharedHero({
  value,
  headerText,
}: {
  value: ValueInterface[];
  headerText: string;
}) {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center z-10">
        <h1 className="text-2xl md:text-5xl font-bold mb-2">{headerText}</h1>
        <div className="flex text-[14px] gap-2 items-center">
          <Link href="/">HOME</Link>
          <Image
            src="/images/solution/backward.svg"
            alt=""
            width={12}
            height={12}
          />
          {value.map((val, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link href={val.url} className={` ${value.length == index + 1 ? "text-[#41CFD2]" : "text-white"} `}>
                {val.title}
              </Link>
              {value.length !== index + 1 && (
                <Image
                  src="/images/solution/backward.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SharedHero;
