import 'server-only'

const dictionaries = {
    en: () => import('./dictoinaries/en.json').then((module) => module.default),
    bn: () => import('./dictoinaries/bn.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()