

const adjectives = ["brown","crazy","awful","flying","concrete","timely","perfect","smart"];
const nouns = ["squirrel","car","clover","plane","volcano","tortoise","table","house","lotus"];

function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);
    
    return `${adjectives[adjectiveIndex]}${nouns[nounIndex]}`;
};




export function RandomNameButton(props) {
    function handleClick() {
        props.onRandomName(getRandomName());
    }
    return  (
        <button type="button" onClick={handleClick}>Get Random Name</button>
    );
}