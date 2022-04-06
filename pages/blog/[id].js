import React from 'react'

export const getStaticPaths = async () => {
  const res =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9");
  const data= await res.json();
  const paths=data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return { paths, fallback: false };
}

export const getStaticProps= async(context)=>{
  const id=context.params.id;
  const res =await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
  const data= await res.json();
  return {
    props:{post:data}
  }
}

const post = ({post}) => {
  return (
    <div className="container">
    <div className="row">

       <div className="col-md-6 d-flex mt-5">
          <div className="align-self-center">
            <h1>{post.title}</h1>
            <hr/>
            <p className="lead mt-3">{post.body}</p>
            </div>
        </div>
        <div className="col-md-6 mt-5">
        <img src={`https://source.unsplash.com/720x400/?${post.id}`} className="img-fluid rounded" alt="Image from Unsplash"/>
        </div>
      
      </div>
  
    </div>
  )
}

export default post