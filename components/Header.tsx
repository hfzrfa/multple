import React from 'react'
import Socials from './Socials'

const Header = () => {
  return (
	  <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
		  <div className='container mx-auto'>
			  <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
				<h1></h1>
				<Socials />
			</div>
		  </div>
	</header>
  )
}

export default Header