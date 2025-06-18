export default function MapPin() {
  return (
    <svg
      width='32'
      height='43'
      viewBox='0 0 24 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Drop shadow filter */}
      <defs>
        <filter
          id='dropShadow'
          x='-20%'
          y='-20%'
          width='140%'
          height='140%'
          filterUnits='objectBoundingBox'
        >
          <feGaussianBlur in='SourceAlpha' stdDeviation='2' />
          <feOffset dx='0' dy='2' result='offset' />
          <feFlood floodColor='rgba(0,0,0,0.3)' />
          <feComposite in2='offset' operator='in' />
          <feMerge>
            <feMergeNode />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>

        {/* Mask for creating the cutout */}
        <mask id='pinMask'>
          <rect width='24' height='32' fill='white' />
          <circle cx='12' cy='12' r='4' fill='black' />
        </mask>
      </defs>

      {/* Pin with circular cutout and drop shadow */}
      <g filter='url(#dropShadow)'>
        <path
          d='M12 0C5.373 0 0 5.373 0 12C0 18.627 12 32 12 32C12 32 24 18.627 24 12C24 5.373 18.627 0 12 0Z'
          fill='#727272'
          mask='url(#pinMask)'
        />
      </g>
    </svg>
  );
}
