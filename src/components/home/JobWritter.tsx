'use client'

import { useLanguage } from '@/context/LangContext'
import { Typewriter } from 'react-simple-typewriter'

export const JobWritter = () => {

  const { language } = useLanguage()

  const english = ['English Professor', 'Subtitler', 'Translater']
  const portuguese = ['Professor de inglês', 'Legendador', 'Tradutor']

  return (
    <h4 className="text-2xl font-bold">
      {language === 'pt-br' ? 'Eu sou' : 'I am'}{' '}
      <span className="text-primary">
        <Typewriter
          words={language === 'pt-br' ? portuguese : english}
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
