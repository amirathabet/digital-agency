
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="row">

       <div className="col-md-6 d-flex mt-5">
          <div className="align-self-center">
            <h1>We work with exciting brands to build amazing products.</h1>
            <hr/>
            <p className="lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. consequuntur, odit veniam mollitia aliquam reiciendis dignissimos.</p>
            <Link href="/about">
            <a className="btn btn-primary mt-2">Get started <i className="icon ion-md-arrow-dropright-circle align-middle"></i></a>
            </Link>
            </div>
        </div>
        <div className="col-md-6 mt-5">
        <img src="/image-01.jpg" className="img-fluid rounded" alt="Image from Unsplash"/>
        </div>
      
      </div>
     
    </div>
  )
}
