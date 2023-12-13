interface IProps {
  stroke?: string;
}

const Likes = ({ stroke }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={26}
    fill="none"
  >
    <path
      stroke={stroke ? stroke : "#888"}
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 25V1h18v24l-9-4.428L1 25Z"
    />
  </svg>
)
export default Likes
