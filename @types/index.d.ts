/**
 * @param {TemplateStringsArray} strs
 * @param {any[]} substs
 *
 * @return {RegExp}
 */
export function re(strs: TemplateStringsArray, ...substs: any[]): RegExp;
export function transformRaw(str: string): string;
export function quoteText(text: string): string;
