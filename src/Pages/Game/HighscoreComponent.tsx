import React from "react";
import openSocket from "socket.io-client";
import ReactList from 'react-list';
import './HighscoreComponent.css';

export interface IProps{
	socket: SocketIOClient.Socket;
}

export interface IState {
	highscore: Array<Number>
}

export default class HighscoreComponent extends React.Component<IProps, IState> {
	constructor(props: any){
		super(props);
		
		this.state = {highscore: []};
		this.handleNewScore = this.handleNewScore.bind(this);
		
		this.props.socket.on('highscore', this.handleNewScore);
	}

	handleNewScore(data: any){
		this.setState({highscore: data.score});
	
	}


	render() {
		return (
			

			<div>
			<h3>High score</h3>
			<React.Fragment>
				<ul className="list-group">
					{this.state.highscore.map(highscores => (
						<li className="list-group-item list-color">
							{highscores}
						</li>
					))}
				</ul>
			</React.Fragment>

		
			</div>
		);
	}
}

	// ws = new WebSocket('ws://127.0.0.1:4000/ws');

	// componentDidMount() {
	// 	this.connect();
	// }

	// // Connection to server
	// connect = () => {
	// 	this.ws.onopen = () => {

	// 		// connecting and log to console
	// 		console.log('connected')
	// 	};

	// 	this.ws.onmessage  = evt => {
			
	// 		// listen to data from websocket server
	// 		const highscore = JSON.parse(evt.data)
	// 		this.setState({dataFromServer: highscore})
	// 		console.log(highscore)
	// 	};

	// 	this.ws.onclose = () => {
	// 		console.log('disconnected')
	// 	};

	// 	this.onerror = err => {
	// 		console.error(
	// 			"Error: ",
	// 			err.message,
	// 			"Closing socket"
	// 		);
	// 		this.ws.close();
	// 	};


	// };


	// // Send high score
	// sendHighscore = () => {

	// 	try {
	// 		this.ws.send("score", 10)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }