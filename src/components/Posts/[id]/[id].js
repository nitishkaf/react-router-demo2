import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../../../hooks/useApi';
const PostID = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = useApi(`posts/${id}`);
  return (
    <>
      <h1>{post && post.title}</h1>
      <p>{post && post.body}</p>
      <button onClick={() => navigate(`/posts/${id}/comments`)}>See Comment</button>
    </>
  )
}

export default PostID;
