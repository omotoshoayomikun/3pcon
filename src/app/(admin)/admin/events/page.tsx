"use client"

import { Button } from '@/components/Form/Button/Button'
import { Input } from '@/components/Form/Input/Input';
import { Modal } from '@/components/modal';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { PostApi, UseGetApi, UsePutApi, UseDeleteApi } from '../../../../../utils/Action';
import toast from 'react-hot-toast';
import Label from '@/components/Form/Label';
import Badge from '@/components/Form/Badge';

interface SpeakerI {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

interface EventI {
  _id?: string;
  title: string;
  date: string;
  description: string;
  image: string;
  speakers: SpeakerI[];
}

export default function ManageEvent() {
  const [events, setEvents] = useState<EventI[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventI | null>(null);

  const [formData, setFormData] = useState<EventI>({
    title: "", date: "", description: "", image: "",
    speakers: []
  });

  const fetchEvents = async () => {
    const res = await UseGetApi('api/events');
    if (res.success) setEvents(res.data);
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleOpenModal = (event?: EventI) => {
    if (event) {
      setSelectedEvent(event);
      setFormData({ ...event, date: new Date(event.date).toISOString().slice(0, 16) });
    } else {
      setSelectedEvent(null);
      setFormData({ title: "", date: "", description: "", image: "", speakers: [] });
    }
    setIsModalOpen(true);
  };
const addSpeaker = () => {
    setFormData((prev) => ({
      ...prev,
      speakers: [
        ...(prev.speakers || []), 
        { name: "", title: "", image: "", linkedin: "", twitter: "", instagram: "" }
      ]
    }));
  };

  const updateSpeaker = (index: number, field: keyof SpeakerI, value: string) => {
    setFormData((prev) => {
      const updatedSpeakers = [...prev.speakers];
      updatedSpeakers[index] = { ...updatedSpeakers[index], [field]: value };
      return { ...prev, speakers: updatedSpeakers };
    });
  };

  const removeSpeaker = (index: number) => {
    setFormData({ ...formData, speakers: formData.speakers.filter((_, i) => i !== index) });
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      const res = await UseDeleteApi(`api/events/${id}`);
      if (res.success) {
        toast.success("Event deleted");
        fetchEvents();
      }
    }
  }

  const handleSubmit = async () => {
    setLoading(true);
    const endpoint = selectedEvent ? `api/events/${selectedEvent._id}` : 'api/events';
    const method = selectedEvent ? UsePutApi : PostApi;
    const res = await method(endpoint, formData);
    if (res.success) {
      toast.success("Event Saved!");
      setIsModalOpen(false);
      fetchEvents();
    }
    setLoading(false);
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-[#09224E]">Manage Events</h2>
        <Button title='Add Event' handleClick={() => handleOpenModal()} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event._id} className="border rounded-xl p-4 bg-white shadow-sm">
            <div className="relative h-40 w-full mb-4">
              <Image src={event.image || "/images/placeholder.png"} fill className="object-cover rounded-lg" alt="" />
            </div>
            <h3 className="font-bold text-lg text-[#09224E] line-clamp-1">{event.title}</h3>
            <p className="text-xs text-blue-600 font-bold mb-3">{new Date(event.date).toDateString()}</p>
            <p className="text-gray-600 text-sm line-clamp-3">{event.description}</p>
            <div className="flex gap-4 mt-4 justify-between">
              <div className="flex gap-4">
                <button onClick={() => handleOpenModal(event)} className="text-blue-600 text-sm font-bold">Edit</button>
                <button onClick={() => handleDelete(event._id!)} className="text-red-600 text-sm font-bold">Delete</button>
              </div>
              <div className="">
                <Badge color='warning' styles={{borderRadius: "4px", fontSize: "10px", fontWeight: 700, paddingBlock: "4px"}}>INCOMING</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="max-w-[600px] p-5">
        <h3 className="text-2xl font-bold mb-6 text-[#09224E]">Event Setup</h3>
        <div className="space-y-4 max-h-[80vh] overflow-y-auto px-2">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Event Title" value={formData.title} handleChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            <Input label="Date & Time" type="datetime-local" value={formData.date} handleChange={(e) => setFormData({ ...formData, date: e.target.value })} />
          </div>

          <Input label="Main Cover Image URL" value={formData.image} handleChange={(e) => setFormData({ ...formData, image: e.target.value })} />

          <div className="flex flex-col gap-1">
            <Label>Description</Label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded-lg h-20 focus:ring-1 focus:ring-blue-500 outline-none"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <Label className="text-lg font-bold">Speakers ({formData?.speakers?.length || "0"})</Label>
            <button onClick={addSpeaker} className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-700">
              + Add Speaker
            </button>
          </div>

          <div className="space-y-6">
            {formData.speakers && formData.speakers.map((s, i) => (
              <div key={i} className="p-5 border border-gray-200 rounded-xl bg-gray-50 relative">
                <button onClick={() => removeSpeaker(i)} className="absolute top-2 right-3 text-red-500 font-bold text-xs">Remove</button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Speaker Basic Info */}
                  {/* <div className="space-y-3"> */}
                  <Input placeholder="Speaker Name" value={s.name} handleChange={(e) => updateSpeaker(i, 'name', e.target.value)} />
                  <Input placeholder="Job Title" value={s.title} handleChange={(e) => updateSpeaker(i, 'title', e.target.value)} />
                  {/* <div className="flex items-center gap-3"> */}
                  {/* <div className="relative w-12 h-12 rounded-full overflow-hidden border bg-white flex-shrink-0">
                            {s.image && <Image src={s.image} fill className="object-cover" alt="avatar" />}
                        </div> */}
                  <Input placeholder="Image URL" value={s.image} handleChange={(e) => updateSpeaker(i, 'image', e.target.value)} />
                  {/* </div> */}
                  {/* </div> */}

                  {/* Speaker Socials */}
                  {/* <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3"> */}
                  <Input placeholder="LinkedIn Profile URL" value={s.linkedin || ""} handleChange={(e) => updateSpeaker(i, 'linkedin', e.target.value)} />
                  <Input placeholder="Twitter Profile URL" value={s.twitter || ""} handleChange={(e) => updateSpeaker(i, 'twitter', e.target.value)} />
                  <Input placeholder="Instagram Profile URL" value={s.instagram || ""} handleChange={(e) => updateSpeaker(i, 'instagram', e.target.value)} />
                  <div className="hidden sm:block"></div> {/* Spacer */}
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Button title={loading ? "Processing..." : "Save Full Event"} handleClick={handleSubmit} btnStyle={{ width: "100%" }} />
          </div>
        </div>
      </Modal>
    </div>
  )
}