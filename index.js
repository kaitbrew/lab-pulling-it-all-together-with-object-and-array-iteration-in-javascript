function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

const game = gameObject();

function numPointsScored(playerName) {
  const player = game.home.players[playerName] || game.away.players[playerName];
  if (player) {
    return player.points;
  } else {
    return "no!";
  }
}

console.log(
  `points from brendan hayword: `,
  numPointsScored("Brendan Hayword")
);

function shoeSize(playerName) {
  if (playerName in game.home.players) {
    return game.home.players[playerName].shoe;
  } else if (playerName in game.away.players) {
    return game.away.players[playerName].shoe;
  } else {
    return "no!";
  }
}

console.log(`shoe size of ben gordon: `, shoeSize("Ben Gordon"));

function teamColors(teamName) {
  if (game.home.teamName === teamName) {
    return game.home.colors;
  } else if (game.away.teamName === teamName) {
    return game.away.colors;
  } else {
    return "no!";
  }
}

console.log(
  `the colors for ${game.home.teamName} are `,
  teamColors(game.home.teamName)
);

function teamNames() {
  return [game.home.teamName, game.away.teamName];
}

console.log(`The team names are: `, teamNames());

function playerNumbers(teamName) {
  let numbers = [];
  if (game.home.teamName === teamName) {
    for (const player in game.home.players) {
      numbers.push(game.home.players[player].number);
    }
  } else if (game.away.teamName === teamName) {
    for (const player in game.away.players) {
      numbers.push(game.away.players[player].number);
    }
  } else {
    return "no!";
  }
  return numbers;
}

console.log(
  `jersey numbers are as follows for ${game.away.teamName}: `,
  playerNumbers(game.away.teamName)
);

function playerStats(playerName) {
  if (playerName in game.home.players) {
    return game.home.players[playerName];
  } else if (playerName in game.away.players) {
    return game.away.players[playerName];
  } else {
    return "no!";
  }
}

console.log(`jason terry stats: `, playerStats("Jason Terry"));


function bigShoeRebounds(){return null;}
//Finds the player with the largest shoe size and returns their number of rebounds.

module.exports = {
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds
};
