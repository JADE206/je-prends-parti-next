export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1e88e5",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "20px"
    }}>
      <img src="/logo.png" alt="Je Prends Parti" style={{ width: "140px", marginBottom: "20px" }} />
      <h1>Bienvenue sur Je Prends Parti</h1>
      <p style={{ textAlign: "center", maxWidth: "300px" }}>
        Plateforme citoyenne d’échange avec les partis politiques : questions, réponses, cartographie des idées, sondages.
      </p>
    </main>
  );
}
