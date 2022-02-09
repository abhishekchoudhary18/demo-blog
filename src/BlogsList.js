import { Link } from "react-router-dom";

const Blogslist = ({blog,title}) => {
    const handleClick=(id)=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'Delete',
        }).then(()=>{window.location.reload(false);})
    }
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blog.map((blog) => (
              <div className="blog-preview" key={blog.id}>
                  <Link to={`/blog/${blog.id}`}>
                    <h2>{ blog.title }</h2>
                    <p>written by {blog.author}</p>
                  </Link>
                  <button onClick={()=>handleClick(blog.id)}>Delete Blog</button>
              </div>
          ))}
        </div>
     );
}
 
export default Blogslist;