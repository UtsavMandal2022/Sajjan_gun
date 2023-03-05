import Writing from './blogs';
import Content from './content';
import useFetch from './useFetch';

const Home = () => {

 const{blogs,blog1,ispending,error,ti,handleintro,handleremove} = useFetch('https://utsavmandal2022.github.io/blog-api/blogs.json');

  return (
<div className="Start">
  <h1>{ti}</h1>
  <button onClick={handleintro}>Real_Me</button>
  <Content/>
  {ispending&&<h1>Loading...</h1>}
  {error&&<div>{error}</div>}
  {blogs&&<Writing blogs={blogs} title={"Writings"} handleremove={handleremove} st={0}/>}
  {blog1&&<Writing blogs={blog1} title={"Haley's Writings :>"} handleremove={handleremove} st={1}/>}
          </div>
         
  );
}
 
export default Home;