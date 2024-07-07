'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Reveal } from '../utils/reveal';

import { RxArrowTopRight } from 'react-icons/rx';

import { 
  BsSpotify,
} from 'react-icons/bs';

const songs = [
  {
    title: 'All This Time',
    artist: 'The Story So Far',
    link: 'https://open.spotify.com/track/5vl4Nfr9bPT1DKZRiQejQr?si=4d4e2246a7a340f0'
  },
  {
    title: 'ANABOLIC SPUDSMAN',
    artist: 'Bilmuri, Spencer Stewart',
    link: 'https://open.spotify.com/track/2ZNnF1YqMZiZjJYUKa2Be9?si=41ab285a315e4048'
  },
  {
    title: 'Really Big Shrimp',
    artist: 'Arm\'s Length',
    link: 'https://open.spotify.com/track/1HrlVqg8nu86YRdMIGOGzT?si=68b8832b0f6e48ac'
  },
  {
    title: 'You\'re Gonna Go Far',
    artist: 'Noah Kahan',
    link: 'https://open.spotify.com/track/4nHJcUtNSUVjXRnjdP29Bk?si=c5a66e67171e4175'
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
    <Reveal>
      <Link href={songLink} target="_blank" rel="noopener noreferrer"
        className="py-4 flex items-center justify-between group">
        <div className="flex items-center">
          <BsSpotify 
            className="text-green-500 text-4xl" />
          <div className="flex flex-col ml-4 space-y-1">
            <p className="font-medium text-xs tracking-widest text-neutral-500">On Repeat</p>
            <p className="font-light text-xs tracking-wide group-hover:underline underline-offset-4">
              {randomSong ? `${randomSong.title} by ${randomSong.artist}` : 'No song selected'}
            </p>
          </div>
        </div>
        <div className="mr-2">
          <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
        </div>
      </Link>
    </Reveal>
  );
};

export default OnRepeat;