'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { RxArrowTopRight } from 'react-icons/rx';

import { 
  BsSpotify,
} from 'react-icons/bs';

import { Section } from './section';

const songs = [
  {
    title: 'No Shoes in the Coffee Shop (Or Socks)',
    artist: 'Hot Mulligan',
    link: 'https://open.spotify.com/track/67BoLcQZhPok0yVe9J0Br8?si=f5e48d5bf06149ed'
  },
  {
    title: 'THE END',
    artist: 'Bilmuri',
    link: 'https://open.spotify.com/track/1u8esuXKqxbKsleihNp7wo?si=fc9792f432d64ba0'
  },
  {
    title: 'maybe it\'s me',
    artist: 'Four Year Strong',
    link: 'https://open.spotify.com/track/3IQ6lvRicxZpI3AhQaGPI5?si=64616fefc9544995'
  },
  {
    title: 'Afraid To Die',
    artist: 'Movements',
    link: 'https://open.spotify.com/track/5RpbbEcE5IdL9Dyr6mRZVi?si=a52285752b6a4098'
  },
  {
    title: 'Clash',
    artist: 'Dave, Stormzy',
    link: 'https://open.spotify.com/track/2zxEc1GCSCxbHIXTfhraRC?si=32d5df5604a1477e'
  },
];

const OnRepeat: React.FC = () => {
  const [randomSong, setRandomSong] = useState<{ title: string; artist: string; link: string } | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setRandomSong(songs[randomIndex]);
  }, []);

  const songLink = randomSong?.link || '';

  return (
    <Section title="On Repeat"> 
        <Link href={songLink} target="_blank" rel="noopener noreferrer" 
          className="flex items-center justify-between group">
          <div className="flex items-center gap-2">
            <BsSpotify className="text-green-500" />
            <p className="font-light text-xs tracking-wide group-hover:underline underline-offset-4">
              {randomSong ? `${randomSong.title} by ${randomSong.artist}` : 'No song selected'}
            </p>
          </div>
          <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
        </Link>
    </Section>
  );
};

export default OnRepeat;