import Image from 'next/image'
import React from 'react'
import BULB from '@/public/bulb.png'

const Bulb = () => {
  return (
    <div className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'>
      <Image
        src={BULB}
        width={260}
        height={200}
        className='w-full h-full'
        alt=''
        draggable="false" // Menambahkan atribut draggable="false"
      />
    </div>
  )
}

export default Bulb