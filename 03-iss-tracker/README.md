# ISS Tracker

In this challenge we will build a small app which displays the current location of the international space station. We will also pratice our `useEffect` skills.

## Tasks

We already have a state called `coords` in the App component which will hold the longitude and latitude values of the ISS position.

1. Write the function `getISSCoords`. Fetch from the given url saved in the constant `URL`. After fetching successfully update the `coords` state accordingly.

2. The refresh button already executes `getISSCoords` when pressed. Test if the function works as expected. (HINT: You can check if the position is displayed correcty by double checkin on [this website](http://open-notify.org/Open-Notify-API/)).

3. With the help of `useEffect` set an interval (with `setInterval`) to update the ISS coords every 5 seconds. The interval should be installed only on the first render of the app.
   (HINT: Research `setInterval` on MDN if you don't know it)

4. The `setInterval` function returns an ID of the respective interval. You can clear the interval by calling `clearInterval` with this id. Inside the useEffect, return a cleanup function, which executes this `clearInterval` function whith the correct ID.

Go into the [App.js](./src/App.js) and start coding!
