# Welcom to Divy

Divy is a financial app that allows users to split transactions in real-time. Imagine you're at a restaurant with three friends and one forgets their wallet (this happens ALL the time of course). No problem! Just create a Divy transaction, add all parties and we'll take care of the financials for you. 

In order to use Divy, we'll need you to connect a bank account OR use Divy Dollars (purchasable upon login) to process transactions with other users.

There's multiple ways to conduct transactions:

1. Split a bill in real-time
2. Charge friends for previous transactions
3. Divy to friends if you owe money for anything else

Another great feature of Divy is the ability to create groups. Each user in a group will receive a Divy card (which is also available for personal use) and can complete transactions so long as the group authorizes the spend.

## User Stories:

1. I have four siblings and use Divy to split costs spent on family, entertainment and holiday events
2. I have a significant other and wish to split finances without creating a joint bank account
3. I have a group of active friends that frequently visit restaurants and bars and wish to split bills in real-time
4. I travel with friends and wish to split expenses fast and efficiently to avoid cash reconciliations post travel
5. I'm starting a business and split expenses with my partner 50/50 so we need a group account with a credit card
6. I have roommates and we would like to split apartment expenses evenly with minimal hassle

## ERD:

![Divy DB Tables]<img width="679" alt="screen shot 2018-09-04 at 3 48 49 pm" src="https://user-images.githubusercontent.com/34017019/45054132-13c4a600-b05a-11e8-865c-4e804ec1364b.png">

## Wireframe:

<img width="923" alt="screen shot 2018-09-04 at 3 10 30 pm" src="https://user-images.githubusercontent.com/34017019/45052421-bda13400-b054-11e8-8cde-71d8d8623f3d.png">

## MVP:

1. Users can register and create an account that can be updated in the future if necessary
2. Users can add Divy Dollars to their wallet or connect a bank account for transactions
3. Users can create transactions to split amongst other users
4. Users can create groups with other users and add to a pool of Divy Dollars for shared purchases
5. Users can edit and delete groups

## Code Snippet:

`  findUserId() {
    const jwt = localStorage.getItem('jwt')
    const decoded = jwtDecode(jwt)
    const userId = decoded.sub
    getUser(userId)
      .then(data => this.setState({ 
        user: data,
        user_id: data.id
      }))
  }

  login() {
    const url = `${BASE_URL}/user_token`;
    const body = { "auth": { "email": this.state.email, "password": this.state.password } }
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(body),
    }
    fetch(url, init)
      .then(res => res.json())
      .then(res => localStorage.setItem("jwt", res.jwt))
      .then(this.findUserId())
      .then(data => this.setState({
        isLoggedIn: true,
        currentView: 'Homepage',
      }))
      .catch(err => console.log(err))
  }`

## Technologies:

1. Rails - Back-end Dev
2. React.js - Front-end Dev
3. Google Draw - ERD Planning
4. Adobe XD - Wireframing

## Created By:

Shawn Hassen
