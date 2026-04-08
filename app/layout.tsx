import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Daniel Bogachevsky | Portfolio',
    template: 'Daniel Bogachevsky | %s',
  },
  description:
    "Daniel bogachevsky is third year student  at the technion",
  keywords: [
    'daniel bogachevsky',
    'daniel',
    'bogachevsky',
    'developer portfolio',
    'daniel developer',
    'daniel bogachevsky portfolio',
    'vscode-portfolio',
  ],
  openGraph: {
    title: "Daniel bogachevsky's Portfolio",
    description:
      "A third year computer science student at the technion.",
// TODO: update metadata:
    images: ['https://imgur.com/4zi5KkQ.png'],
    url: 'https://bogachevsky.com/',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
