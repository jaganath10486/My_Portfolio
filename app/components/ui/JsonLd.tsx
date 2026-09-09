import { serializeJsonLd } from "@/lib/structured-data";

/**
 * Renders a locally-built Schema.org payload. The data never comes from user
 * input — see serializeJsonLd for the `<` escaping that keeps it from breaking
 * out of the script element.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
