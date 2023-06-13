import { useNavigate, useParams } from 'react-router-dom'
import { useApi } from '../../../hooks/useApi';

const CommentsFromID = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const comment = useApi(`posts/${id}/comments`);
  return (
    <>
      <h1>Comments</h1>
      {comment && comment.map(comment => (
        <div key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </div>
      ))}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}

export default CommentsFromID
