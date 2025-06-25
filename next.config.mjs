/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['adgadmin170407-dev.s3.us-east-1.amazonaws.com'],
  },
  redirects: async () => {
    return [
      {
        source: '/architecture',
        destination:
          '/projects?department=0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
        permanent: true,
      },
      {
        source: '/interiors',
        destination:
          '/projects?department=0cd75086-b396-4c52-a907-5b52fb6aeedd',
        permanent: true,
      },
      {
        source: '/branding',
        destination:
          '/projects?department=4dfd71af-51a3-4af9-874f-da260e081f08',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
