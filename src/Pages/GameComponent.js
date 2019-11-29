import React from "react";

import BoardComponent from "./Game/BoardComponent";
import GameLogicComponent from "./Game/GameLogicComponent";
import HighscoreComponent from "./Game/HighscoreComponent";
import ScoreComponent from "./Game/ScoreComponent";

export default class GameComponent extends React.Component {
	render() {
		return (
			<div>
				<p>Game component works</p>
			</div>
		);
	}
}