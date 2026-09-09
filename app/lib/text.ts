/**
 * Splits a prose blob into sentences.
 *
 * The inputs are the static strings in data/constants.ts, none of which contain
 * abbreviations, decimals or ellipses, so a lookbehind on the full stop is
 * enough — this is not a general-purpose sentence tokeniser and should not be
 * pointed at arbitrary text.
 */
export function toSentences(text: string): string[] {
  return text
    .split(/(?<=\.)\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}
