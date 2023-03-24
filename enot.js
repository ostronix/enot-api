"use strict"

const fetch = (url, init) => global.fetch (url, init)
const options = { api_key: null, email: null }
const paramsfetch = require (`./default/params.js`)

class Formate {
constructor ({ api_key, email }) {
    options.api_key = api_key
    options.email = email
}
}

async function getBalance () {

    const url = `https://enot.io/request/balance?api_key=${options.api_key}&email=${options.email}`
    const response = await fetch (url, paramsfetch [0])
    .then (x => x.json())

    return response 
}

async function getWallet (wallet, amout) {
   
    const url = `https://enot.io/request/payoff?api_key=${options.api_key}&email=${options.email}&service=qw&wallet=${wallet}&amount=${amout}`

    const response = fetch (url, paramsfetch [0])
    .then (x => x.json ())

    return response
}

module.exports = {
    Params: Formate,
    getBalance: getBalance,
    getWallet: getWallet
}