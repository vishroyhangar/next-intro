import Link from 'next/link';
import React from 'react';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar__logo'>
        <Link href='/'>
          <a>
            WEBSITE
          </a>
        </Link>
      </div>

      <div className='topbar__nav'>
        <ul>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>

          <li>
            <Link href='/users'>
              <a>Users</a>
            </Link>
          </li>

          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Topbar
