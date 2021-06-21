import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  
  const {id} = useParams();
  const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)
  const history = useHistory();

  const handleClick = (e) => {
    
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(()=>{
      history.push('/');
    })
  }
  return ( 
    <div className="blog-details">
      {error && <div>{error}</div> }
      {isPending && <div>Loading...</div> }
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <br />
          <p>Written by <b> {blog.author}</b></p>
          <br />
          <div>{blog.body}</div>
          <br />
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails
