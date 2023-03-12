import { useState } from "react";
import Coin from "./Coin";


function CoinFlipper(props) {
    // const [side, setSide] = useState("");
    // const [totalFlips, setTotalFlips] = useState(0);
    // const [headCount, setHeadCount] = useState(0);
    // const [tailCount, setTailCount] = useState(0);

    const [coinValues, setCoinValues] = useState({
        side: '',
        totalFlips: 0,
        headCount: 0,
        tailCount: 0
    });

    const flipCoin = function () {
        const newSide = Math.random() > 0.5 ? 'head' : 'tail';
        const newtotalFlips = coinValues.totalFlips + 1;

        let newHeadCount = coinValues.headCount;
        let newTailCount = coinValues.tailCount;
        if (newSide === 'head') {
            newHeadCount = coinValues.headCount + 1;
        } else if (newSide === 'tail') {
            newTailCount = coinValues.tailCount + 1;
        }
        const newCoinValues = {
            side: newSide,
            totalFlips: newtotalFlips,
            headCount: newHeadCount,
            tailCount: newTailCount
        }

        setCoinValues(newCoinValues);
    }

    const handleClick = function () {
        flipCoin();
    }

    return (
        <div>
            <Coin coinValues={coinValues} />
            <button onClick={handleClick}>FLIP MEEE</button>
        </div>
    )
}

export default CoinFlipper;