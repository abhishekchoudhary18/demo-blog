import Bloglist from "./BlogsList";
import useFetch from "./useFetch";


const Home = () => {
    const{data: blogs , error , isPending} = useFetch("http://localhost:8000/blogs");
    
    return ( 
        <div className="home">
            {error && <p>{error}</p> }
            {isPending && <p>Loading...</p> }
            {blogs && <Bloglist blog = {blogs} title = "All-Blogs !" />}
        </div>
     );
}
 
export default Home; 