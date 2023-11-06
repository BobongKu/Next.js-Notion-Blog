import React from 'react'

import Lottie from 'react-lottie-player'

export default function Animation({lottieJson}) {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}