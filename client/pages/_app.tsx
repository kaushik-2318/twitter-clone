import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="308205657916-r8dful555m5dp035po8ef58ij05sqfj4.apps.googleusercontent.com">
      <div className={geistSans.className}>
        <Component {...pageProps} />
      </div>
    </GoogleOAuthProvider>
  )
}
