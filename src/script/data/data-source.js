class DataSource {
    static searchFilm(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=44791736fca43f6b6006b2afd9e27e12&language=en-US&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results.length != 0) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found!`);
            }
        })
    }
 };

 export default DataSource;