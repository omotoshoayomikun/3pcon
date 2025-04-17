import React from 'react'
import styles from "./ServiceContent.module.css"
import {ServicesInterface} from "../../../utils/OurServiceData"
import Image from 'next/image'

function ServiceContent({datas}:{datas: ServicesInterface}) {
  return (
    <div className="py-[var(--shared-py)] px-[var(--shared-px)]">
    <p className="mb-5">{datas.heading}</p>
    <div className={styles.flex_wrapper}>
      {datas.main_content.map((data, index) => (
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
  )
}

export default ServiceContent