import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import './Board.css'

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board(props) {

    const [hasWon, setHasWon] = useState(false);
    const [board, setBoard] = useState(createBoard());
    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

    function createBoard() {
        let board = [];
        // TODO: create array-of-arrays of true/false values
        for (let y = 0; y < props.nrows; y++) {
            let row = [];
            for (let x = 0; x < props.ncols; x++) {
                row.push(Math.random() < props.chanceLightStartsOn)
            }
            board.push(row)
        }
        return board
    }

    /** handle changing a cell: update board & determine if winner */

    function flipCellsAround(coord) {
        console.log("Flipping", coord)
        let { ncols, nrows } = props;
        let [y, x] = coord.split("-").map(Number);

        function flipCell(y, x) {
            // if this coord is actually on board, flip it

            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
        }
        // Flip initial cell
        flipCell(y, x);
        // TODO: flip this cell and the cells around it
        flipCell(y, x - 1);
        flipCell(y, x + 1);
        flipCell(y - 1, x);
        flipCell(y + 1, x);

        // win when every cell is turned off
        // TODO: determine is the game has been won

        setBoard([...board]);
        setHasWon(board.every(row => row.every(cell => !cell)));
    }



    /** Render game board or winning message. */
    function makeTable() {
        let tblBoard = [];
        for (let y = 0; y < props.nrows; y++) {
            let row = [];
            for (let x = 0; x < props.ncols; x++) {
                let coord = `${y}-${x}`;
                row.push(<Cell key={coord} isLit={board[y][x]}
                    flipCellsAroundMe={() => flipCellsAround(coord)} />);
            }
            tblBoard.push(<tr key={y}>{row}</tr>);
        }
        return tblBoard;
    }
    return (
        // if the game is won, just show a winning msg & render nothing else
        // make table board
        <div>
            {hasWon ? (
                <div className="Board-title">
                    <div className="winner">
                        <span className="neon-orange">YOU</span>
                        <span className="neon-blue">WIN!</span>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="Board-title">
                        <div className="neon-orange">Lights</div>
                        <div className="neon-blue">Out</div>
                    </div>
                    <table className="Board">
                        <tbody>
                            {makeTable()}
                        </tbody>
                    </table>
                </div>
            )}
        </div>

    )
}


Board.defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
}

export default Board;