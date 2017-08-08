> @TODO, provide designs.

> @TODO, remove draft status when others review it.

> @TODO, verify submission steps are accurate.

# [draft] Splash Front-end Challenge

Hello developer,

Great news. We're going to totally rebuild the Splash's event dashboard. It's too old, like a crippled dinosaur. Captain Murdock, the product manager for this project, has pointed you as the most excellent developer to start this endeavor from scratch. Congrats!

Thankfully, B. A., the best Back-end dev, has set up already some endpoints for you.

## Requirements

* Implement a UI that renders the returned events inside the dashboard. Note that the endpoint returns paginated results. See provided designs for reference.
* Upon clicking on one of the events, a modal should open that includes more event details. See provided designs for reference.
* Bonus: add a [Mapbox.js](https://www.mapbox.com/) map inside the modal showing the event's location.

## Set up instructions

* We recommend using [yarn](https://yarnpkg.com/en/), an improved version of npm for front-end dependency management.
* Install dependencies executing `yarn install`
* Kick off the local server executing `yarn run start`

## Endpoints available

* GET `/events?page=[pageNumber]`. Returns a list of events.
* GET `/events/[id]`. Returns an event descriptor with more details, like sessions and description.

## Implementation notes

* Use `#root-container` as the container for your JS app.
* The files `build/index.js` and `build/index.css` are loaded in the layout. You can modify them directly or make your code compilation process output them.
* You can choose to use any framework, task runner, css preprocessor and technology that you desire. Product manager Captain Murdock trusts you fully to make the right decision!
* This project shouldn't take more than a few hours. The goal is for you to implement and design a beautiful solution that can be reviewed and discussed with the rest of the team. Gotta show all of them how amazing you are.

## How to submit?

1. Fork this repo. It will stay private in your account.
2. When you are done implementing, open a PR to this repo. Easy peasy lemon squeezy!

We're looking forward to your submission! 🚀
