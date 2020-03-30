import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.0.0.8:8000/api'
})

/**
 * Call api make user login
 * @param username
 * @param password
 */
export const callLogin = async ({ username, password}) => {
    
    const response = await api.post('/login', {
        username,
        password
    });

    return response;
}

/**
 * Call api to get posts in timeline
 * @param id
 * @param api_token
 */
export const callTimeline = async ({id, api_token}) => {

    const response = await api.get('/timeline', { params: {
        id,
        api_token
    }});

    return response;
}

export const callPerfilPosts = async ({id, api_token, username}) => {

    const response = await api.get('/posts_by_username', { params: {
        id,
        api_token,
        username
    }});

    return response;
}