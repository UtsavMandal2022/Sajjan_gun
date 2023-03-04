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
                        <h1>
                            {blog.title}
                        </h1>
                        <p>
                            {blog.body}
                        </p>
                        <h2>
                            {blog.author}
                        </h2>
                        <button onClick={() => handleremove(blog.id,st)}>delete</button>
                    </div>
                ))
                }
            </div>
        );
    }

export default Writing;