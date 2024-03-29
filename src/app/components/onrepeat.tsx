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
    title: 'Big Blind',
    artist: 'The Story So Far',
    link: 'https://open.spotify.com/track/5IiyHmNFsTx6PLI2diNH98?si=af2946545b9548c1'
  },
  {
    title: 'Overcome',
    artist: 'Nothing But Thieves',
    link: 'https://open.spotify.com/track/18q5OmlDTbSm8w9J1i17dT?si=d03902ace3c9482a'
  },
  {
    title: 'Seasonal',
    artist: 'glasslight',
    link: 'https://open.spotify.com/track/6mKFrX61Q81ie7KA5iXVcu?si=70cfa7daf7554ec5'
  },
  {
    title: 'Chemical',
    artist: 'Post Malone',
    link: 'https://open.spotify.com/track/5w40ZYhbBMAlHYNDaVJIUu?si=e83419a0e4b9470f'
  },
  {
    title: '234',
    artist: 'Driveways',
    link: 'https://open.spotify.com/track/2kXs5h6xwYvzbYmYlXRK3E?si=6c501bc756044ca2'
  },
  {
    title: 'Everywhere, Everything',
    artist: 'Noah Kahan',
    link: 'https://open.spotify.com/track/7rn89zBlXChGFTNHFZA8un?si=2a1dd7ebb38a4d66'
  }
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