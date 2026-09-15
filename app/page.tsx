'use client';
import { useState } from 'react';
import Opening from '@/components/Opening';
import Beranda from '@/components/Beranda';
import EventDetail from '@/components/AboutEvent';
import DressCode from '@/components/Dresscode';
import Testimoni from '@/components/Testimoni';
import Gallery from '@/components/Gallery';
import Kehadiran from '@/components/Kehadiran';
import Closing from '@/components/Countdown';
import ReachUs from '@/components/ContactPerson';

export default function Home() {
  const [opened, setOpened] = useState(false);

  if (!opened) return <Opening onOpen={() => setOpened(true)} />;

  return (
    <div className="snap-container">
      <Beranda />
      <EventDetail />
      <DressCode />
      <Testimoni />
      <Gallery />
      <Kehadiran />
      <Closing />
      <ReachUs />
    </div>
  );
}