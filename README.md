# Splash Frontend Challenge

Hello developer,

Great news! You're going to totally rebuild the Splash event dashboard. It's too old and outdate, like a dinosaur. Captain Murdock, the product manager for this project, has appointed you as the most excellent developer to start this endeavor from scratch. Congrats!

Thankfully B.A., the best back-end developer, has already set up some endpoints for you.

## Requirements

- Implement a UI using React that renders the returned events inside the dashboard. Note that the endpoint returns paginated results.
- Upon clicking on an event, a modal should open that shows more event details.
- Bonus: add a [Mapbox.js](https://www.mapbox.com/) map inside the modal showing the event's location.
- Bonus: add a cool animation, effect or design tweak of your own choice.

## Getting Started

1. _Fork this repo._
2. _Add Collaborators._ Go to `Settings > Collaborators & Teams` and the Splash team: @heron-- and @mikewsplash
3. _Notify._ Once you have finished, simply notify your hiring manager via email.

## Setup Instructions

- We recommend using [yarn](https://yarnpkg.com/en/), since we already have a `yarn.lock` file in this repository.
- Install dependencies executing `yarn install`
- Kick off the local server executing `yarn run start`
- Navigate to `http://localhost:3000` to load up your page

## Endpoints Available

- GET `/events?page=[pageNumber]`. Returns a list of events.
- GET `/events/[id]`. Returns event data with more details, like sessions and a description.

## Implementation Notes

- Use `#root-container` as the container for your JS app.
- The files in `build/` are loaded automatically. You won't need to touch those.
- We would like you to use React for this take home, but feel free to add any additional libraries or technologies that you like. Product manager Captain Murdock trusts you fully to make the right decisions!
- This project shouldn't take more than a few hours. Making sacrifices to stay within the time frame is okay as long as you can explain the decisions. The goal is for you to implement a beautiful solution that can be reviewed and discussed with the team. Gotta show all of them how amazing you are.
- Use the [provided designs](designs) for guidance.

## Goal

The goal of this challenge is to discuss your implementation with you in your next interview. We'll pay special attention to:

1. Well thought out architecture.
2. Code readability.
3. Code that can be easily unit tested.
4. Alignment with provided designs.
5. Well argumented choices of tools and libraries.
6. Error handling.
7. Mobile friendly UI.

We're looking forward to your submission! 🚀
