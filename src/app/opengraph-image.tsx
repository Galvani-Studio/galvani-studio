import { ImageResponse } from "next/og";
export const alt = "Galvani Studio — Estratégia, design e engenharia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#090D16",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 6 }}>GALVANI STUDIO</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          fontWeight: 700,
          letterSpacing: -3,
        }}
      >
        <span>Estratégia. Design.</span>
        <span style={{ color: "#E2E8F0" }}>Engenharia de Software.</span>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#C0CADA" }}>
        Presença com propósito. Operação com autonomia.
      </div>
    </div>,
    size,
  );
}
