import axios from 'axios'
const https = require('https')

export const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MONEYCONTROL_API_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})
