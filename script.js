const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "I have learned over the years that when one's mind is made up, this diminishes fear. – Rosa Parks",
  "I alone cannot change the world, but I can cast a stone across the waters to create many ripples. – Mother Teresa",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
  "Whether you think you can or you think you can't, you're right. – Henry Ford",
  "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
  "Everything you've ever wanted is on the other side of fear. – George Addair",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. – Roy T. Bennett",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "The best way to predict your future is to create it. – Abraham Lincoln",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "Dream big and dare to fail. – Norman Vaughan",
  "Our greatest glory is not in never falling, but in rising every time we fall. – Confucius",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Everything you can imagine is real. – Pablo Picasso",
  "I didn’t fail the test. I just found 100 ways to do it wrong. – Benjamin Franklin",
  "A person who never made a mistake never tried anything new. – Albert Einstein",
  "What you lack in talent can be made up with desire, hustle and giving 110% all the time. – Don Zimmer",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "You are always a student, never a master. You have to keep moving forward. – Conrad Hall",
  "Happiness is not something readymade. It comes from your own actions. – Dalai Lama",
  "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. – Aristotle",
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
