---
title: 'How I Added A Guestbook To My Portfolio'
description: 'Using Convex with Next.js to create a Guestbook'
tags: ['Next.js', 'Convex', 'webdev', 'tutorial']
date: 'November 3, 2023'
---

While I was taking a look around at "professional dev" portfolios (that's literally what I googled) and trying to turn inspiration into creation for my new portfolio, I came across [Lee Robinson's Portfolio](https://leerob.io/). I was a big fan of the overall design, but I was far more intrigued with their *guestbook*. I'd never seen a guestbook on a portfolio site, and as soon as I saw it, I knew I had to have one. Luckily, I'd had my fair share of work in setting up authentication and databases, especially after my work on [TTRPCompanion](https://github.com/knlrvr/ttrpcompanion), so I knew it wouldn't be anything too far from my current realm of knowledge. However, I wanted to learn more. It's a portfolio, right? I should be showcasing my skills, or at least my ability to learn new skills quickly. 

As a (mostly) self-taught dev, I try to keep up with current news, making sure I'm following plenty of accomplished (but reputable!) tech influencers & content creators. In doing so, I saw that [Web Dev Cody](https://www.youtube.com/@WebDevCody/featured) was hosting a hackathon. I wasn't able to participate in the hackathon, but it was based on [Convex](https://www.convex.dev/), a backend platform. The timing was perfect. 

I was looking for something to learn, and I'd found it. And it was a **dream** to work with. So, here's how I added a guestbook to my portfolio using Convex.   

## Let's Dive In!
The Convex docs are incredible. They have guides depending on your use case, and a ton of detailed information that will help you along the way. For me, I went ahead with their Next.js quickstart guide. I already had an existing project, so the first thing I needed to do was install the convex client and server library. 

```
npm install convex
```

Next, I had to set up a convex dev deployment.

```
npx convex dev
```

This prompted me to login with GitHub, create a project, and save prod & deployment URLS. This also created a **convex/** folder, where I needed to write the backend API functions. 

With Convex installed and the **dev** command running to sync functions with the dev deployment, it was time to start coding. 
First, I had to create a client component for the convex provider. I created  **ConvexClientProvider.tsx** in the **app/** folder, and pasted the provided code from Convex. This code would wrap the application. 

```js
// ConvexClientProvider.tsx

"use client";
import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
```

However, this code isn't used at all. **Why?** Since I wanted the functionality of a guestbook, I needed to know *who* was signing it. For this, I needed some kind of authentication. Since I was using Convex, I decided to use [Clerk](https://docs.convex.dev/auth/clerk) for authentication, as they have a super easy setup. Setting the database up with authentication differs slightly from what's provided in the quickstart guide. 

Before doing anything else in the project, I needed to create a new application in Clerk. Within Clerk, I chose the Convex template, and copied the Issuer URL from the Issuer input field, and saved the template. Now, in the **convex** folder, I created **auth.config.js** and pasted the following code from Convex, changing the *domain* to what was actually generated. 

```js
// auth.config.js

export default {
  providers: [
    {
      domain: "https://your-issuer-url.clerk.accounts.dev/",
      applicationID: "convex",
    },
  ]
};
```

Now I needed to sync the config to the backend. Once that was done, I could continue by installing clerk. 

```
npx convex dev
```

```
npm install @clerk/clerk-react
```

With Clerk installed and set up, I just needed to grab the Publishable Key to connect to the application. I also needed to import a few things from Clerk & Convex in the **app/layout.tsx** file to wrap the application.

```js
// layout.tsx

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from 'convex/react'
```

I also needed to define the client, which would be the Convex dev deployment url. 

```js
// layout.tsx

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
```

With all of that out of the way, I could now wrap the application with the necessary requirements. 

```js
// layout.tsx

<ClerkProvider publishableKey='your-publishable-key-provided-by-Clerk'>
  <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
    <div className="p-4">
      <Header />
      {children}
      <Footer />
    </div>
  </ConvexProviderWithClerk>
</ClerkProvider>
```

Perfect! The next thing I did was add the ability to sign in within **guestbook.tsx**. Luckily, sign in/out buttons are provided by Clerk. I'll also import **useUser** so I can access the current user data and save the user's name with their message. 

```js
// guestbook.tsx

import { SignInButton, SignOutButton, useUser } from '@clerk/clerk-react'
```

Now that visitors are able to sign in, I needed to add the functionality of 'signing'. I wanted visitors to be able to leave messages of some kind when they signed. So, within the **convex/** folder, I added the file **notes.tsx**. The form in **guestbook.tsx** will allow the visitor to input their message & **notes.tsx** will take the form input from the visitor and store it in the database.

```js
// notes.tsx

import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const createNote = mutation({
    args: { 
        body: v.string(), 
        author: v.string(), 
    },
    handler: async (ctx, args) => {
        const noteId = await ctx.db.insert("notes", {
            body: args.body,
            author: args.author,
        });
    },
});
```



```js
// guestbook.tsx

const createNote = useMutation(api.notes.createNote); 

<form 
  onSubmit={e => {
  e.preventDefault();
  createNote({
    body: text,
    author: user?.fullName || user?.username || '',
    });
  setText('')
  }}
  className="w-full md:w-1/2 mt-4 flex py-2"
>
  <input 
    value={text} 
    onChange={e => setText(e.target.value)}
    className="container bg-transparent rounded-full w-full placeholder:text-neutral-500 mr-3 ml-1 px-4 py-2"
    required
    placeholder='Leave a message here!'
  />
  <button
    className="px-6 uppercase py-1.5 rounded-full container w-20 flex justify-center items-center font-light
    text-sm"
    >
      sign
  </button>
</form>
<div className="ml-4 text-xs">
  <SignOutButton />
</div>
```

The next thing I needed to do was display the messages left by visitors, so anyone who visited the page could see the messages as well, whether they were signed in or not. This meant I needed to **query** the data in the database and display each entry.

```js
// notes.tsx

export const getNotes = query({
    handler: async (ctx) => {
        return ctx.db.query("notes").order('desc').collect();
    }
})
```



```js
// guestbook.tsx

const notes = useQuery(api.notes.getNotes);

{notes?.map(note => {
  const creationTimeMs = note._creationTime;
  const date = new Date(creationTimeMs);

//  const options: Intl.DateTimeFormatOptions = {
//    year: 'numeric',
//    month: 'short',
//    day: 'numeric',
//    hour: '2-digit',
//    minute: '2-digit',
//  }

  const formattedDate = date.toLocaleDateString('en-US', options);

  return <div key={note._id} className="flex flex-col tracking-wide">
    <div className="text-xs my-2"> 
      <span className="text-neutral-500">{note.author}:</span>
        <span className="">&nbsp;{note.body}</span> 
      </div>
      {/* <span className="text-neutral-500 text-xs">{formattedDate}</span> */}
    </div>
})}
```

###### I used to display the date & time of each message, but I've since removed that feature. 

The complete code for ***notes.tsx*** & ***guestbook.tsx*** can be found below or in the [GitHub Repo for my new portfolio](https://github.com/knlrvr/kanelariviere-new). In the complete code, we can see that I also depended on some react hooks and conditional rendering for the finished product. 

```js 
// notes.tsx

