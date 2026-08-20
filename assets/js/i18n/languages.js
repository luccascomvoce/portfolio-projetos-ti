/**
 * Language Registry — Portfólio Luccas
 *
 * Cadastro central dos idiomas suportados. Para adicionar um novo idioma:
 *   1. Crie `assets/js/i18n/translations/<code>.js`;
 *   2. Registre-o neste array;
 *   3. (Opcional) adicione o mapeamento de `og:locale` em `i18n.js`.
 *
 * Nada mais precisa ser alterado no restante da aplicação.
 */

export const LANGUAGES = [
  { code: 'pt-BR', name: 'Português (Brasil)', nativeName: 'Português', short: 'PT', dir: 'ltr' },
  { code: 'en', name: 'English', nativeName: 'English', short: 'EN', dir: 'ltr' },
  { code: 'es', name: 'Español', nativeName: 'Español', short: 'ES', dir: 'ltr' },
];

export const DEFAULT_LANG = 'pt-BR'; // fonte de verdade do conteúdo e fallback de chaves
export const FALLBACK_LANG = 'en';   // idioma exibido quando nada é detectado