import Link from 'next/link'
import React from 'react'
import {  RiExchangeDollarLine, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiTelegramLine, RiYoutubeLine } from 'react-icons/ri'
import UserPage from './UserPage';

const Socials = () => {


  return (
      <div className="flex items-center gap-x-5 text-2xl">
          <Link
              href="https://www.instagram.com/hfzrfa/"
              className="hover:text-accent transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
          >
              <RiInstagramLine />
          </Link>
          <Link
              href="https://t.me/hratya"
              className="hover:text-accent transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
          >
              <RiTelegramLine />
          </Link>
          <Link
              href="https://github.com/hfzrfa"
              className="hover:text-accent transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
          >
              <RiGithubLine />
          </Link>
          <Link
              href="https://www.linkedin.com/in/hfzrfa/"
              className="hover:text-accent transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
          >
              <RiLinkedinLine />
          </Link>
          <UserPage />
      </div>
  );
}

export default Socials