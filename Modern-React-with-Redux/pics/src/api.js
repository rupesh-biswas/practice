import axios from "axios";

const searchImages = async (term) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_unsplash_clientID}`
        },
        params: {
            query: term
        }
    })
    return res.data.results;
}

export default searchImages;