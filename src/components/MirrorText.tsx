type MirrorTextProps = {
    main: string
    mirror: string,
    bgwhite?: boolean
}
  
  export const MirrorText = ({ main, mirror, bgwhite }: MirrorTextProps) => {
    return (
      <div className="relative w-fit mx-auto my-20">
        <div
          className={`absolute top-0 left-0 text-4xl md:text-6xl font-bold translate-x-[20px] translate-y-[30px] md:translate-y-[40px] rotate-[0deg] select-none pointer-events-none whitespace-nowrap ${bgwhite ? 'text-gray-500 opacity-30' : 'text-gray-100 opacity-70'}`}
          style={{
            textShadow: '0px 0px 10px rgba(0,0,0,0.1)',
          }}
        >
          {mirror}
        </div>
  
        {/* Texto principal */}
        <h1 className="relative text-4xl md:text-6xl font-bold text-black whitespace-nowrap">{main}</h1>
      </div>
    )
  }