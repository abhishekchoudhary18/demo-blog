import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const[title,setTitle] = useState("");
    const[body,setBody] = useState("");
    const[author,setAuthor] = useState("Mario");
    const[isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsPending(true);
        const blog = {title,body,author};
        fetch('http://localhost:8000/blogs/',{
            method: 'post',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            setTitle("");
            setBody("");
            history.push('/');
        })
        
    }
    

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type='text'
                    value={title}
                    required
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    value={body}
                    required
                    onChange={(e)=>setBody(e.target.value)}
                />
                <label>Blog Author</label>
                <select onChange={(e)=>setAuthor(e.target.value)} >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button> }
                {isPending && <button disabled >Adding</button> }
                
            </form>
        </div>
     );
}
 
export default Create;