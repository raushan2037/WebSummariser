import axios from 'axios';
const BASE_URL = "http://127.0.0.1:5000"

export async function getSummary(url){
    try {

        const payload = {
            url : url
        } 
      const response = await axios.post(`${BASE_URL}/get-summary`, payload);

      return response;

    } catch (err) {
      console.log('Could not connect to the server...');
    }
}