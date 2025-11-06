// Ambient module declaration to help TypeScript resolve the translations module.
// This avoids TS2307 diagnostics in editors that require explicit type declarations.
declare module './translations' {
  export const translations: {
    zh: Record<string, any>
    en: Record<string, any>
  }
  export type Translations = typeof translations
}