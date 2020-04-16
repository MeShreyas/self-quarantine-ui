/*
export function someAction (context) {
}
*/

import axios from "axios";

const url = "http://localhost:5656/search";

export const search = ({ commit }, payload) => {
  console.log(payload);

  axios
    .post(url, payload)
    .then(response => {
      commit("UPDATE_QUIZ_DATA", response.data);
    })
    .catch();
};

export const fetchSuspect = ({ commit }) => {
  axios.get(suspect).then(response => {
    commit("UPDATE_SUSPECT_DATA", response.data);
  });
};
