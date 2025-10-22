import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
  // TODO: Add your own account association
"accountAssociation": {
"header": "eyJmaWQiOjkwMjQzOCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDliQ0U2YmY4ZjZCQTYxMzY1YThDMmRDNTQ5YWQwOGI4MDhjNzZjNUUifQ",
"payload": "eyJkb21haW4iOiJmYXJjYXN0ZXItbWluaWFwcC1ieS1hY2hpbGxlYnVpbGRlci52ZXJjZWwuYXBwIn0",
"signature": "80Ntm35VVkX1f7+pKhA9BD/k9ojmlwH8QHuFuvIWVvtLPMQJmlAxEUOjnaczD5uoLBYLWsQd2f4fKqUTYgKoTRs="
},
"frame": {
"version": "1",
"name": "MiniApp Based Predictions",
"iconUrl": "https://farcaster-miniapp-by-achillebuilder.vercel.app/icon.png",
"homeUrl": "https://farcaster-miniapp-by-achillebuilder.vercel.app",
"imageUrl": "https://farcaster-miniapp-by-achillebuilder.vercel.app/image.png",
"buttonTitle": "Check this out",
"splashImageUrl": "https://farcaster-miniapp-by-achillebuilder.vercel.app/splash.png",
"splashBackgroundColor": "#eeccff",
"webhookUrl": "https://farcaster-miniapp-by-achillebuilder.vercel.app/api/webhook"
}
}

  return NextResponse.json(farcasterConfig);
}
