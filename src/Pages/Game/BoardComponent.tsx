import React from "react";
import './BoardComponent.css';

export interface IProps {
    columns: number;
    rows: number;
    squareToFlash?: [number, number];
}

class BoardComponent extends React.Component<IProps, object> {

	public render() {
        const rows = [];
        for (let i = 0; i < this.props.rows; ++i) {
            const columns = [];
            for (let j = 0; j < this.props.columns; ++j) {
                const classNames = ['square', 'square-100'];
                if (this.props.squareToFlash && this.props.squareToFlash[0] === i && this.props.squareToFlash[1] === j) {
                    classNames.push('one');
                }
                columns.push(
                    <div className={"grid-cell grid-" + Math.floor(100 / this.props.columns)} key={j + 1}>
                        <div className={classNames.join(' ')}>{i * this.props.columns + j + 1}</div>
                    </div>
                );
            }
            rows.push(
                <div className="grid" key={i + 1}>
                    {columns}
                </div>
            );
        }

        return (
            <div className="grid-container">
                {rows}
            </div>
        );
    }
}

export default BoardComponent;