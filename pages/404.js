import React, { useEffect } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="container">
    <h1>page not found</h1>
    <Link href="/">
    <a className="btn btn-dark"> go Home</a>
    </Link>
    </div>
  )
}

export default Error  