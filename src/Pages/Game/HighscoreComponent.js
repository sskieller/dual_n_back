import React from "react";
//import { w3cwebsocket as W3CWebSocket } from "websocket";

export default class HighscoreComponent extends React.Component {

	ws = new WebSocket('ws://localhost:4000/ws');

	componentDidMount() {
		this.connect();

	}

	// Connection to server
	connect = () => {

		

		this.ws.onopen = () => {

			// connecting and log to console
			console.log('connected')
		};

		this.ws.onmessage  = evt => {
			
			// listen to data from websocket server
			const highscore = JSON.parse(evt.data)
			this.setState({dataFromServer: highscore})
			console.log(highscore)
		};

		this.ws.onclose = () => {
			console.log('disconnected')
		};

		this.onerror = err => {
			console.error(
				"Error: ",
				err.message,
				"Closing socket"
			);
			this.ws.close();
		};


	};


	// Send high score
	sendHighscore = () => {

		try {
			this.ws.send("score", 10)
		} catch (error) {
			console.log(error)
		}
	}


	render() {
		return (
			<div>
				<p>HighscoreComponent component works</p>
			</div>
		);
	}
}