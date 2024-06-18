import { AppState } from "../AppState.js";

export class PlayersController {
    constructor() {
    }

    addScore() {
        const playersScore = document.getElementById("playersScore");
        const players = AppState.Players
        // .find((players) => players.score++)
        // playersScore.innerHTML = players
        console.log("I want food", players.find((player) => player.score += 1))
    }

}