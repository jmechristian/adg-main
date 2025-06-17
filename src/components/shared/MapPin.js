export default function MapPin() {
  return (
    <svg
      width='32'
      height='43'
      viewBox='0 0 24 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        {/* Pattern for the pin texture */}
        <pattern
          id='pinTexture'
          patternUnits='userSpaceOnUse'
          width='24'
          height='32'
          patternContentUnits='objectBoundingBox'
        >
          <image
            href='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/map-pin.png'
            width='1'
            height='1'
            preserveAspectRatio='xMidYMid slice'
          />
        </pattern>
      </defs>

      {/* Shadow */}
      <ellipse cx='12' cy='30' rx='8' ry='2' fill='rgba(0, 0, 0, 0.3)' />

      {/* Pin with texture */}
      <path
        d='M12 0C5.373 0 0 5.373 0 12C0 18.627 12 32 12 32C12 32 24 18.627 24 12C24 5.373 18.627 0 12 0Z'
        fill='url(#pinTexture)'
      />

      {/* Shadow filter */}
      <defs>
        <filter
          id='shadow'
          x='-4'
          y='-4'
          width='32'
          height='40'
          filterUnits='userSpaceOnUse'
        >
          <feGaussianBlur in='SourceAlpha' stdDeviation='1.5' />
          <feOffset dy='1' />
          <feComposite in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0'
          />
        </filter>
      </defs>
    </svg>
  );
}
