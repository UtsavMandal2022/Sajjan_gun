import { useEffect,useState } from "react";

const useFetch = (url) => {
    const [ti,set_ti]=useState('Intro');
    let [i,seti]=useState(0);
    const [blogs,setblogs]=useState(null);
  let [ispending,setispending]=useState(true);
  let [error,seterror]=useState(null);
  let [blog1,setblog1]=useState(null);

  const handleintro=()=>
  { 
    if(i%2===0)
    set_ti('Utsav');
    else
    set_ti('Intro');
    seti(i+1);
    console.log(i);
  } 

  const handleremove=(id,st)=>
  {
if(!st)
setblogs(blogs.filter((blog)=>blog.id!==id));
else
setblog1(blog1.filter((blog)=>blog.id!==id));
  }

  useEffect ( ()=>
{
    const abortcont =new AbortController(); 
  setTimeout(() => {
    fetch(url)
.then(res =>
  {
  // console.log(res);
  if(!res.ok)
  {
    throw Error("couldn't fetch data from the resource !!!");

  }
    return res.json();
  }
  )
.then 
(
  data => {
    setblogs(data);
    setblog1(data.filter((blog)=>blog.author==='Haley'));
    setispending(false);
    seterror(null);
  }
)
.catch(e=>
  {
    if(e.name ==='AbortError')
    {
        console.log("fetch Aborted");
    }
    else
    {
        console.log(e.message);
        setispending(false);
        seterror(e.message);
    }
  }
  )
}, 100);
return () =>abortcont.abort();
},[url]);

return {blogs,blog1,ispending,error,ti,handleintro,handleremove};
}
 
export default useFetch;