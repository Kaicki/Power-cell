export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}>
      <h1>⚡ PowerCell</h1>
      <p>Assistência técnica e orçamentos rápidos</p>
      <a href="/orcamento" style={{
        marginTop: "20px",
        padding: "12px 24px",
        background: "#00ff88",
        borderRadius: "10px",
        color: "#000",
        textDecoration: "none",
        fontWeight: "bold"
      }}>
        Fazer orçamento
      </a>
    </div>
  );
}
