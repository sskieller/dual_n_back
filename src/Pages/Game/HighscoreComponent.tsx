import React from "react";
import openSocket from "socket.io-client";

export interface IProps{
}

export interface IState {
	highscore: number
}

export default class HighscoreComponent extends React.Component<IProps, IState> {

	socket: SocketIOClient.Socket;

	constructor(props: any){
		super(props);
		this.state = {highscore: 0};
		
		// Bind functions so that it doesn't break on render
		this.handleNewHighscore = this.handleNewHighscore.bind(this);

		this.socket = openSocket('http://localhost:4000');
		this.socket.on('highscore', this.handleNewHighscore);
		this.socket.emit('score', {score: 7});
	}

	handleNewHighscore(data: any){
		console.log("new highscore received");
		console.log(data);
		this.setState({highscore: data.score});
	}

	render() {
		return (
			<div>
				<p>{'HighscoreComponent component works ' + this.state.highscore}</p>
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