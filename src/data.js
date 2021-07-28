const scores = [
  { name: 'Juan', score: 90 },
  { name: 'Marco', score: 70 },
  { name: 'Alma marcela', score: 95 },
];

const getScores = () => scores;

const addScores = (score) => {
  scores.push(score);
};

export { getScores, addScores };
