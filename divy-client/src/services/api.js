const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000'

// Function: gets current users transactions from DB
function getTransactions(id, init) {
    return fetch(`${BASE_URL}/users/${id}/transactions`, init)
        .then(resp => resp.json())
}
// Function: edits a users transaction
function editTransaction(user_id, transaction_id, init) {
    return fetch(`${BASE_URL}/users/${user_id}/transactions/${transaction_id}`, init)
        .then(resp => resp.json())
}

// Function: gets logged in users info
function getUser(id) {
    return fetch(`${BASE_URL}/users/${id}`)
        .then(resp => resp.json())
}

// Function: Deletes a transaction
function deleteTransaction(user_id, transaction_id, init) {
    return fetch(`${BASE_URL}/users/${user_id}/transactions/${transaction_id}`, init)
        .then(resp => resp.json())
}

// export functions for use in Component classes
export {
    getTransactions,
    editTransaction,
    getUser,
    deleteTransaction,
}

