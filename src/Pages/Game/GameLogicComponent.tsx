import React from "react";
import BoardComponent from "./BoardComponent";
import { number } from "prop-types";
import { Interface } from "readline";
import audioLetters from "../../Utils/SoundUtils/audioLetters";

class position{
	constructor(public row: number, public column: number){}
}

class GameLogicComponent {

	private alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	private previousPositions: position[];
	private previousSounds: number[];
	private count: number;

	constructor(public rows: number, public columns: number, public numberOfSounds: number, public nBack: number){
		this.count = 0;
		this.previousPositions = [];
		this.previousSounds = [];
	}

	public guessSound(): boolean{
		if(this.previousSounds.length <= this.nBack) { return false; }
		if(this.previousSounds[this.previousPositions.length - 1] != this.previousSounds[this.previousPositions.length - (this.nBack + 1)]){ return false; }
		return true;
	}

	public guessPosition(): boolean{
		if(this.previousPositions.length <= this.nBack) { return false; }

		const lastPos = this.previousPositions[this.previousPositions.length - 1];
		const nBackPos = this.previousPositions[this.previousPositions.length - (this.nBack + 1)];

		const rowEven: boolean = lastPos.row == nBackPos.row;
		const columnEven: boolean = lastPos.column == nBackPos.column;

		if(!(rowEven && columnEven)) { return false; }

		return true;
	}

	public getRandomNumber(max: number): number{
		var selectedNumber = Math.floor(Math.random() * max);
		return selectedNumber;
	}

	public playRandomSound(){
		var selectedSound = this.getRandomNumber(this.numberOfSounds);
		this.previousSounds.push(selectedSound);
		audioLetters.play(this.alphabet[selectedSound]);
	}

	public getRandomBoardPosition(): [number,number]{
		const pos: [number, number] = [0,0];
		pos[0] = this.getRandomNumber(this.rows);
		pos[1] = this.getRandomNumber(this.columns);

		this.count++;
		this.previousPositions.push(new position(pos[0], pos[1]));

		return pos;
	}
}

export default GameLogicComponent