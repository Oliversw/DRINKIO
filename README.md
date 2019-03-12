Testing and Server Structure
https://codeburst.io/revisiting-node-js-testing-part-2-14f50f8ddab5

# :beer: <b>DRINKIO💉 </b>

![gif](https://media.giphy.com/media/xUOwGdo2ncW9ETEEZG/giphy.gif)

## Installation 💾

1. Clone this repo:
   `git@github.com:fac-15/DRINKIO.git`
2. Navigate to Drinkio folder and run `npm i` in your terminal
3. Turn on your server by running `npm run dev` in your terminal. Check that you receive a message saying that your server is running in port 4000.
4. Open your browser and go to localhost:4000

## Still Todo ✏️

1. Delete config file
2. Either delete script file or import/export dom stuff
3. Style auto-complete drop-down
4. Only receive 5 drop-down entries ever
5. Include magnifying glass
6. Check on accessibility
7. Do something when the user chooses a beer!
8. Clear input / reset autocomplete when someone clicks out of the box
9. Give some sort of notification for no matches found
10. Make some sort of regex to limit types of input
11. Look into deploying!

##

### Our process 📄

1. Decide on API - [BreweryDB](https://www.brewerydb.com/developers)
2. Build basic skeleton for project and research API/how to connect to Node
3. Realize that connecting to an API on top of writing the server is HARD
4. Give up on that and create our own JSON file
5. Slowly work through each step as a team
   ![](https://preview.ibb.co/g1nuaV/IMG-0550.jpg)

<i>This was a REALLY hard project for all of us! It was helpful to whiteboard at the beginning in order to try to understand the flow of information from the frontside to server-side, but we were all still a bit confused. What was more helpful was to start building the project from the tiniest step (making an input box) and then walking through step at a time. We took turns writing code and commiting, which was a very slow way of working, but made sure that everyone was on board.</i>

### Difficulties :poop:

![gif](https://media.giphy.com/media/nxuFTiUbYR3SE/giphy.gif)

1. Understanding the flow of information
2. Understanding how to link the files / modularize
3. Commenting in our code as we went
4. Uh, testing? What's that?

### Things we learned! :monkey:

1. OMG is this AJAX...with our OWN server?

![](https://i.imgur.com/tINtrV5.png)

2. Really understanding how back-end files are supposed to be structured!
   a. Server - just set up a damn server!
   b. Router - receives requests and directs them to the appropriate handler function
   c. Handler - does all the dirty werk werk werk werk werk

3. Running server on another terminal tab so that you don't have to keep opening and closing it

### Proud of 🎯

1. Taking TONS of breaks
2. Really working as a team and not independently
3. Keeping light, even at the worst of times<br>
   ![gif](https://media.giphy.com/media/BBkKEBJkmFbTG/giphy.gif)

### Stretch goals ⏳

1. Moving background (bubbling)
2. Calling an external API from our server side
3. Deploying with Heruko
4. Refactoring
5. Testing

### DEV dependencies

- nodemon
- tape
- tap-specap
- querystring

### gitignore file contains:

```
node_modules

```

## TIME FOR BEERS! :beers:

![gif](https://media.giphy.com/media/zrj0yPfw3kGTS/giphy.gif)
