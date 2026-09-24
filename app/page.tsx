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
import WordsFromOCP from '@/components/WordsFromOCP';
import Bridging from '@/components/Bridging';

export default function Home() {
  const [opened, setOpened] = useState(false);

  if (!opened) return <Opening onOpen={() => setOpened(true)} />;

  return (
    <main className="relative bg-sand min-h-screen overflow-x-hidden">
      <Beranda />
      <Bridging />
      <WordsFromOCP />
      <EventDetail />
      <DressCode />
      <Testimoni />
      <Gallery />
      <Kehadiran />
      <Closing />
      <ReachUs />
    </main>
  );
}