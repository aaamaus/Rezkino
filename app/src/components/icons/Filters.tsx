interface IProps {
  stroke?: string;
}

const Filters = ({ stroke }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={20}
    fill="none"
  >
    <path
      stroke={stroke ? stroke : "#fff"}
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 4.59h6.222M29 4.59H13.444M1 15.41h18.667m9.333 0h-3.111M10.333 7.682a3.101 3.101 0 0 0 3.111-3.091 3.101 3.101 0 0 0-3.11-3.091 3.101 3.101 0 0 0-3.112 3.09 3.101 3.101 0 0 0 3.111 3.092ZM22.778 18.5a3.101 3.101 0 0 0 3.111-3.09 3.101 3.101 0 0 0-3.111-3.092 3.101 3.101 0 0 0-3.111 3.091 3.101 3.101 0 0 0 3.11 3.091Z"
    />
  </svg>
)
export default Filters
