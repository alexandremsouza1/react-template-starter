import IPostItem from '@/types/IPostItem';


const PostCard = ({ title, body }: IPostItem) => (
  <div className="border-solid border-2 border-black-50">
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
);

export default PostCard;