'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Section } from './section';

const pictures = [
  {
    url: '/gallery/1.jpeg',
    location: 'Florida',
  },
  {
    url: '/gallery/2.jpeg',
    location: 'Minnesota',
  },
  {
    url: '/gallery/3.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/4.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/5.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/6.jpeg',
    location: 'Georgia',
  },
  {
    url: '/gallery/7.jpg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/8.jpg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/9.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/10.jpeg',
    location: 'Minnesota',
  },
  {
    url: '/gallery/11.jpg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/12.jpeg',
    location: 'Florida', 
  },
];

type Picture = typeof pictures[number];

const Gallery: React.FC = () => {
  const [randomPictures, setRandomPictures] = useState<Picture[]>([]);

  useEffect(() => {
    const selectedPictures: Picture[] = [];

    while (selectedPictures.length < 2) {
      const randomIndex = Math.floor(Math.random() * pictures.length);
      const randomPicture = pictures[randomIndex];

      // Ensure the selected picture is not already in the list
      if (!selectedPictures.some((pic) => pic.url === randomPicture.url)) {
        selectedPictures.push(randomPicture);
      }
    }

    setRandomPictures(selectedPictures);
  }, []);

  return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {randomPictures.map((picture, index) => (
          <div 
            key={index} 
            className={`relative group overflow-hidden shadow-md rounded-md ${
              index === 0 ? 'col-span-1 sm:col-span-2' : 'hidden sm:block sm:col-span-1'
            }`}
          >
            <Image 
              src={picture.url} 
              alt={`Random Picture ${index + 1} - ${picture.location}`} 
              width={1000}
              height={1000}
              className="h-full w-full object-cover" 
            />
            <div className="absolute transform duration-500 -bottom-10 left-2 group-hover:bottom-2">
              <div className="bg-white dark:bg-[#111] p-2 rounded-lg text-sm text-neutral-500">
                <p>{picture.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Gallery;

