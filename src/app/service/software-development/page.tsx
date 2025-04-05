import SharedHero from "@/components/Hero/SharedHero/SharedHero";
import styles from "./Software.module.css";
import React from "react";
import Image from "next/image";
import { SoftwareDevData } from "../../../../utils/OurServiceData";

function page() {
  const NavInfo = [
    {
      title: "Service",
      url: "/service",
    },
    {
      title: "Software Development",
      url: "/software-development",
    },
  ];
  return (
    <div className={styles.container_box}>
      <SharedHero value={NavInfo} headerText="Software Develoment" />
      <div className="py-[var(--shared-py)] px-[var(--shared-px)]">
        <p className="mb-5">
          In today’s fast-paced digital landscape, custom software solutions can
          be a key differentiator for businesses. At 3PCON, we specialize in
          providing top-notch software development services that cater to the
          unique needs of our clients. Our team of experts leverages
          cutting-edge technologies, agile methodologies, and industry best
          practices to design, develop, and deploy scalable, secure, and
          efficient software solutions.
        </p>
        <div className={styles.flex_wrapper}>
          {SoftwareDevData.map((data, index) => (
            <div key={index} className={`${styles.flex_box} mb-14`}>
              <div className={`${styles.side1}`}>
                <Image src={data.image} alt="" fill />
              </div>
              <div className={styles.side2}>
                <h3 className="text-heading">{data.title}</h3>
                <p className="my-3.5">{data.des}</p>
                <h3 className="font-bold text-[1.5rem] mb-3.5">
                  {data.listTitle}
                </h3>
                <ul>
                  {data.list.map((list, index) => (
                    <li key={index}>
                      <div className="flex gap-3 mb-5" key={index}>
                        <Image
                          src="/images/solution/checked.svg"
                          alt=""
                          width={25}
                          height={25}
                        />
                        <p className="text-[18px]">{list}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
