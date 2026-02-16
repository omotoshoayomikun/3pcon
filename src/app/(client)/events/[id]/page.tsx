"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { UseGetApi, PostApi } from '../../../../../utils/Action';
import { Input } from '@/components/Form/Input/Input';
import { Button } from '@/components/Form/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import { SlCalender } from 'react-icons/sl';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Label from '@/components/Form/Label';
import EventSuccessModel from '@/components/Events/EventSuccessModel';
import { EventI, SpeakerI } from '../../../../../utils/types';

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState<EventI | null>(null);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [model, setModel] = useState(false);
    const [regData, setRegData] = useState({ firstname: "", lastname: "", email: "", phone: "", source: "" });

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                setFetching(true)
                const res = await UseGetApi(`api/events/${id}`);
                if (res.success) {
                    setEvent(res.data);
                }
            } finally {
                setFetching(false)
            }
        };
        fetchDetail();
    }, [id]);
const handleRegister = async () => {
    const { firstname, lastname, email, phone, source } = regData;

    // 1. Comprehensive Field Check
    if (!firstname.trim() || !lastname.trim() || !email.trim() || !phone.trim() || !source) {
        return toast.error("Please fill in all registration fields");
    }

    // 2. Email Format Validation (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return toast.error("Please enter a valid email address");
    }

    // 3. Phone Number Length Check (Optional but recommended)
    if (phone.length < 10) {
        return toast.error("Please enter a valid phone number");
    }

    setLoading(true);
    
    const payload = { 
        ...regData, 
        eventId: id, 
        eventTitle: event?.title 
    };

    try {
        const res = await PostApi(`api/webinar`, payload);
        
        if (res.success) {
            setModel(true);
            // Optional: Don't clear regData yet so the Modal can show the email address 
            // used, then clear it when the modal closes.
        } else {
            // This handles "Already Registered" or other server errors
            // toast.error(res.message || "Registration failed. Please try again.");
        }
    } catch (error) {
        console.log(error)
        toast.error("A network error occurred.");
    } finally {
        setLoading(false);
    }
};

    if (fetching) return <div className="p-20 text-center">Loading Event...</div>;

    const sources = ["LinkedIn", "Twitter", "Instagram", "Facebook", "Friend", "Other"];

    return (
        <div className="mt-[var(--fixed-h-value)]">
            <SharedHero value={[{ title: "Events", url: "/events" }]} headerText={ event?.title || "Registration"} />

            {
                event ? (
                    <section className="grid md:grid-cols-2 grid-cols-1 px-(--shared-px) py-(--shared-py) gap-[50px]">
                        {/* Form Side */}
                        <div>
                            <h2 className="font-bold text-3xl mb-4">Registration</h2>
                            <div className="flex gap-4 items-center mb-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <SlCalender size={35} className="text-[#09224E]" />
                                <div>
                                    <h4 className='font-bold text-xl leading-tight text-[#09224E]'>
                                        {new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </h4>
                                    <p className='text-blue-600 font-semibold'>
                                        {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (GMT+1)
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="First Name" value={regData.firstname} handleChange={(e) => setRegData({ ...regData, firstname: e.target.value })} />
                                    <Input placeholder="Last Name" value={regData.lastname} handleChange={(e) => setRegData({ ...regData, lastname: e.target.value })} />
                                </div>
                                <Input placeholder="Email" type="email" value={regData.email} handleChange={(e) => setRegData({ ...regData, email: e.target.value })} />
                                <Input placeholder="Phone" value={regData.phone} handleChange={(e) => setRegData({ ...regData, phone: e.target.value })} />

                                {/* Restored Radio Buttons */}
                                <div className="py-2">
                                    <Label className="mb-3 block font-bold text-gray-700">How did you find us?</Label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {sources.map((src) => (
                                            <label key={src} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="source"
                                                    value={src}
                                                    checked={regData.source === src}
                                                    onChange={(e) => setRegData({ ...regData, source: e.target.value })}
                                                    className="w-4 h-4 accent-[#09224E]"
                                                />
                                                <span className="text-sm text-gray-600 group-hover:text-black">{src}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <Button title="REGISTER NOW" handleClick={handleRegister} loading={loading} btnStyle={{ width: "100%" }} />
                            </div>

                        </div>

                        {/* Speakers Side */}
                        <div>

                            <div className="mb-8">
                                <h2 className="font-bold text-3xl mb-4 text-[#09224E]">About Event</h2>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {event.description}
                                </p>
                            </div>
                            <h2 className="font-bold text-3xl mb-8">Meet our Speakers</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {event.speakers?.map((speaker: SpeakerI, i: number) => (
                                    <div key={i} className="group">
                                        <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 border-4 border-white shadow-md">
                                            <Image src={speaker.image} fill className="object-cover group-hover:scale-110 transition-transform duration-500" alt={speaker.name} />
                                        </div>
                                        <h3 className="font-bold text-xl">{speaker.name}</h3>
                                        <p className="text-gray-500 text-sm mb-3">{speaker.title}</p>
                                        <div className="flex gap-3 text-gray-400">
                                            {
                                                speaker.linkedin && <Link href={speaker.linkedin || "#"} className="hover:text-blue-600"><FaLinkedin size={20} /></Link>
                                            }
                                            {
                                                speaker.twitter &&  <Link href={speaker.twitter || "#"} className="hover:text-blue-400"><FaTwitter size={20} /></Link>
                                            }
                                            {
                                                speaker.instagram && <Link href={speaker.instagram || "#"} className="hover:text-pink-600"><FaInstagram size={20} /></Link>
                                            }
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ) : (
                    <div className="p-20 text-center">Error loading event details</div>
                )
            }


            {/* Success Modal */}
            {model && event && (
                <EventSuccessModel isOpen={model} closeModal={() => {
                    setModel(false)
                    setRegData({ firstname: "", lastname: "", email: "", phone: "", source: "" })
                }}>
                    <div className="flex flex-col items-center py-4">
                        <div className="relative w-24 h-24 mb-4 bg-green-50 rounded-full flex items-center justify-center">
                            <Image src="/images/correct.png" alt="success" width={80} height={80} className="object-contain" />
                        </div>

                        <h4 className="font-black text-[#09224E] text-3xl text-center mb-2">
                            YOU&apos;RE IN!
                        </h4>

                        <h4 className="font-bold text-gray-700 text-lg text-center px-4 leading-tight mb-4">
                            {event.title}
                        </h4>

                        <div className="bg-blue-50 px-6 py-3 rounded-xl border border-blue-100 mb-6 w-full">
                            <p className='text-center text-[#09224E] font-bold text-sm'>
                                {new Date(event.date).toLocaleDateString('en-GB', {
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </p>
                            <p className='text-center text-blue-600 font-semibold text-xs'>
                                {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (GMT+1)
                            </p>
                        </div>

                        <div className="w-full h-[1px] bg-gray-100 mb-6"></div>

                        <p className='text-center text-gray-500 text-sm max-w-[80%] leading-relaxed'>
                            Check your inbox! We&apos;ve sent a confirmation email to <strong>{regData.email}</strong> with your access details.
                        </p>

                        <button
                            onClick={() => setModel(false)}
                            className="mt-8 text-[#09224E] font-bold hover:underline transition-all"
                        >
                            Back to Event
                        </button>
                    </div>
                </EventSuccessModel>
            )}
        </div>
    );
}

export default EventDetails;