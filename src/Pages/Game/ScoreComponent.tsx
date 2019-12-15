import React from "react";

interface IProps{
	score: number;
}

 class ScoreComponent extends React.Component<IProps, object> {

	render() {
		return (
			<div>
	<p>ScoreComponent component works {this.props.score}</p>
			</div>
		);
	}
}

export default ScoreComponent