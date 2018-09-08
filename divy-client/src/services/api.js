const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000'

// Function: gets current users transactions from DB
function getTransactions(id) {
    return fetch(BASE_URL + `/users/${id}/transactions`)
        .then(resp => resp.json())
}

// Function: gets 

// export functions for use in Component classes
export {
    getTransactions,
}

