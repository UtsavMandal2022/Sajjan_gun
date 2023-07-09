import { useHistory, useParams } from "react-router-dom";
import useFetchdet from "./useFetchdet";

const Blogdetails = () => {
    const {id}=useParams();
    const hist=useHistory();
    const {blogs,ispending,error}=useFetchdet('https://blog-api-va55.onrender.com/blogs/'+id);
    const handledel=()=>
    {
        fetch('https://blog-api-va55.onrender.com/blogs/'+blogs.id,
        {method:'DELETE'}).then(()=>{
hist.push('/');
        }
        ) 
    }
    return (  
        <div className="blog-details">
            <h1>Blog Details - {id}</h1>
            {ispending && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {
                blogs&&(
                    <article>
                        <h1>{blogs.title}</h1>
                        <p>{blogs.body}</p>
                        <h2>Written by - {blogs.author}</h2>
                        <button onClick={handledel} >Delete</button>
                    </article>
                )
            }
        </div>
    );
}
 
export default Blogdetails;