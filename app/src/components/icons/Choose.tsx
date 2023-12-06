interface IProps {
  stroke?: string;
}

const Choose = ({ stroke }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={32}
    fill="none"
  >
    <path
      stroke={stroke ? stroke : "#fff"}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.77 7.34H3a2 2 0 0 0-2 2V29a2 2 0 0 0 2 2h11.77a2 2 0 0 0 2-2V9.34a2 2 0 0 0-2-2Z"
    />
    <path
      stroke={stroke ? stroke : "#fff"}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="m9.6 3.83.35-1.34a1.988 1.988 0 0 1 2.44-1.42l11.38 3c1.07.28 1.71 1.38 1.42 2.44L20.588 24"
    />
  </svg>
)
export default Choose
