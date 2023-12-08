interface IProps {
  fill: string
}

const Comments = ({ fill }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={30}
    fill={fill ? fill : "none"}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.503 29A14 14 0 1 0 3.06 21.42L1.503 29l7.58-1.556A13.942 13.942 0 0 0 15.503 29Z"
    />
    <path
      stroke={fill ? "#000" : "#fff"}
      strokeLinejoin="round"
      strokeWidth={3}
      d="M10.5 15h.01v.01h-.01V15Zm4.5 0h.01v.01H15V15Zm4.5 0h.01v.01h-.01V15Z"
    />
  </svg>
)

export default Comments;
