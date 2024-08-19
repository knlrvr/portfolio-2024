'use client'

import React, { useState } from 'react'
import { Reveal } from '../utils/reveal'

import { useMutation, useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'

import { SignInButton, SignOutButton, useUser } from '@clerk/clerk-react'

import { RxArrowRight } from 'react-icons/rx'

const GuestbookForm = () => {
  const [text, setText] = useState("");
  const createNote = useMutation(api.notes.createNote); 
  const notes = useQuery(api.notes.getNotes); 

  const { user } = useUser();

  return (
    <div className="">
      <div className="flex flex-col">

        {!user && (
          <Reveal>
            <div className="mt-4 rounded-full text-sm mb-[2.15rem] w-fit">
              <SignInButton mode='modal' afterSignInUrl='/guestbook'>
                <div className="flex items-center gap-1 text-sm text-neutral-400 group cursor-pointer">
                  <span className="group-hover:underline underline-offset-4">Sign in to leave a message</span>
                  <span className="group-hover:translate-x-1.5 transition duration-100">
                      <RxArrowRight />
                  </span>
                </div>
              </SignInButton>
            </div>
          </Reveal>
        )}

      </div>

      {user && (
        <Reveal>
          <div>
            <form 
              onSubmit={e => {
                e.preventDefault();
                createNote({
                  body: text,
                  author: user?.fullName || user?.username || '',
                });
                setText('')
              }}
              className="w-full md:w-1/2 -ml-1 flex py-2"
            >

              <input 
                value={text} 
                onChange={e => setText(e.target.value)}
                className="bg-transparent rounded-md w-full placeholder:text-neutral-500 mr-3 py-2 text-sm border px-2"
                required
                placeholder='Leave a message here!'
              />
              <button
                className="px-6 uppercase py-1.5 w-20 flex justify-center items-center font-light text-sm rounded-md bg-[#e5e5e5] text-[#111] hover:bg-neutral-400 transition-colors duration-200">sign</button>
            </form>
            <div className="text-xs text-neutral-500">
              <SignOutButton />
            </div>
          </div>
        </Reveal>
      )}
      
      <Reveal>
        <div className="pt-6 text-sm">
          {notes?.map(note => {
            return <div key={note._id} className="flex flex-col">
              <div className="text-[0.825rem] my-2"> 
                <span className="text-neutral-500">{note.author}:</span>
                <span className="font-light tracking-wide leading-6 mt-4">&nbsp;{note.body}</span> 
              </div>
            </div>
          })}
        </div>
      </Reveal>

    </div>
  )
}

export default GuestbookForm