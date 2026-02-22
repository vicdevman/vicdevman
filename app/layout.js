
import "./globals.css";

export const metadataBase = new URL("https://vicdevman.dev");

export const metadata = {
  title: "Victor Adeiza | Full-Stack Engineer",
  description:
    "Full-Stack Engineer. I engineer accessible, intelligent experiences for the web • AI • Web3",
  keywords: [
    "Victor Adeiza",
    "Full-Stack Engineer",
    "Software Engineer",
    "AI",
    "Web3",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Victor Adeiza", url: "https://vicdevman.dev" }],
  creator: "Victor Adeiza",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  openGraph: {
    title: "Victor Adeiza | Full-Stack Engineer",
    description:
      "Full-Stack Engineer. I engineer accessible, intelligent experiences for the web • AI • Web3",
    url: "https://vicdevman.dev",
    siteName: "vicdevman",
    images: [
      {
        url: "/vicdevman.webp",
        width: 1200,
        height: 630,
        alt: "Victor Adeiza",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Adeiza | Full-Stack Engineer",
    description:
      "Full-Stack Engineer. I engineer accessible, intelligent experiences for the web • AI • Web3",
    images: ["/vicdevman.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/vicdevman.webp",
    apple: "/vicdevman.webp",
    shortcut: "/vicdevman.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` `}>{children}</body>
    </html>
  );
}
