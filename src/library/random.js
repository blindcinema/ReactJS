const adjectives = ["brown","crazy","awful","flying","concrete","timely","perfect","smart"];
const nouns = ["squirrel","car","clover","plane","volcano","tortoise","table","house","lotus"];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);
    
    return `${adjectives[adjectiveIndex]}${nouns[nounIndex]}`;
};