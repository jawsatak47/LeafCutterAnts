import { useState, useEffect } from "react";

/* 1. CONSTANTS & STYLES */
const C = {
  bg: "#0d1208",
  bg2: "#111a0a",
  bg3: "#152010",
  greenDeep: "#1a3a0f",
  greenMid: "#2d6a1a",
  greenBright: "#4caf50",
  greenNeon: "#7fff50",
  amber: "#d4a017",
  amberLight: "#f0c040",
  cream: "#f4f0e0",
  creamDim: "#c8bfa0",
  text: "#e8e2d0",
  textDim: "#a09880",
  border: "rgba(76,175,80,0.18)",
  borderBright: "rgba(76,175,80,0.5)",
  divider: "rgba(212,160,23,0.25)",
};

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const SERIF = "'Source Serif 4', Georgia, serif";
const MONO = "'JetBrains Mono', monospace";

/* 2. SHARED TOOLS (Must stay OUTSIDE the main report) */

function SectionLabel({ num, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
      <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: C.greenBright }}>
        {num} — {children}
      </span>
      <div style={{ flex: 1, height: 1, background: C.border }} />
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(30px,4vw,50px)", fontWeight: 700, color: C.cream, lineHeight: 1.1, marginBottom: 28, letterSpacing: "-0.5px" }}>
      {children}
    </h2>
  );
}

function Lead({ children }) {
  return (
    <p style={{ fontSize: 19, color: C.creamDim, fontStyle: "italic", fontWeight: 300, marginBottom: 28, lineHeight: 1.7, borderLeft: `3px solid ${C.amber}`, paddingLeft: 20 }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${C.divider},transparent)`, margin: "60px 0" }} />;
}

function PullQuote({ quote, cite }) {
  return (
    <div style={{ margin: "40px 0", padding: "28px 36px", borderTop: `2px solid ${C.amber}`, borderBottom: `2px solid ${C.amber}` }}>
      <p style={{ fontFamily: PLAYFAIR, fontSize: "clamp(18px,2.2vw,26px)", fontStyle: "italic", color: C.cream, lineHeight: 1.4, textAlign: "center", margin: 0 }}>
        "{quote}"
      </p>
      {cite && (
        <cite style={{ display: "block", textAlign: "center", marginTop: 14, fontFamily: MONO, fontSize: 10, letterSpacing: 2, color: C.textDim, textTransform: "uppercase", fontStyle: "normal" }}>
          — {cite}
        </cite>
      )}
    </div>
  );
}

/* 3. THE MAIN REPORT */
export default function LeafCutterAntReport() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.background = C.bg;
  }, []);

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: SERIF, fontWeight: 300, lineHeight: 1.75, padding: "60px 20px" }}>
      <main style={{ maxWidth: 800, margin: "0 auto" }}>
        
        <SectionLabel num="01">Overview</SectionLabel>
        <SectionTitle>The Agricultural Architects</SectionTitle>
        <Lead>Leafcutter ants are the world's first farmers, cultivating massive fungus gardens deep underground.</Lead>
        
        <p>They do not eat the leaves they harvest. Instead, they use them as fertilizer to grow a specific type of fungus, which serves as their sole food source.</p>

        <Divider />

        <PullQuote 
          quote="These ants have maintained a mutualistic fungal crop that has remained genetically distinct from wild relatives for 50 million years." 
          cite="Evolutionary Biology of Attini" 
        />

        <p>A single colony can contain millions of individuals, moving more earth than almost any other creature.</p>

      </main>
    </div>
  );
}
