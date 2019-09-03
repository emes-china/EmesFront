import { lang_zh } from './zh';

export function customTranslate(template, replacements) {
  replacements = replacements || {};

  // Translate
  template = lang_zh[template] || template;

  // Replace
  return template.replace(/{([^}]+)}/g, (_, key) => {
    return replacements[key] || '{' + key + '}';
  });
}
