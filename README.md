## VIA-URL

Hello! this is currently a work in progress; I originally built this tool in plain react but realized that by utilizing dynamic server-side data fetching and server-side rendering. The application will be much more powerful and versatile.

## Inspiration Behind the Project

I really wanted to challenge myself with this one; I picked a long-term project which would inevitably lead me down a path of trying to find the answers to questions that may not be readily available. This project will force me to re-frame my approach to researching information and writing code.

## Where Am I At with the Project:

July 2, 2022:

I currently still need to set up the data base, and re-write all the HTTP handlers from the other repo. I'm changing up the tech stack a bit and doing some research.

July 3, 2022:

Never got around to setting up the database, i opted to build dummyData for the time being to do some behavior tests in order to debug the differences between the old code which ran errorless when it was just a client-side react project.

What i learned today:

- next will throw Hydration errors if the lay out of the page isnt meeting a specific standard. I will have to do more debugging on this later because its stating that the renders are differing from client and server.

- The api routing makes handling the pages very concise. I think this will be very useful for vreating the users pages when saved

- I did some research on page lay out, but i still have ways to go. I realized just how disorganized my file structure really is.

- I realized that i should be focused on the environment im coding in. I cant just utilize functions such as localStorage since this is browser specific. I need to utilize functions based on the instance of the program.
