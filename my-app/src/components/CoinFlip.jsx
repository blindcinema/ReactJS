export function CoinFlip() {
    const number = Math.random();

    return <div>Coin shows {number > 0.5 ? "HEADS" : "TAILS"}</div>;
/**
 * const coinToss = number > 0.5 "HEADS" : "TAILS";
 * return <div>Coin shows {coinToss}</div>
 */
}