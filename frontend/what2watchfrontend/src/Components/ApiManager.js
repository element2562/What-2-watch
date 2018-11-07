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
        value: (token) => {
            return fetch("https://localhost:5001/api/movies", {
                method: "GET",
                headers: {
                    "Authorization": `bearer ${token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(res => res.json())
        }
    },
    addMovieToLibrary: {
        value: (token, title, summary, rating, extapi, picture) => {
            return fetch("https://localhost:5001/api/movies",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": `bearer ${token}`,
                    
                },
                body: JSON.stringify({
                    Title: title,
                    Summary: summary,
                    Rating: rating,
                    ExtApiId: extapi,
                    Picture: picture,
                })
            }
        )
        .then(res => res.json())
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
    },
    addPersonalRating: {
        value: (token, MovieObject) => {
            return fetch(`https://localhost:5001/api/movies/${MovieObject.movieId}`, {
                method: "PUT",
                headers: {
                    "Authorization": `bearer ${token}`,
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(MovieObject)
            })
            // .then(res => res.json())
        }
    },
    deleteMovieFromLibrary: {
        value: (id, token) => {
            return fetch(`https://localhost:5001/api/movies/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `bearer ${token}`
                }
            })
        }
    },
    recommendAMovie: {
        value: (id) => {
            return fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=b88e789d5af41aa1810a1e0c9a2cc6c0`, {
                headers: {
                    "api_key": "b88e789d5af41aa1810a1e0c9a2cc6c0",
                    "Accept": "application/json",
                }
            })
            .then(res => res.json())
        }
    }
})
export default Api;