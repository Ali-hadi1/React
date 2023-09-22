import axios from 'axios';


const searchImage = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            authorization: 'Client-ID NCgmF5Gh-muC1yd71NIF2wCl36bnR9xTRLKVZ3wtk8k'
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
}

export default searchImage;