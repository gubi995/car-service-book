import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Car service book',
  description: 'Application to track services they made on your car.',
};

export default async function RootLayout({
  auth,
  application,
}: {
  auth: React.ReactNode;
  application: React.ReactNode;
}) {
  const isLoggedIn = true;

  return (
    <html lang="en">
      <body className={poppins.className}>
        {isLoggedIn ? application : auth}
      </body>
    </html>
  );
}
