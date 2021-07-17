# GameSpace

If you want to see the deployed version of this project, you can check it out by visiting this [link](http://gamespace-app.herokuapp.com/).

## About the project

A game website consisting of 5 games (currently) :<br>

- Chess
- Tic-Tac-Toe
- Sudoku
- 2048
- Minesweeper

There are multiple modes of difficulty within most of the games (namely _Easy_, _Medium_ and _Hard_).

One of the objectives in building this website was to explore algorithms which are used in decision-making and optimization in game theory. The **minimax** algorithm is one such algorithm which has been used in both the chess and tic-tac-toe parts.

## Overview of the website

- Users can **sign-in/sign-up**
- **Player-vs-computer mode** for all games
- **Brief instructions** on how to play each game
- **Chess Engine, Sudoku Solver and Unbeatable Tic-tac-Toe** are some of the most exciting features and have been implemented from scratch.
- **Multiplayer** functionality for chess
- **Chat box** on the home page can be used to message people who are currently online.
- **Blog section** for posting updates about the website and just about anything in general.

## Overview of each game
This is the most awesome project : it includes chess engine, unbeatable tic-tac-toe, Sudoku solver and many more cool features.
Consisting 5 games: Chess, Tic-tac-toe,Sudoku, 2048 and Minesweeper. Project is based on hardcore algorithms like min-max algorithm, backtracking, sorting etc. Many web technologies are also used...
**1) Chess** : 
- In chess we **implemented chess-engine using min-max algorithm with elo rating near to 1800**.
- **Three modes easy, medium and hard** are available to play and an extra **analysis mode** is also given to analyse your game at extra depth.
- You can **play with White as well as Black**.
- Option for move-history, move-back and new game is also implemented sucessfully.
- Apart from that you can play on your computer with other player both online and offline. websockets are used for online mode.
**2) Tic-Tac-Toe:**
- In Tic-Tac-Toe 2 modes Easy and medium are available.
- You have option to choose beyween X's and O's.
- **Hard mode is unbeatable(implemented using min-max algorithm).**
- Easy mode generates random number and plays.
- So aim is to add 3rd level which is of moderate level.

**3) Sudoku: **
- In Sudoku we have three level of puzzles to play(Easy, Medium and Hard).
- Tried to give good user experience.
- **Apart from that we have built Sudoku-Solver using backtracking.**

**4) 2048**: 
- This is a classical fun puzzle game. Built using Javascript.

**5) Minesweeper:**
- Do you remember this fun puzzle game, we used to play. They say this is just a fortune game, but I don't belive. So, give it a try. Link is given above.

## To do list

- Currently users do not have a personal profile page where they could see their personal stats like their highest score, winning streak etc.
- Personal chat messages to individual users cannot be sent presently.
- Include more games

## How to host the website locally

To run the project locally on your machine you must have a current version of `Nodejs` installed on your machine. Now run the following commands:

```
$ git clone https://github.com/Siddharth2808/GameSpace
$ npm install
$ npm start
```
