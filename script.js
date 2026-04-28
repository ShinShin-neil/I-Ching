// Hexagram data for I Ching
const hexagrams = [
    { number: 1, name: 'The Creative', description: 'Strong action. Creativity in the world.' },
    { number: 2, name: 'The Receptive', description: 'Passive action. Support and yielding.' },
    // ... Complete with all 64 hexagrams.
];

// Function to find hexagram by number
function findHexagramByNumber(number) {
    return hexagrams.find(hex => hex.number === number);
}

// Function to find hexagram by name
function findHexagramByName(name) {
    return hexagrams.find(hex => hex.name.toLowerCase() === name.toLowerCase());
}

// Search functionality
function searchHexagrams(query) {
    return hexagrams.filter(hex => hex.name.toLowerCase().includes(query.toLowerCase()));
}

// Example usage
console.log(findHexagramByNumber(1));  // Get hexagram number 1
console.log(findHexagramByName('The Creative'));  // Get hexagram by name
console.log(searchHexagrams('Creative'));  // Search hexagrams by a query
