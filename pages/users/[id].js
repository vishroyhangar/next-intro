import React from 'react';
import { useRouter } from 'next/router';

const Product = () => {
const router = useRouter();
console.log("The router path : " + router.pathname);


  console.log("The router query : " + router.query);

  return (
    <div className='content__container'>
      <h1>The ProductID page</h1>
    </div>
  )
}

export default Product;
