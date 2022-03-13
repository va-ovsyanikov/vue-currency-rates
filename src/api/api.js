import axios from 'axios'

export const  request = async (value )=>{
    const key = process.env.VUE_APP_KEY
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${key}/latest/${value}`)
    return response.data
}