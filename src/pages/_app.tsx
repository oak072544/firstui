import type { AppProps } from 'next/app'
import { SidebarProvider } from "@/context/SidebarContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
    );
}
