import Writing from './blogs';
import Content from './content';
import useFetch from './useFetch';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App/>, document.getElementById('root'));

const Home = () => {

 const{blogs,blog1,ispending,error,ti,link,handleintro,handleremove} = useFetch('https://blog-api-va55.onrender.com/blogs');

  return (
<div className="Start">
 <div className='realb'><button onClick={handleintro}>Real_Me</button> </div>
 <div className='tib'> <a href={link}  target="_blank">{ti}</a> </div>
  <Content/>
  {ispending&&<h1>Loading...</h1>}
  {error&&<div>{error}</div>}
  {blogs&&<Writing blogs={blogs} title={"Writings"} handleremove={handleremove} st={0}/>}
  {blog1&&<Writing blogs={blog1} title={"Utsav's Writings :>"} handleremove={handleremove} st={1}/>}
          </div>
         
  );
}
 
export default Home;