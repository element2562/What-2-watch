const Api = Object.create({}, {
    SearchMovieDb: {
        value: (userQuery) => {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=b88e789d5af41aa1810a1e0c9a2cc6c0&query=${userQuery}&page=1`, 
        {
            headers: {
                "Accept": "application/json",
                "api_key": "b88e789d5af41aa1810a1e0c9a2cc6c0"
            }
        })
        }
    },
    addNewUser: {
        value: (username, password) => {
            return fetch("http://localhost:5001/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(e => e.json())
        }
    },
    getUsers: {
        value: (token) => {
            return fetch(`https://localhost:5001/api/users`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(e => e.json())
        }
    },
    getUsersMovies: {
        value: () => {
            return fetch("https://localhost:5001/api/movies")
            .then(res => res.json());
        }
    },
    addMovieToLibrary: {
        value: (title, summary, rating, picture, userid) => {
            return fetch("https://localhost:5001/api/movies",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: {
                    Title: title,
                    Summary: summary,
                    Rating: rating,
                    Picture: picture,
                    UserId: userid
                }
            }
        )
        }
    },
    searchForMovie: {
        value: (input) => {
            return fetch(`
            https://api.themoviedb.org/3/search/movie?api_key=b88e789d5af41aa1810a1e0c9a2cc6c0&query=${input}&page=1`, {
            method: "GET",    
            headers: {
                "Accept": "application/json",
                }
            })
            .then(res => res.json())
        }
    }
})
export default Api;