import Image from 'next/image'
import React from 'react'
import top_left_img from '@/public/top-left-img.png'

const TopLeftImg = () => {
  return (
	  <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'>
		  <Image src={top_left_img} width={400} height={400} alt='top_left_img' draggable="false"/>
	</div>
  )
}

export default TopLeftImg