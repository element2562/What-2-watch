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
        value: (username) => {
            return fetch(`http://localhost:5001/api/users?username=${username}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": `Bearer ${localStorage.getItem("What2Watch_token")}`
                }
            })
            .then(e => e.json())
            .then(r => console.log(r))
        }
    },
})
export default Api;