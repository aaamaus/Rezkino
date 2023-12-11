interface IProps {
  stroke: boolean
}

const Saved = ({ stroke }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={26}
    fill={stroke ? "#fff" : "none"}
  >
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 25V1h18v24l-9-4.428L1 25Z"
    />
    <path
      stroke={stroke ? "black" : "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.965 8v6M13 11.025H7"
    />
  </svg>
)
export default Saved;
