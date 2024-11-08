import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js 14 SSG and ISR Examples',
  description: 'Examples of SSG and ISR in Next.js 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
