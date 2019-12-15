import React from "react";
import BoardComponent from "./BoardComponent";
import { number } from "prop-types";
import { Interface } from "readline";

class position{
	constructor(public row: number, public column: number){}
}

class GameLogicComponent {

	private previousPositions: position[];
	private count: number;

	constructor(public rows: number, public columns: number, public nBack: number, public score?: number){
		this.score = 0;
		this.count = 0;
		this.previousPositions = [];
	}

	public guessSound(): boolean{
		return true;
	}

	public guessPosition(): boolean{
		if(this.previousPositions.length < this.nBack) { return false; }

		const rowEven: boolean = this.previousPositions[this.previousPositions.length-1].row == this.previousPositions[this.previousPositions.length-(this.nBack + 1)].row;
		const columnEven: boolean = this.previousPositions[this.previousPositions.length-1].column == this.previousPositions[this.previousPositions.length-(this.nBack + 1)].column;

		if(!(rowEven && columnEven)) { return false; }

		return true;
	}

	public getRandomNumber(max: number): number{
		var selectedNumber = Math.floor(Math.random() * max);
		return selectedNumber;
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