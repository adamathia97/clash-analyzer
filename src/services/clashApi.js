import axios from 'axios'

// Switch to the RoyaleAPI Proxy URL
const API_BASE_URL = 'https://proxy.royaleapi.dev/v1' 
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU1NjQyZjc4LWQ1MjItNDExMy1iYzU2LTBjOTc0NGQzOTc0MCIsImlhdCI6MTc3Njg4NjI2MCwic3ViIjoiZGV2ZWxvcGVyLzM2ZTBlMzc4LTQ1ZDItNTEzNS05MmI4LTAzN2I2ODM0YmJmMyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.YQALNAcXhtqvaAarq8UvpNMUPoVHRxqVzenMUnAhwS-clT92onJWbIHS-kR2YzYGJo9T9dM6mHhWtN6KGBx_uA' // Still use your key from the developer portal

// src/services/clashApi.js
const client = axios.create({
  baseURL: 'https://proxy.royaleapi.dev/v1',
  headers: {
    'Authorization': `Bearer ${API_KEY}`, 
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export const getPlayerProfile = (playerTag) => {
  // RoyaleAPI Proxy URL format: https://proxy.royaleapi.dev/v1/players/%23TAG
  return client.get(`/players/%23${playerTag}`)
}

export const getPlayerBattles = (playerTag) => {
  return client.get(`/players/%23${playerTag}/battlelog`)
}