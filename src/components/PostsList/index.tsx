import { useEffect } from "react"
import { fetchPosts,selectAllPosts,getPostsStatus } from "@/app/features/postsSlice"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch } from "@/app/store"
import PostCard from '@/components/PostCard';

const PostsList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const posts = useSelector(selectAllPosts)
  const status = useSelector(getPostsStatus)


  useEffect(() => {
      if (status == 'idle') {
          dispatch(fetchPosts())
      }
  }, [status, dispatch])


  return (
      <div className="grid gap-4 grid-cols-1">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
      </div>
    );
};

export default PostsList;