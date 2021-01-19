import axios from 'axios';

export class Backend {
    static async getDogs() {
        const response = await axios.get('/dogs');
        return response.data;
    }
}
