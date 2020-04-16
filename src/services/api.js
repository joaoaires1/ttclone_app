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

/**
 * Return posts by username
 * @param id
 * @param api_token
 * @param username
 */
export const callPerfilPosts = async ({id, api_token, username}) => {

    const response = await api.get('/posts_by_username', { params: {
        id,
        api_token,
        username
    }});

    return response;
}

/**
 * Search users by name
 * @param id
 * @param api_token
 * @param name
 */
export const callSearchPeoples = async ({id, api_token, name}) => {

    const response = await api.get('/search', { params: {
        id,
        api_token,
        name
    }});

    return response;
}

/**
 * Post a new tweet
 * @param id
 * @param api_token
 * @param text
 */
export const callPostTweet = async ({id, api_token, text}) => {

    const response = await api.post('/posts', {
        id,
        api_token,
        text
    });

    return response;
}

/**
 * Start follow an user
 */
export const callFollowUser = async ({id, api_token, followed_id}) => {
    const response = await api.post('/follow', {
        id, 
        api_token, 
        followed_id
    });

    return response;
}

/**
 * Unfollow an user
 */
export const callUnfollowUser = async ({id, api_token, followed_id}) => {
    const response = await api.delete(`/follow/${followed_id}`, {
        params: {
            id,
            api_token
        }
    });

    return response;
}

/**
 * Submit edit perfil data
 * @param {*} FormData 
 */
export const callEditPerfil = async FormData => {
    const response = await api.post('/edit_perfil', FormData);

    return response;
}