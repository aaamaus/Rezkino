const Loader = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <path fill="#FFF" stroke="#FFF" strokeWidth={3} d="M25 85h30v30H25z">
      <animate
        attributeName="opacity"
        begin={-0.4}
        calcMode="spline"
        dur={2}
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="1;0;1;"
      />
    </path>
    <path fill="#FFF" stroke="#FFF" strokeWidth={3} d="M85 85h30v30H85z">
      <animate
        attributeName="opacity"
        begin={-0.2}
        calcMode="spline"
        dur={2}
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="1;0;1;"
      />
    </path>
    <path fill="#FFF" stroke="#FFF" strokeWidth={3} d="M145 85h30v30h-30z">
      <animate
        attributeName="opacity"
        begin={0}
        calcMode="spline"
        dur={2}
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="1;0;1;"
      />
    </path>
  </svg>
)
export default Loader
