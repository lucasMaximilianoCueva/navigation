import axios from 'axios';

export const getImages = async (searchTerm = 'programming') => 
    await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm }`, {
        headers: {
            Authorization: '563492ad6f9170000100000100ab50c9b47642059b062bd7ac1a7af5'
        }
    }) 
