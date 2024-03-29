import { useState } from "react";
import { useHistory } from "react-router-dom";

const Addblog = () => {
    const [title,settitle]=useState('');
    const [body,setbody]=useState('');
    const[author,setauthor]=useState('');
    let [pending,setpending]=useState(false);
    const hist=useHistory();

    const handleSubmit=(e)=>
    {
        setpending(true);
        e.preventDefault();
        const blog={title,body,author};
        
        fetch('https://blog-api-va55.onrender.com/blogs',{
            method:'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
// console.log('new blog added');
setpending(false);
hist.push('/');
// hist.go(-1);
        } 
        )
    }

    return ( 
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setbody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <input 
            type="text" 
            required 
           value={author}
           onChange={(e)=> setauthor(e.target.value)}
          />
          {!pending&&<button>Add Blog</button>}
          {pending&&<button>Adding...</button>}
        </form>
      </div>
     );
}
 
export default Addblog;