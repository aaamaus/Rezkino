interface IProps {
  stroke?: string;
}

const Top = ({ stroke }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
  >
    <path
      stroke={stroke ? stroke : "#A2A2A8"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.704 1.886c.448-1.181 2.143-1.181 2.593 0l2.897 8.027a1.386 1.386 0 0 0 1.297.887h7.121c1.316 0 1.89 1.637.856 2.44L23.4 17.8a1.355 1.355 0 0 0-.451 1.528l1.85 7.844c.451 1.26-1.007 2.342-2.11 1.566l-6.884-4.367a1.4 1.4 0 0 0-1.61 0l-6.883 4.367c-1.102.776-2.562-.308-2.111-1.566l1.85-7.844a1.355 1.355 0 0 0-.45-1.529l-5.068-4.56c-1.036-.802-.46-2.44.854-2.44h7.121a1.385 1.385 0 0 0 1.297-.886l2.897-8.027h.002Z"
    />
  </svg>
)
export default Top
