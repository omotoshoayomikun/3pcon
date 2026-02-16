"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '../Form/Button/Button'
import { useRouter } from 'next/navigation'
import Badge from '../Form/Badge'
import { UseGetApi } from '../../../utils/Action'

interface SpeakerI {
    name: string;
    title: string;
    image: string;
    bio?: string;
}

interface EventItemI {
    _id: string;
    image: string;
    title: string; // Changed from heading to match DB
    description: string; // Changed from des to match DB
    date: string;
    speakers: SpeakerI[];
}

function EventsService() {
    const router = useRouter()
    const [events, setEvents] = useState<EventItemI[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch dynamic events from the database
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await UseGetApi('api/events');
                console.log(response)
                if (response.success) {
                    setEvents(response.data);
                }
            } catch (error) {
                console.error("Failed to fetch events", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    // Helper to format date for the Badge (e.g., "FEB 18")
    const formatBadgeDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
    };

    if (loading) {
        return <div className="py-20 text-center font-bold">Loading Events...</div>;
    }

    return (
        <div className="py-[var(--shared-py)] px-[var(--shared-px)]">
            <h3 className="text-2xl font-bold text-center mb-8 text-[#09224E]">
                Register for our upcoming Webinar session
            </h3>

            {events.length === 0 ? (
                <p className="text-center text-gray-500">No upcoming events found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <div key={event._id} className="group">
                            <div className={`w-full h-[230px] relative mb-4 overflow-hidden rounded-xl shadow-md`}>
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay with Badges */}
                                <div className="absolute w-full h-[100%] bottom-0 flex flex-col justify-end" 
                                     style={{background: "linear-gradient(357.12deg, #09224E 15.34%, rgba(33, 44, 98, 0) 60.75%)"}}>
                                    <div className="p-3 flex justify-between items-center">
                                        <Badge color='info'>{formatBadgeDate(event.date)}</Badge>
                                        <Badge color='warning' styles={{borderRadius: "4px", fontSize: "10px"}}>INCOMING</Badge>
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-bold text-[1.2rem] mb-2 text-[#09224E] line-clamp-2">
                                {event.title}
                            </h3>
                            
                            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                                {event.description}
                            </p>

                            {/* Speaker Mini-Preview */}
                            {event.speakers && event.speakers.length > 0 && (
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                                        <Image 
                                            src={event.speakers[0].image || "/images/solution/manx.png"} 
                                            fill 
                                            alt="host" 
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-[11px] font-semibold text-gray-500">
                                        Host: {event.speakers[0].name}
                                    </span>
                                </div>
                            )}

                            <div className="md:mt-2">
                                <Button
                                    title='Register'
                                    btnStyle={{ paddingBlock: "6px", borderRadius: "20px", width: "120px" }}
                                    handleClick={() => router.push(`/events/${event._id}`)}
                                    icon={"/images/arrow.svg"}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Meet Our Host Section (Using data from the first available event or a dedicated host profile) */}
            <h3 className="text-2xl font-bold mb-8 mt-20 text-[#09224E]">Meet our Host</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center bg-gray-50 p-6 md:p-10 rounded-3xl">
                <div className="relative h-[350px] w-full">
                    <Image
                        src="/images/solution/manx.png"
                        alt="Adesegun Orafidiya"
                        fill
                        className="object-contain"
                    />
                </div>
                <div>
                    <h3 className='text-3xl font-bold mb-4 text-[#09224E]'>Adesegun Orafidiya</h3>
                    <p className="text-gray-700 leading-relaxed italic">
                        We recognize the pivotal role of technology in shaping the future of products and services. 
                        With a strong focus on customer success, we deliver tailored solutions that align with 
                        each organization&apos;s unique goals.
                    </p>
                    <p className="mt-4 text-gray-600">
                        By maintaining high professional standards and a customer-centric approach, 
                        we help businesses achieve both their operational and strategic objectives.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EventsService