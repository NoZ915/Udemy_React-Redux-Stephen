import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID s6X6PEJrJ2RuT00Rw3HkxZotqVFvEFnQlTvQ87vnog4'
        },
        params: {
            query: term
        }
    })
    
    return response.data.results;
}

export default searchImages;