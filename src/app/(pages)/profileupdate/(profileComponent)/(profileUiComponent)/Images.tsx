import Image from 'next/image'
import React from 'react'

const Images = () => {
  return (
    <div className="w-full relative ">
  <div className="relative max-w-md w-full aspect-square overflow-hidden rounded-md 
  mx-auto shadow-lg border border-gray-200">
    <Image
      src="/images/img1.png"
      alt="img"
      fill
      className="object-cover"
    />
    <div className="absolute top-0 w-full p-3 bg-[#fafaf8]  text-black z-20">
     <span className="text-base font-medium Sans-serif "> Just felt cute might delete later</span>
   
  
   
  </div>
  </div>
  
</div>

  )
}

export default Images
