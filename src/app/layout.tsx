import '@/styles/globals.scss'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    template: 'StanR - %s',
    default: 'StanR',
  },
  description: 'Home of StanR.',
  themeColor: '#000000',
  authors: [{ name: 'StanR', url: 'https://stanr.info' }],
  colorScheme: 'dark',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

function RootLayout({children,}: {children: React.ReactNode}) {
  return (

    <html lang="en">
      <body>
        <div className="main">
          {children}
        </div>
      </body>
    </html>
    )
}

export default RootLayout;
