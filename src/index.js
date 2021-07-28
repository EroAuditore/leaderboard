import "./css/style.css";
import LiElement from "./components/LiElement";
import { getScores, addScores } from "./data";
import form from "./components/form";

const gameId = "pMxFA7HzjrI3CVSUQpgA";

const displayData = () => {
  const data = getScores();
  const sl = document.getElementById("score-list");
  sl.innerHTML = "";
  data.forEach((score) => {
    const li = LiElement(score);
    sl.append(li);
  });
};

const submitScore = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const score = document.getElementById("score").value;
  const obj = { name, score };
  addScores(obj);
  displayData();
};

const startApp = () => {
  displayData();
  form(submitScore);
};

startApp();
