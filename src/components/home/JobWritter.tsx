'use client'

import { useLanguage } from '@/context/LangContext'
import { Typewriter } from 'react-simple-typewriter'

export const JobWritter = () => {

  const { language } = useLanguage()

  const english = ['English Professor', 'Programming teacher', 'Translator', 'Writer', 'Game Developer']
  const portuguese = ['Professor de inglês', 'Professor de programação', 'Tradutor', 'Escritor', 'Desenvolvedor de Jogos']

  return (
    <h4 className="text-2xl font-bold">
      {language === 'pt-br' ? 'Eu sou' : 'I am a'}{' '}
      <span className="text-primary">
        <Typewriter
          words={language === 'pt-br' ? portuguese : english}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={30}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </span>
    </h4>
  )
}
