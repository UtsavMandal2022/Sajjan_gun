import { useEffect,useState } from "react";

const useFetchdet = (url) => {
    const [blogs,setblogs]=useState(null);
  let [ispending,setispending]=useState(true);
  let [error,seterror]=useState(null);

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

return {blogs,ispending,error};
}

export default useFetchdet;