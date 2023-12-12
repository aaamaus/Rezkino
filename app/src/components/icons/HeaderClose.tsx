interface IProps {
  stroke?: string;
}

const HeaderClose = ({ stroke }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
  >
    <path
      stroke={stroke ? stroke : "#98989E"}
      strokeLinecap="round"
      strokeWidth={2}
      d="M25 25 1 1m24 0L1 25"
    />
  </svg>
)
export default HeaderClose
