const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, we only regret the chances we didn't take. - Lewis Carroll",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
];

document.getElementById('new-quote').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
});
