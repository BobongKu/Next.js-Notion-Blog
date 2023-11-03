import React from 'react'

import Lottie from 'react-lottie-player'

import lottieJson from '../public/Animation - 1698907578297.json'

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}