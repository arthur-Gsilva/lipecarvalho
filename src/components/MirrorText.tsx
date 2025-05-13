type MirrorTextProps = {
    main: string
    mirror: string,
    bgwhite?: boolean
}
  
  export const MirrorText = ({ mirror }: MirrorTextProps) => {
    return (
      <div className="relative w-fit mx-auto my-20">

        {/* Texto principal */}
        <h1 className="relative text-4xl md:text-6xl font-bold text-black whitespace-nowrap">{mirror}</h1>
      </div>
    )
  }