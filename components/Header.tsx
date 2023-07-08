import React from 'react'
import Image from "next/image";
import ArrowLeft from '../public/assets/img/icon/arrrow-left.svg'
import ArrowRight from '../public/assets/img/icon/arrow-right.svg'

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
        <h1 className='text-[1.3rem] font-bold'>Top Soccer Games</h1>
        <div className="flex gap-2 items-center">
          <button type="button" className="btn">
            View All
          </button>
          <button type="button" className="btn">
          <Image
              priority
              src={ArrowLeft}
              height={14}
              width={14}
              alt="Follow us on Twitter"
            />
          </button>
          <button type="button" className="btn">
            <Image
              priority
              src={ArrowRight}
              height={14}
              width={14}
              alt="Follow us on Twitter"
            />
          </button>
        </div>
      </div>
  )
}

export default Header