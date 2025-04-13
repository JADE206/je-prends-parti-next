import Link from 'next/link';

export default function Revuedepresse() {
  return (
    <main style={ padding: '20px', fontFamily: 'Arial, sans-serif' }>
      <h1>Revue de presse</h1>
      <p>Contenu de la page « Revue de presse » à venir...</p>
      <p><Link href='/' style={ color: '#1e88e5' }>← Retour à l'accueil</Link></p>
    </main>
  );
}
