import { useApi } from '../../hooks/useApi';

const Posts = () => {
  const posts = useApi('posts') // https://jsonplaceholder.typicode.com/posts
  return (
    <>
      <h1>Posts</h1>
      {posts && posts.map(post => (
        <div key={post.id}>
          <a href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </a>
        </div>
      ))}

    </>
  )
}

export default Posts;
