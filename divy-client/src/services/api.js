const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000'

// Function: gets current users transactions from DB
function getTransactions(id) {
    return fetch(`${BASE_URL}/users/${id}/transactions`)
        .then(resp => console.log(resp.json()))
}

// Function: gets logged in users info
function getUser() {
    return fetch(`${BASE_URL}/users`)
        .then(resp => console.log(resp.json()))
}

// function getUser() {
//     console.log(email)
    // const userUrl = `${BASE_URL}/users`;
    // const token = !!(localStorage.getItem("jwt"))
//     // const body = { "user": { "email": email }}
    // const opts = {
//       method: 'GET',
    //   headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
//       mode: 'cors',
//     //   body: JSON.stringify(body)
//     }
//     fetch(userUrl, opts)
//       .then(resp => console.log(resp.json()))
//   }

// export functions for use in Component classes
export {
    getTransactions,
    getUser,
}

