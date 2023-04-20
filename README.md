# Harry Potter React Coding Test

In this test we will ask you to create a gallery app where you can choose two characters and initiate a duel between them. See the provided image (gallery_image.png) as a basic reference on how a solution could look like. Feel free to make your own design choices as well.

## Setup

Download the provided folder and go to it and run npm install. Then do npm start to run the dev server. Already added dev dependencies are typescript, styled-components and react-query as we use them here at Kognic and would like to see how you get along with those. It is ok to add more dependencies as long as you can provide a good reason for doing so.

## What we provide you with

We have provided you with a basic setup with a boilerplate to enable you to resolve your api calls with react query.

### Endpoint

API url: https://hp-api.onrender.com/api/characters
Might be a good idea to save the data locally since there is a rate limit on the API. And it goes down sometimes (probably during the demo...)

## The task is to add these features:

- Fetch and display the names and images of all the characters using react-query
- The list of characters is very long, add search and/or filtering functionality, add the possibility to add multiple filters. We want to be able to filter by age: born after/before xxxx, wand, house and if the character is alive.
- Support for clicking on a character to display extended information

### The duel

- Pick two characters for a duel (if wizard: true, obviously muggles can't duel!). The probability for a character to win a duel is decided by:
  1- The character’s age.
  2- The type of wand.
  3- The house that the character belongs to.

  Gryffindor beats Slytherin.
  Slytherin beats Hufflepuff.
  Hufflepuff beats Ravenclaw.
  Ravenclaw beats Gryffindor.

  When the app starts, each type of wand gets a programmatically assigned power between 1-50.

  Age x 0.5 + Wand power x 0.3 + House bonus = Duel points!

  We are not game designers, feel free to change this to make a fun game.

- Keep and display history of battles

What we are looking for is how you decide to structure your solution and how you motivate your choices.

## How to deliver the assignment

The finished assignment should be shared either as a .zip-file or as a github repository.

## Some tips

- react-query has some neat features like isLoading to handle loading state, you can have a look at the [react-query documentation](https://react-query-beta.tanstack.com/overview)
- If you haven’t used styled-components before you might want to skim through the [styled-component documentation](https://styled-components.com/docs/basics)
- Feel free to change parts of the boilerplate if you feel it can be improved or needs changing to fit your solution

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
