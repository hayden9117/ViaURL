# VIA-URL

Hello! this is currently a work in progress; I originally built this tool in plain react but realized that by utilizing dynamic server-side data fetching and server-side rendering. The application will be much more powerful and versatile.

## Inspiration Behind the Project

I really wanted to challenge myself with this one; I picked a long-term project which would inevitably lead me down a path of trying to find the answers to questions that may not be readily available. This project will force me to re-frame my approach to researching information and writing code.

## Where Am I At with the Project:

### July 2, 2022:

I currently still need to set up the data base, and re-write all the HTTP handlers from the other repo. I'm changing up the tech stack a bit and doing some research.

### July 3, 2022:

Never got around to setting up the database, i opted to build dummyData for the time being to do some behavior tests in order to debug the differences between the old code which ran errorless when it was just a client-side react project.

### What i learned today:

- next will throw Hydration errors if the lay out of the page isnt meeting a specific standard. I will have to do more debugging on this later because its stating that the renders are differing from client and server.

- The api routing makes handling the pages very concise. I think this will be very useful for vreating the users pages when saved

- I did some research on page lay out, but i still have ways to go. I realized just how disorganized my file structure really is.

- I realized that i should be focused on the environment im coding in. I cant just utilize functions such as localStorage since this is browser specific. I need to utilize functions based on the instance of the program.

### August 3, 2022:

Its been over a month since I last pushed, In this month I was able to connect viaUrl to a mongoDB Atlas. I also worked on some basic user experience by ensuring validity when a user edits and saves their page. I am starting to become familiar with next-auth for sign in and im very excited to see where this leads.

### August 21, 2022:

added better user authorization functionality, started on the redo/undo feature but still need to work out some edge cases. i will have to start migratin to TypeScript soon and i REALLY wish that I started up the project with it. I'm avoidinging testing but ill pick a day when i really set up a good dev environment. once I have a solid proto type going ill release a beta version which will require a token to get pre release access. this will specifically be designated tofor any collaborators who want to join in.

## Setting up ViaUrl

### initiating the project:

start the project with "npm run dev", dont forget to npm i before hand :)
set up a local environment variable file and name it ".env.local"

### here is the format for setting up you local environment variables

authorize git hub to allow access to local O auth follow this link for help
https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app

```
GITHUB_ID= // git hub ID goes here
GITHUB_SECRET= // git hub secret goes here
DB_USER= // this is in regards to the mongo db atlas, dm me for permissions
DB_PASSWORD= // this is in regards to the mongo db atlas, dm me for permissions
MONGODB_DB=// will need to be granted access
MONGODB_URI=// will need to be granted access
NODE_ENV=// you can just put "development" here
GOOGLE_CLIENT_ID= // Will need to be granted access
GOOGLE_CLIENT_SECRET= // will need to be granted access

```


### Project has been re-implemented && upgraded in a private repository
