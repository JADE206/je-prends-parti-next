import Link from 'next/link';

export default function Fild'actualité() {
  return (
    <main style={ padding: '20px', fontFamily: 'Arial, sans-serif' }>
      <h1>Fil d'actualité</h1>
      <p>Contenu de la page « Fil d'actualité » à venir...</p>
      <p><Link href='/' style={ color: '#1e88e5' }>← Retour à l'accueil</Link></p>
    </main>
  );
}
