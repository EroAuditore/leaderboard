import axios from "axios";
const scores = [];
const gameId = "pMxFA7HzjrI3CVSUQpgA";
const apiURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api";

const getScores = async () => {
  const response = await axios.get(`${apiURL}/games/${gameId}/scores`);
  return response;
};

const addScores = (score) => {
  scores.push(score);
};

export { getScores, addScores };
