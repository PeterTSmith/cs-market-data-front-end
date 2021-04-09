import React from 'react';

import './gridChart.css'

export default class GridChart extends React.Component {
    constructor() {
        super();
        this.state = {gridRow: [['a0', 'a1', 'a2'], ['b0', 'b1', 'b2']]};
    }

    componentDidMount() {
    }

    render() {
        return(
            <div id="gridChart">
                {this.generateRow()}
            </div>
        );
    }

    generateRow() {
        return this.state.gridRow.map((row) => {
            return (
                <div id="gridRow">
                    {this.generateColumn(row)}
                </div>
            );
        });
    }

    generateColumn(rowIn) {
        return rowIn.map((column) => {
            return (
                <div id="gridColumn">
                    {column}
                </div>
            );
        });
    }
}