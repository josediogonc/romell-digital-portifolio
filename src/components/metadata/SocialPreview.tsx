import { siteConfig } from "@/content/site";

export const socialPreviewAlt = `${siteConfig.name} — ${siteConfig.role} in ${siteConfig.location}`;

export function SocialPreview() {
  const displayUrl = new URL(siteConfig.url).hostname.toUpperCase();
  return (
    <div
      style={{
        alignItems: "stretch",
        background: "#0b0b0b",
        color: "#f4f1ea",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px 72px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          borderBottom: "1px solid rgba(244, 241, 234, 0.22)",
          color: "#a3a19c",
          display: "flex",
          fontSize: 18,
          justifyContent: "space-between",
          letterSpacing: "0.12em",
          paddingBottom: 24,
          textTransform: "uppercase",
        }}
      >
        <span>Independent production crew</span>
        <span>{siteConfig.location}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: "-0.07em",
            lineHeight: 0.88,
          }}
        >
          ROMELL
        </span>
        <span
          style={{
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: "-0.07em",
            lineHeight: 0.88,
          }}
        >
          TABOSA
        </span>
      </div>
      <div
        style={{
          alignItems: "flex-end",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "#d5d0c4", fontSize: 32, letterSpacing: "-0.03em" }}>
          {siteConfig.role}
        </span>
        <span style={{ color: "#a3a19c", fontSize: 18, letterSpacing: "0.08em" }}>
          {displayUrl}
        </span>
      </div>
    </div>
  );
}
