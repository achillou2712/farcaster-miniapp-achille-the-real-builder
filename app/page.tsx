import App from '@components/pages/app'
import { APP_URL } from '@lib/constants'
import type { Metadata } from 'next'

const frame = {
  version: 'next',
  imageUrl: `${APP_URL}/images/feed.png`,
  button: {
    title: 'Open MiniApp Based Prediction',
    action: {
      type: 'launch_frame',
      name: 'MiniApp Based Predictions — by Achille',
      url: APP_URL,
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: '#f7f7f7',
    },
  },
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'MiniApp Based Predictions — by Achille',
    openGraph: {
      title: 'MiniApp Based Predictions — by Achille',
      description: 'A Farcaster miniapp on Base to send 0.0001 ETH with a Yes/No message.',
    },
    other: {
      'fc:frame': JSON.stringify(frame),
    },
  }
}

export default function Home() {
  return <App />
}
