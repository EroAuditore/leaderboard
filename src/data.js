const scores = [];

const apiURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api";

const getScores = async () => {
  await axios
    .get("/user?ID=12345")
    .then(function (response) {
      // handle success
      scores = [...response.result];

      console.log(response.result);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

const addScores = (score) => {
  scores.push(score);
};

export { getScores, addScores };
