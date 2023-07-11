import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

import { getCars } from '@/app/api/cars/operations';

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
  children,
}: {
  children: React.ReactNode;
}) {
  const cars = await getCars();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="border border-b-cyan-600 px-7 py-4">
          <h1 className="text-xl font-black">Car service book</h1>
        </header>
        <main>
          <div className="grid grid-cols-[250px_auto]">
            <aside className="h-full border-r border-r-cyan-600 px-8 py-5">
              <h2 className="mb-2 font-semibold">Registered cars</h2>
              <nav className="flex flex-col gap-10">
                <ul>
                  {cars.map(({ plateNumber, brand, type, chassisNumber }) => (
                    <li key={plateNumber}>
                      <Link href={`/cars/${chassisNumber}`}>
                        <span className="text-sm">
                          {brand} {type} <span>({plateNumber})</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={'#'}
                  className="mx-[-2rem] flex justify-center  bg-cyan-900 p-3 text-sm text-cyan-200"
                >
                  Add a new car +
                </Link>
              </nav>
            </aside>
            <section>{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}
