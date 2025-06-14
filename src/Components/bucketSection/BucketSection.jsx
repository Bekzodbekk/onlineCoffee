import React from 'react'
import "./bucketSection.scss"
import BucketItem from '../bucketItem/BucketItem'

const BucketSection = ({bucketShowCheck, bucketShowCheckFunc}) => {
  
  return (
    <div className='bucket' onClick={bucketShowCheckFunc} style={bucketShowCheck ? {"right": 0} : {"right": "-100%"}}>
      <div className="bucket-container" onClick={(e) => e.stopPropagation()}>
        <div className="bucket-title">
          <h1 className='title'>Bucket :)</h1>
        </div>
        <div className="bucket-items">
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
        </div>
        <div className="confirm-btn">
          <button>
            <a href="/">Confirm</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BucketSection