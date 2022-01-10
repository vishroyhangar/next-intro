import Link from 'next/link';
import React from 'react';
import Classes from '../styles/Card.module.scss';

const Card = ({username, name, website}) => {
  return (
    <Link href={`users/${username}`}>
      <a>
        <div className={Classes.card}>
          <h3>
            {name}
          </h3>

          <p>
            {website}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default Card
