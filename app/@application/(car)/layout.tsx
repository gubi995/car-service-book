import Link from 'next/link';

import { getCars } from '@/app/api/cars/operations';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cars = await getCars();

  return (
    <>
      <header className="border border-b-cyan-600 px-7 py-4">
        <Link href="/">
          <h1 className="text-xl font-black">Car service book</h1>
        </Link>
      </header>
      <main>
        <div className="grid h-[calc(100vh-62px)] grid-cols-[250px_auto]">
          <aside className="sticky h-full border-r border-r-cyan-600 px-8 py-5">
            <h2 className="mb-2 font-semibold">Registered cars</h2>
            <nav className="flex flex-col gap-10">
              <ul>
                {cars.length ? (
                  cars.map(({ plateNumber, make, model, chassisNumber }) => (
                    <li key={plateNumber}>
                      <Link href={`/cars/${chassisNumber}`}>
                        <span className="text-sm">
                          {make} {model} <span>({plateNumber})</span>
                        </span>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <span className="text-sm">No car registered yet.</span>
                  </li>
                )}
              </ul>
              <Link
                href="/cars/new"
                className="mx-[-2rem] flex justify-center bg-cyan-900 p-3 text-sm text-cyan-200"
              >
                Add a new car +
              </Link>
            </nav>
          </aside>
          <section
            style={{ scrollbarGutter: 'stable' }}
            className="overflow-auto"
          >
            {children}
          </section>
        </div>
      </main>
    </>
  );
}
