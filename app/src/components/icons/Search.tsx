interface IProps {
  stroke?: string;
}

const Search = ({ stroke }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
  >
    <path
      stroke={stroke ? stroke : "#98989E"}
      strokeLinecap="round"
      strokeWidth={2}
      d="m29 29-6.61-6.623L29 29Zm-2.947-15.474a12.526 12.526 0 1 1-25.053 0 12.526 12.526 0 0 1 25.053 0v0Z"
    />
  </svg>
)
export default Search
