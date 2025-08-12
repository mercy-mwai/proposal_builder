import type React from "react"
import type { Metadata } from "next"

import "../styles/global.css";

export const metadata: Metadata = {
  title: "Proposal Builder", 
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        
      </body>
    </html>
  );
}