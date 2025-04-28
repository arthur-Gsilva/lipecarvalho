'use client'

import { Typewriter } from 'react-simple-typewriter'

export const JobWritter = () => {
  return (
    <h4 className="text-2xl font-bold">
      I'm{' '}
      <span className="text-primary">
        <Typewriter
          words={['English Professor', 'Subtitler', 'Translater']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h4>
  )
}
