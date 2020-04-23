import PropTypes from 'prop-types'
import React from 'react'
function Images({ images }) {
  if (!images || images.length === 0) {
    return ''
  }
  return (
    <div>
      {images.map((image, i) => (
        <img src={image} alt={image} key={`portfolio-image-${i}`} />
      ))}
    </div>
  )
}

Images.propTypes = { images: PropTypes.array }

export default Images
