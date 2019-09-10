
const data = {
    getNumberTrivia () {
        return fetch("http://numbersapi.com/random/trivia")
            .then(response => response.text())
    }
  }
  
  export default data