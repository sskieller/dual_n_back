import React from "react";
import BoardComponent from "./Game/BoardComponent";
import './Game/GameComponent.css';
import GameLogicComponent from "./Game/GameLogicComponent";
import { stat } from "fs";
import ScoreComponent from "./Game/ScoreComponent";
import { Button } from "@material-ui/core";
import InputRange from 'react-input-range';
import Slider from 'react-input-slider';


export interface IProps {
	roundLength: number;
    columns: number;
    rows: number;
}

export interface IState {
	isRunning: boolean,
	playBtnLabel: String,
	gameLogicComponent: GameLogicComponent,
	timeLeft: number,
	timerId?: any,
	selectedSquare?: [number, number],
	score: number,
	eligibleForPosQuess?: boolean;
	eligibleForSoundQuess?: boolean;
	mapSize: number;
	nextMapSize: number;
	nBack: number;
	nextNBack: number;
}

class GameComponent extends React.Component<IProps, IState> {

	constructor(props: any){
		super(props);

		// Bind functions so that it doesn't break on render
		this.tick = this.tick.bind(this);
		this.guessPosition = this.guessPosition.bind(this);
		this.guessSound = this.guessSound.bind(this);
		this.mapSizeChanged = this.mapSizeChanged.bind(this);
		this.nBackChanged = this.nBackChanged.bind(this);

		this.state = {
			isRunning: false,
			playBtnLabel: 'Play',
			gameLogicComponent: new GameLogicComponent(3,3,2),
			timeLeft: 0,
			score: 0,
			mapSize: 3,
			nextMapSize: 3,
			nBack: 2,
			nextNBack: 2
		}
	}

	guessSound(){
		var score = -50;
		if(this.state.gameLogicComponent.guessSound()){
			score = 200;
		}
		this.setState({eligibleForSoundQuess: false, score: this.state.score + score})
	}

	guessPosition(){
		var score = -50;
		if(this.state.gameLogicComponent.guessPosition()){
			score = 200;
		}
		this.setState({eligibleForPosQuess: false, score: this.state.score + score})
	}

	playButton = (e:any) => {
		if(this.state.isRunning){
			this.stopGame();
		}else{
			this.startGame();
		}
	}

	startGame (){
		const newPlayBtnLabel = 'Stop';
		var intervalId = setInterval(this.tick, 1000);

		this.setState({playBtnLabel: newPlayBtnLabel, eligibleForPosQuess:true, nBack: this.state.nextNBack, mapSize: this.state.nextMapSize, eligibleForSoundQuess:true, isRunning: true, timeLeft: 30, timerId: intervalId})
		this.state.gameLogicComponent.columns = this.state.mapSize;
		this.state.gameLogicComponent.rows = this.state.mapSize;
		this.state.gameLogicComponent.nBack = this.state.nBack;
	}

	stopGame(){
		const newPlayBtnLabel = 'Play';
		var emptySquare;
		clearInterval(this.state.timerId);
		this.setState({playBtnLabel: newPlayBtnLabel,eligibleForPosQuess:false, nBack: this.state.nextNBack, mapSize: this.state.nextMapSize, eligibleForSoundQuess:false, isRunning: false, timeLeft: 0, timerId: 0, selectedSquare: emptySquare});
	}

	tick(){
		if(this.state.timeLeft <= 1){
			this.stopGame();
			return;
		}

		var nextSquare;
		if(this.state.timeLeft % 3 == 0){
			nextSquare = this.state.gameLogicComponent.getRandomBoardPosition();
			this.setState({eligibleForPosQuess:true, eligibleForSoundQuess: true});
		}else if(this.state.timeLeft % 3 == 2){
			nextSquare = this.state.selectedSquare;
		}
		
		// gameLogicComponent.getRandomSound() -- Get random sound

		this.setState({timeLeft: this.state.timeLeft-1, selectedSquare: nextSquare});
	}

	mapSizeChanged(e: number){
		if(!this.state.isRunning){
			this.setState({mapSize: e, nextMapSize: e})
		}else{
			this.setState({nextMapSize: e})

		}
	}

	nBackChanged(e: number){
		if(!this.state.isRunning){
			this.setState({nBack: e, nextNBack: e})
		}else{
			this.setState({nextNBack: e})
		}
	}

	render() {

		const boardProps: any = {};
		if(this.state.selectedSquare){
			boardProps.squareToFlash = this.state.selectedSquare;
		}

		const scoreProps: any = {};
		scoreProps.score = this.state.score;

		return (
			<div>
				<button className="GameSpace" onClick={this.playButton}> {this.state.playBtnLabel} </button>

				<div>{'Map Size: ' + this.state.nextMapSize}</div>
				<Slider
					axis="x"
					xstep={1}
					xmin={2}
					xmax={5}
					x={this.state.nextMapSize}
					onChange={({ x }) => this.mapSizeChanged(x)}
				/>
				
				<div>{'N Back: ' + this.state.nextNBack}</div>
				<Slider
					axis="x"
					xstep={1}
					xmin={1}
					xmax={4}
					x={this.state.nextNBack}
					onChange={({ x }) => this.nBackChanged(x)}
				/>

				<div className="GameSpace">
					<p>Time left {this.state.timeLeft} </p>
					<BoardComponent columns={this.state.mapSize} rows={this.state.mapSize} {...boardProps}></BoardComponent>
					<Button color="secondary" disabled={!this.state.eligibleForPosQuess} onClick={this.guessPosition}>Position</Button>
                	<Button color="secondary" disabled={!this.state.eligibleForSoundQuess} onClick={this.guessSound}>Sound</Button>
				</div>
					<ScoreComponent {...scoreProps}></ScoreComponent>
			</div>
		);
	}
}

export default GameComponent;