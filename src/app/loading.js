export default function Loading() {
  return (
    <div className='w-full max-w-7xl mx-auto relative flex flex-col gap-16 min-h-screen pt-40'>
      <div className='animate-pulse'>
        {/* Hero placeholder */}
        <div className='h-96 bg-gray-200 rounded-lg mb-16'></div>

        {/* Text placeholder */}
        <div className='space-y-4 mb-16'>
          <div className='h-4 bg-gray-200 rounded w-3/4'></div>
          <div className='h-4 bg-gray-200 rounded w-1/2'></div>
        </div>

        {/* Departments placeholder */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='h-64 bg-gray-200 rounded-lg'></div>
          ))}
        </div>

        {/* Featured placeholder */}
        <div className='h-96 bg-gray-200 rounded-lg mb-16'></div>

        {/* Visit placeholder */}
        <div className='h-64 bg-gray-200 rounded-lg'></div>
      </div>
    </div>
  );
}
