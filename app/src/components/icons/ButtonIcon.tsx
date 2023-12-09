interface IProps {
  stroke?: boolean;
}

const ButtonIcon = ({ stroke }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={15}
    fill="none"
  >
    <path
      stroke={stroke ? "#000" : "#FEFEFE"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.043 5.28V14l10-6.354L1.043 1"
    />
  </svg>
)
export default ButtonIcon;
