import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-white">
      <div className="w-20 h-20 rounded-full bg-awabel-light flex items-center justify-center mb-6">
        <span className="w-10 h-10 flex items-center justify-center text-awabel-primary">
          <i className="ri-error-warning-line text-2xl"></i>
        </span>
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-awabel-primary font-nunito mb-2">404</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-awabel-dark mt-4">Page non trouvée</h2>
      <p className="mt-3 text-base text-gray-500 max-w-md">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-awabel-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-awabel-dark transition-colors"
      >
        <span className="w-4 h-4 flex items-center justify-center">
          <i className="ri-arrow-left-line text-sm"></i>
        </span>
        <span className="whitespace-nowrap">Retour à l'accueil</span>
      </Link>
    </div>
  );
}