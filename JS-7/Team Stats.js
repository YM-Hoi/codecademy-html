const team = {
    _players: [{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 54
        },
        {
            firstName: 'Awell',
            lastName: 'Kit',
            age: 28
        }
    ],
    _games: [{
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        }
    ],
    get games() {
        return this._games
    },
    get players() {
        return this._players
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        return this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        }
        return this._games.push(game);
    }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Titans', 100, 98);
team.addGame('abc', 100, 90);
team.addGame('def', 95, 92);

console.log(team._games)