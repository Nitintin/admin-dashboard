import React from 'react'

const Rating = ({
    totalRating
}) => {
  return (
    <div>
        {
            totalRating >= 1 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>
        }
        {
            totalRating >= 2 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>
        }
        {
            totalRating >= 3 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>
        }
        {
            totalRating >= 4 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>
        }
        {
            totalRating >= 5 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>
        }
    </div>
  )
}

export default Rating