import api from './api-helper'

export const readAllComments = async () => {
    const resp = await api.get('/comments')
}

export const readOneComment = async (id) => {
    const resp = await api.get (`/comments/${id}`)
    return resp.data
}

export const postComment = async (commentData) => {
    const resp = await api.post( '/comments', { comment: commmentData })
    return resp.data
}

export const putComment = async (id, commentData) => {
    const resp = await api.put(`/comments/${id}, { comment: commentData}`)
    return resp.data
}

export const destroyComment = async (id) => {
    const resp = await api.delete(`/comments/${id}`)
    return resp
}