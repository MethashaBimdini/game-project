import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6cc337d6cd664cd5b05396be5102b8de'
    }
})