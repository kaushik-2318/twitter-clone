import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={geistSans.className}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId="308205657916-r8dful555m5dp035po8ef58ij05sqfj4.apps.googleusercontent.com">
          <Component {...pageProps} />
          <Toaster />
          <ReactQueryDevtools/>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </div>
  )
}
