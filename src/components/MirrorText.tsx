type MirrorTextProps = {
    main: string
    mirror: string
}
  
  export const MirrorText = ({ main, mirror }: MirrorTextProps) => {
    return (
      <div className="relative w-fit mx-auto my-20">
        <div
          className="absolute top-0 left-0 text-6xl font-bold text-gray-400 opacity-30 translate-x-[20px] translate-y-[40px] rotate-[0deg] select-none pointer-events-none whitespace-nowrap"
          style={{
            textShadow: '0px 0px 10px rgba(0,0,0,0.1)',
          }}
        >
          {mirror}
        </div>
  
        {/* Texto principal */}
        <h1 className="relative text-6xl font-bold text-black">{main}</h1>
      </div>
    )
  }