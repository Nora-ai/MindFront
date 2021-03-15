import api from './api-helper';

export const readAllPosts = async () => {
    const resp = await api.get('/posts')
    return resp.data
}

export const readOnePost = async (id) => {
    const resp = await api.get (`/posts/${id}`)
    return resp.data
}

export const postPost = async (postData) => {
    const resp = await api.post( '/posts', { post: postData })
    return resp.data
}

export const putPost = async (id, postData) => {
    const resp = await api.put(`/posts/${id}`, { post: postData})
    return resp.data
}

export const destroyPost = async (id) => {
    const resp = await api.delete(`/posts/${id}`)
    return resp
}

export const addComment = async(commentId, postId) => {
    const resp = await api.put(`/comments/${commentId}/posts/${postId}`)
    return resp.data
}