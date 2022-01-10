import React from 'react';
import Head from 'next/head';
import Card from '../../components/Card';
import Classes from '../../styles/Home.module.scss';


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      users: data
    }
  }
} 


const UserPage = ({ users }) => {
  return (
    <>
      <Head>
        <title>NEXT JS | Users list</title>
      </Head>

      <div className='content__container'>
        <h1>Users list page</h1>
      </div>

      <div className={Classes.container}>
        {
          users.map(user => {
            return <Card key={user.id} username={user.username} name={user.name} website={user.website} />
          })
        }
      </div>
    </>
  )
}

export default UserPage;
