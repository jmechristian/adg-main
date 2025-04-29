const StudioHero = () => {
  return (
    <div
      className='w-full h-[80vh] bg-black bg-center relative bg-no-repeat bg-cover flex flex-col items-center'
      style={{
        backgroundImage:
          "url('https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/studio-page-hero.webp')",
      }}
    >
      <div className='w-full h-40 bg-gradient-to-b from-black to-transparent absolute top-0 left-0'></div>
      <div className='w-full max-w-6xl mx-auto z-20 flex-1 flex items-center justify-center'>
        <h1 className='text-white text-6xl font-brand font-light text-center leading-tight select-none'>
          Collaboration drives our design,{' '}
          <span className='italic text-brand-peach'>
            working together to create exceptional spaces.
          </span>
        </h1>
      </div>

      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-10'></div>
    </div>
  );
};

export default StudioHero;
