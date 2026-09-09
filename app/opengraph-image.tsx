import { ImageResponse } from "next/og";

import { Bio } from "@/data/constants";
import { headline, headlineLines, site } from "@/lib/site";

export const alt = `${Bio.name} — ${headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Satori has no access to the fonts next/font loads for the page, so the card
 * would otherwise render the name in a generic fallback at a single weight —
 * noticeably weaker than the site it represents.
 *
 * The `User-Agent` is what makes Google serve TrueType rather than WOFF2, which
 * Satori cannot parse. A failure here degrades to the fallback font rather than
 * breaking the build, so a build without network access still produces a card.
 */
async function loadArchivo(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Archivo:wght@${weight}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:10.0)" } },
    ).then((response) => response.text());

    const url = css.match(/src:\s*url\((https:[^)]+)\)\s*format\('truetype'\)/)
      ?.[1];
    if (!url) return null;

    return await fetch(url).then((response) => response.arrayBuffer());
  } catch {
    return null;
  }
}

/**
 * Rendered once at build time and reused for Open Graph and Twitter cards.
 * Same system as the site: petrol ground, one brass accent, the rail down the
 * left, no gradient wash.
 */
export default async function OpenGraphImage() {
  const [bold, regular] = await Promise.all([
    loadArchivo(700),
    loadArchivo(400),
  ]);

  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 700;
    style: "normal";
  }[] = [];
  if (bold) fonts.push({ name: "Archivo", data: bold, weight: 700, style: "normal" });
  if (regular)
    fonts.push({ name: "Archivo", data: regular, weight: 400, style: "normal" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0e1418",
          color: "#edf0f1",
          fontFamily: "Archivo, sans-serif",
          padding: "88px 80px",
        }}
      >
        {/* The signal rail, with its junction. */}
        <div
          style={{
            display: "flex",
            width: 1,
            backgroundColor: "#8a6a32",
            marginRight: 56,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 88,
            width: 12,
            height: 12,
            backgroundColor: "#c79a4b",
            transform: "rotate(45deg) translate(-4px, -4px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Each of these holds a single text node: Satori requires an
                explicit display on any element with more than one child. */}
            <div style={{ fontSize: 26, color: "#8c9aa1" }}>
              {`${Bio.name} — ${site.jobTitle}`}
            </div>
            <div
              style={{
                fontSize: 66,
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: -1.9,
                marginTop: 22,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {headlineLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <div style={{ fontSize: 28, color: "#c79a4b", marginTop: 26 }}>
              {Bio.availability}
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 24, color: "#7a8a92" }}>
            {site.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size, ...(fonts.length > 0 ? { fonts } : {}) },
  );
}
