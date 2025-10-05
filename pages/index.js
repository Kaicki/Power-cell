export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#000",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
    }}>
      <h1>Power Cell ⚡</h1>
      <p>Sistema de Orçamento Online</p>
      <a href="/orcamento" style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#00ff88",
        color: "#000",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold"
      }}>
        Solicitar Orçamento
      </a>
    </div>
  );
}
