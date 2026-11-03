import './globals.css';
import SiteShell from '@/components/SiteShell';
import { buildMetadata, DEFAULT_DESCRIPTION } from '@/helpers/seo';

export const metadata = buildMetadata({
  title: 'Akseizer Design Group',
  description: DEFAULT_DESCRIPTION,
  path: '/',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className='relative min-h-screen select-none'>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
