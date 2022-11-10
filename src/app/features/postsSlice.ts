import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

import IPostItem from '@/types/IPostItem';

import { getPosts,createPost } from "@/services/postService";

const initialState = {
    posts: [] as IPostItem[],
    status: 'idle',
    error: null
}

type PostActionType = {
    type: string,
    payload: IPostItem
}

type State = {
    posts: {
        posts: IPostItem[],
        status: string,
        error: string
    }
    status: string,
    error: string
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await getPosts();
        return response

    } catch (error : any) {
        return error.message
    }
})

// ADD NEW POST
export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost: IPostItem) => {
    try {
        const response = await createPost(initialPost);
        return response

    } catch (error : any) {
        return error.message
    }
})

// const initialState = [
//     {
//         id: '1',
//         title: 'learning react + redux-toolkit',
//         content: 'I am making a simple blog using vite + react + react-bootstrap + redux-toolkit',
//         date: sub(new Date(), { minutes: 3 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0
//         }
//     },
//     {
//         id: '2',
//         title: 'react is simple',
//         content: 'reactjs is imple to learn and start using even as a beginner',
//         date: sub(new Date(), { minutes: 123 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0
//         }
//     },
// ]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PostActionType) {
                state.posts.push(action.payload)
            },
            prepare(title, content, userId) : any {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },

        addReaction(state, action) {
            const { postId, reaction } = action.payload
            const existing = state.posts.find(post => post.id === postId) as any

            if (existing) {
                existing.reactions[reaction]++
            }
        }
    },

    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'

                let min = 1;
                const loadedPosts = action.payload.map((post:any) => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString()
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }

                    return post
                })

                state.posts = state.posts.concat(loadedPosts)
            })
            .addCase(fetchPosts.rejected, (state:any, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                action.payload.userId = parseInt(action.payload.userId)
                action.payload.date = new Date().toISOString()
                action.payload.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0
                }
                console.log(action.payload)
                state.posts.push(action.payload)
            })

    }
})

export const selectAllPosts = (state:State) => state.posts.posts

export const getPostsStatus = (state:State) => state.posts.status

export const getPostsError = (state:State) => state.posts.error

export const { postAdded, addReaction } = postSlice.actions

export default postSlice.reducer