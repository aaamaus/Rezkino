interface IProps {
  stroke?: string;
}

const Likes = ({ stroke }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={26}
    fill="none"
  >
    <path
      stroke={stroke ? stroke : "#A2A2A8"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.7 1C4.448 1 1 4.443 1 8.691 1 16.381 10.1 23.374 15 25c4.9-1.626 14-8.618 14-16.309C29 4.443 25.552 1 21.3 1A7.693 7.693 0 0 0 15 4.268 7.688 7.688 0 0 0 8.7 1Z"
    />
  </svg>
)
export default Likes
