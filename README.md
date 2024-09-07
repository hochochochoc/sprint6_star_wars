# Sprint 7 - Star Wars

This is the seventh sprint in the itacademy React.js course. The task was to follow the instructions and build a website showing star wars starships using an API.

![](images/screenshot_1.png)

To explore the source code, start with App.jsx .
**Note**: This project was initialized with Vite.

## How to run

After having cloned the repository, run the following commands at the root:

```sh
Npm install
Npm run dev
```

## Functionality overview

The example application is a visual guide to Star Wars ships, as well as their respective pilots and movies they appear in.

**General functionality**:

- Showing paginated spaceships listed in the official Star Wars API
- View individual spaceships
- Signing up and logging in and out to access individual spaceships
- Showing pilots and movies connected to each spaceship
- Responsive URL
- Testing using the Vitest testing framework

**The general page breakdown looks like this**:

- Landing page (URL: /#/ )
- Link to Homepage
- Main page (URL: /#/main)
- Selection of ships to view
- Ships page (URL: /#/starship)

## How to test using Vitest

After having cloned the repository and installed the dependencies, run the following commands at the root:

```sh
npm run test:ui
```
