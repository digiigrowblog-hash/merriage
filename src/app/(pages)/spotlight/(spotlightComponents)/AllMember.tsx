import Image from 'next/image'
import React from 'react'

const AllMember = () => {
  return (
    <div className='h-auto w-auto px-2 flex-col'>
        <h2 className='text-lg '>All Hearts Welcome ✨</h2>
        <div className='flex-col'>
            <div className='flex justify-between items-center'>
                <div className=' rounded-full flex justify-start items-center gap-2'>
                    <Image width={10} height={10} alt={"image"} src={"/images/img1.png"} className='w-6 h-6 relative' />
                    <h2 className='text-sm'>Rahul Jha</h2>
                </div>

                

                <button>Pitch</button>
                <button>Message</button>
            </div>
        </div>
        

      
    </div>
  )
}

export default AllMember
