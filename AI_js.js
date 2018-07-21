(function() {
  "use strict";

  window.onload = function() {
    // prevent the default form behavior when a submit button is clicked - we want to
    // post through an ajax request instead
    $("input-form").onsubmit = function(event) {
      event.preventDefault();
    };

    $("submit").onclick = analyse;
  };

  function analyse() {
      //send request to do Analysis

      let companyname = qs("input").value;
      let article = encodeURIComponent(qs("textarea").value);
      let url = "https://cse154-student-18sp-am-an-cloned-bokunw.c9users.io/AI_python_test.py"; //the url of where to fetch data from
      url = url + "?companyname=" + companyname + "&article=" + article;
         fetch(url, {mode: 'cors'}) //fetch data from the above url
             .then(checkStatus)
             .then(displayResult) //display the pokedex onto the page
             .catch(alertError); //if fetch failed, pop up an alert to the user
      //populate results after Analysis(in a separate function)

      //hide inputing fields
      $("input-form").classList.add("hidden");


  }

  function displayResult(result) {
      $("results").innerText
  }
  /* ==============================  Helper Functions ============================== */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @return {object} DOM object associated with id.
   */
  function $(id) {
    return document.getElementById(id);
  }

  function alertError() {
        alert("Failed to fetch data, please check input parameters and try again.");
    }

  function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.text();
        } else {
            return Promise.reject(new Error(response.status +
                                         ": " + response.statusText));
        }
    }

  /**
   * Returns an array of DOM elements matching given query selector (alias for
   * document.querySelectorAll)
   * @param {string} query - query matching returned DOM elements.
   * @return {object[]} array of DOM objects matching the given query.
   */
  function qs(query) {
    return document.querySelector(query);
  }
})();
