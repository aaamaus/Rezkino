const PlayL = ({ hovered }: { hovered: boolean} ) => {
  return !hovered ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      fill="none"
    >
      <rect
        width={58}
        height={58}
        x={1}
        y={1}
        stroke="#fff"
        strokeWidth={2}
        rx={29}
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M25 27.608V37l11-6.843L25 23"
      />
    </svg>
  ) :
  (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      fill="none"
    >
      <path
        fill="#fff"
        d="M30 0C13.46 0 0 13.46 0 30s13.46 30 30 30 30-13.46 30-30S46.54 0 30 0Zm6.53 31.01-11 6.84c-.16.1-.34.15-.53.15-.17 0-.33-.04-.49-.13A.992.992 0 0 1 24 37v-9.39c0-.55.45-1 1-1s1 .45 1 1v7.59l8.14-5.06-9.68-6.3a1 1 0 0 1-.29-1.38 1 1 0 0 1 1.38-.29l11 7.16c.29.19.46.51.45.85-.01.34-.18.66-.47.84v-.01Z"
      />
    </svg>
  )
}
export default PlayL
