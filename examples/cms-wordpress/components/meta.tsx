import { Metadata } from 'next'
import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export const metadata: Metadata = {
  icons: {
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
  },
  manifest: '/favicon/site.webmanifest',
  themeColor: '#000',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: HOME_OG_IMAGE_URL,
  },
}

export default function Meta() {
  return (
    <Head>
      {/* this tag can be removed*/}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      {/* this tag can be removed*/}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      {/* this tag can be removed*/}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      {/* this tag can be removed*/}
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      {/* this tag can be removed*/}
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      {/* this tag can be removed*/}
      <meta name="theme-color" content="#000" />
      {/* this tag can be removed*/}
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      {/* this tag can be removed*/}
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
