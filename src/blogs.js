import { Link } from "react-router-dom";

const
    Writing = (props) => {
        const blogs = props.blogs;
        const title = props.title;
        const handleremove=props.handleremove;
        const st=props.st;
        const prprops=()=>
        {
            console.log(props, blogs,handleremove);
        }
        return (
            <div>
                <button onClick={prprops}>Console print props</button>
                <h1>
                    {title}
                </h1>
                {blogs.map((blog) =>
                (
                    
                    <div className="preview" key={blog.id}>
                        <Link to={`blogs/${blog.id}`}>
                        <p class="titlet">
                            {blog.title}
                            </p>
                        <h2>
                            Written by : {blog.author}
                        </h2>
                        </Link>
                        <button onClick={() => handleremove(blog.id,st)}>Hide</button>
                    </div>
                    
                ))
                }
            </div>
        );
    }

export default Writing;