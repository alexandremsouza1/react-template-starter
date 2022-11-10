import api from '@/plugins/api';
import IPostItem from '@/types/IPostItem';

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const getPost = async (id: number) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (post: IPostItem) => {
  const response = await api.post('/posts', post);
  return response.data;
};


