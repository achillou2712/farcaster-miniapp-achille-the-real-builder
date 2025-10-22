import App from '@components/pages/app'
import { APP_URL } from '@lib/constants'
import type { Metadata } from 'next'

const frame = {
  version: 'next',
  imageUrl: `${APP_URL}/images/feed.png`,
  button: {
    title: 'Launch Template',
    action: {
      type: 'launch_frame',
      name: 'Achille Farcaster MiniApp',
      url: APP_URL,
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: '#f7f7f7',
    },
  },
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Achille Farcaster MiniApp',
    openGraph: {
      title: 'Achille Farcaster MiniApp',
      description: 'A mini-app on Farcaster',
    },
    other: {
      'fc:frame': JSON.stringify(frame),
    },
  }
}

export default function Home() {
  return <App />
}
