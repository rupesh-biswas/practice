import headImg from './head.jpg'
import tailImg from './tail.jpg'

function Coin(props) {
    const { coinValues } = props;

    let coinSide;
    if (coinValues.side === 'head') {
        coinSide = <div> <img src={headImg} alt="head"></img> <h2>Head</h2></div>
    } else if (coinValues.side === 'tail') {
        coinSide = <div><img src={tailImg} alt="tail"></img><h2>tail</h2></div>
    } else {
        coinSide = ''
    }


    return (
        <section>
            {coinSide}
            <p>Out of {coinValues.totalFlips} flips, there have been {coinValues.headCount} heads and {coinValues.tailCount} tails</p>
        </section>
    )
}

export default Coin;