import '@/styles/globals.scss'
import { Metadata, Viewport } from 'next'
 
export const metadata: Metadata = {
  title: {
    template: 'StanR - %s',
    default: 'StanR',
  },
  description: 'Home of StanR.',
  authors: [{ name: 'StanR', url: 'https://stanr.info' }],
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: 'black',
  colorScheme: 'dark'
}

function RootLayout({children,}: {children: React.ReactNode}) {
  return (

    <html lang="en">
      <head>
        <script defer src="https://umami.stanr.info/script.js" data-website-id="8010fbe8-1caf-4718-a671-cd926d5e97ec"></script>
      </head>
      <body>
        <div className="main">
          {children}
        </div>
      </body>
    </html>
    )
}

export default RootLayout;
