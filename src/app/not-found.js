import Link from 'next/link';

export const metadata = {
  title: "Pagina non trovata | Futura Company",
  description: "La pagina che stai cercando non esiste o è stata rimossa.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Pagina non trovata</h2>
      <p className="mb-8 max-w-md">
        La pagina che stai cercando non esiste o è stata rimossa.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Torna alla Home
      </Link>
    </div>
  );
} 