import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const createNote = mutation({
    args: { 
        body: v.string(), 
        author: v.string(), 
    },
    handler: async (ctx, args) => {
        const noteId = await ctx.db.insert("notes", {
            body: args.body,
            author: args.author,
        });
    },
});

export const getNotes = query({
    handler: async (ctx) => {
        return ctx.db.query("notes").order('desc').collect();
    }
})
```



```js
// guestbook.tsx

'use client'
import React, { useState } from 'react'
import { Reveal } from '@/components/utils/reveal'

import { useMutation, useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'

import { SignInButton, SignOutButton, useUser } from '@clerk/clerk-react'

const Guestbook = () => {
  const [text, setText] = useState("");
  const createNote = useMutation(api.notes.createNote); 
  const notes = useQuery(api.notes.getNotes); 

  const { user } = useUser();

  return (
    <div className="pb-8 pt-6 md:pt-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Reveal>
          <span className="intro-text font-migra">Guestbook</span>
        </Reveal>
        <Reveal>
          <p className="intro-about font-light text-center max-w-3xl mx-auto font-mont px-6 text-base md:text-lg
             lg:text-xl text-neutral-500">Sign in to sign my guestbook!</p>
        </Reveal>
        {!user && (
          <Reveal>
            <div className="mt-4 border border-neutral-500 p-1 px-4 rounded-full">
              <SignInButton mode='modal' afterSignInUrl='/guestbook'/>
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
                  // oops
                  body: text,
                  author: user?.fullName || user?.username || '',
                });
                setText('')
              }}
              className="w-full md:w-1/2 mt-4 flex py-2"
            >

              <input 
                value={text} 
                onChange={e => setText(e.target.value)}
                className="container bg-transparent rounded-full w-full placeholder:text-neutral-500 mr-3 ml-1 px-4 py-2"
                required
                placeholder='Leave a message here!'
              />
              <button
                className="px-6 uppercase py-1.5 rounded-full container w-20 flex justify-center items-center font-light   
                text-sm">sign</button>
            </form>
            <div className="ml-4 text-xs">
              <SignOutButton />
            </div>
          </div>
        </Reveal>
      )}
      
      <Reveal>
        <div className="py-16 text-sm">
          {notes?.map(note => {

            const creationTimeMs = note._creationTime;
            const date = new Date(creationTimeMs);

            const options: Intl.DateTimeFormatOptions = {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }

            const formattedDate = date.toLocaleDateString('en-US', options);

            return <div key={note._id} className="flex flex-col py-2">
              <span>{note.body}</span> 
              <div className="flex items-center text-xs">
                <span className="text-neutral-500">{note.author} &mdash;</span>
                <span className="text-neutral-500">&nbsp;{formattedDate}</span>
              </div>
            </div>
          })}
        </div>
      </Reveal>

    </div>
  )
}

export default Guestbook
```

## Conclusion
And that's how I used Convex to set up a Guestbook in my portfolio! It was a relatively easy set up, and I'm happy to have it now! If you come across it or want to post on it, please do! Again, almost *all* of this information can be found directly in the Convex docs. 

You can also take a look around [the repo of my portfolio](https://github.com/knlrvr/kanelariviere-new) & see how it all works together! 

To learn more about Convex, visit [convex.dev](https://www.convex.dev/) & **happy coding**!