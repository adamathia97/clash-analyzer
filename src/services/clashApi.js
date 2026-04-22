import axios from 'axios'

// Switch to the RoyaleAPI Proxy URL
const API_BASE_URL = 'https://proxy.royaleapi.dev/v1' 
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU1NjQyZjc4LWQ1MjItNDExMy1iYzU2LTBjOTc0NGQzOTc0MCIsImlhdCI6MTc3Njg4NjI2MCwic3ViIjoiZGV2ZWxvcGVyLzM2ZTBlMzc4LTQ1ZDItNTEzNS05MmI4LTAzN2I2ODM0YmJmMyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.YQALNAcXhtqvaAarq8UvpNMUPoVHRxqVzenMUnAhwS-clT92onJWbIHS-kR2YzYGJo9T9dM6mHhWtN6KGBx_uA' // Still use your key from the developer portal

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    // This is the key that authorizes the proxy to talk to Supercell on your behalf
    Authorization: `Bearer ${API_KEY}`
  }
})

export const getPlayerProfile = (playerTag) => {
  const cleanTag = playerTag.replace('#', '')
  return client.get(`/players/%23${cleanTag}`)
}