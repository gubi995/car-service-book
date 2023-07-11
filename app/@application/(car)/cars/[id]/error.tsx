'use client';

export default function CarDetailError({ error }: { error: Error }) {
  return (
    <div className="mx-8 my-5">
      <h2 className="mb-3 text-xl font-semibold">Something went wrong!</h2>
      <span className="text-sm text-cyan-800">{error.message}</span>
    </div>
  );
}
