import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Altus Apollo Men's Grooming Lounge - Premium Barbershop in Costa Mesa"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "#1e2a3a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 120,
              color: "#c9a86c",
              fontWeight: 700,
              fontFamily: "serif",
              marginBottom: 20,
            }}
          >
            AA
          </div>
          <div
            style={{
              fontSize: 56,
              color: "#f8f6f1",
              fontWeight: 600,
              fontFamily: "serif",
              marginBottom: 16,
              letterSpacing: "0.05em",
            }}
          >
            ALTUS APOLLO
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#c9a86c",
              fontWeight: 500,
              letterSpacing: "0.2em",
              marginBottom: 40,
            }}
          >
            MEN&apos;S GROOMING LOUNGE
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#f8f6f1",
              opacity: 0.8,
            }}
          >
            Premium Barbershop in Costa Mesa, CA
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
