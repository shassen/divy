const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000'

// Function: gets current users transactions from DB
function getTransactions(id) {
    return fetch(`${BASE_URL}/users/${id}/transactions`)
        .then(resp => console.log(resp.json()))
}

// Function: gets logged in users info
function getUser(id) {
    return fetch(`${BASE_URL}/users/${id}`)
        .then(resp => resp.json())
}

// export functions for use in Component classes
export {
    getTransactions,
    getUser,
}

