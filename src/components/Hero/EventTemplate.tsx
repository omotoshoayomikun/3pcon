import React from 'react'
import { Button } from '../Form/Button/Button';

function EventTemplate({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>{children}</>
    )
}

export default EventTemplate


export const Webiner1 = () => {
    return (
        <div
            className="w-full min-w-[100%] h-full p-[var(--shared-px)] flex flex-col justify-center overflow-hidden m-0 bg-contain bg-no-repeat bg-blend-overlay"
            style={{ background: "url('/images/solution/bg-x1.png') 0px 0px/cover no-repeat, #07224F " }}
        >
            <div className="md:text-2xl text-xl font-extrabold text-[#41CFD2] w-max text-left md:text-right  md:ml-auto md:mr-0 leading-6 mb-5" style={{ fontFamily: "var(--font-inter)" }}>
                FREE <br /> WEBINAR
            </div>
            <div className="max-w-[600px] w-full mx-auto mb-5">
                <h3 className='font-extrabold md:text-[3.4rem] text-3xl text-center mb-4' style={{ fontFamily: "var(--font-inter)" }}>Merging Physical and Digital Experiences for the New Retail Era</h3>
                <p className='text-[#41CFD2] text-center mb-4 text-xl'>How IoT (Internet of Things) and Augmented Reality are changing how we interact with physical products.</p>
                <div className="w-max mx-auto">
                    <Button
                        btnStyle={{ borderRadius: "20px", backgroundColor: "white", color: "var(--bg-dark-blue)", paddingInline: "20px", paddingBlock: "6px" }}
                        title='Register'
                        handleClick={() => { }}
                    />
                </div>
            </div>
            <div className="w-max py-1.5 px-3 h-auto bg-white text-[#07224F]">
                <div className="text-sm">TUESDAY</div>
                <div className="text-4xl font-light leading-7">FEB</div>
                <div className="text-[1.9rem] font-bold leading-8">17th</div>
                <div className="flex justify-between font-light text-sm leading-3">
                    <div className="">10</div>
                    <div className="">AM</div>
                </div>
            </div>
        </div>
    )
}