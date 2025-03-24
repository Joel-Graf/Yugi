"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import { WebSocketProvider } from "./contexts/WebSocketContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WebSocketProvider>
      <Provider store={store}>
        <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable}`}
        >
          <body>{children}</body>
        </html>
      </Provider>
    </WebSocketProvider>
  );
}
