import { Language } from './i18n';

export type CategoryKey = 'BEACH' | 'SPORTS' | 'BABY' | 'MOBILITY';

export const CATEGORY_META: Record<CategoryKey, { image: string }> = {
  BEACH: { image: '/categories/beach.jpg' },
  SPORTS: { image: '/categories/sports.jpg' },
  BABY: { image: '/categories/baby.jpg' },
  MOBILITY: { image: '/categories/mobility.jpg' },
};

export const getCategoryLabel = (category: CategoryKey, language: Language): string => {
  const labels = {
    en: {
      BEACH: 'Beach',
      SPORTS: 'Sports',
      BABY: 'Baby',
      MOBILITY: 'Mobility'
    },
    es: {
      BEACH: 'Playa',
      SPORTS: 'Deportes',
      BABY: 'Bebé',
      MOBILITY: 'Movilidad'
    },
    fr: {
      BEACH: 'Plage',
      SPORTS: 'Sports',
      BABY: 'Bébé',
      MOBILITY: 'Mobilité'
    },
    nl: {
      BEACH: 'Strand',
      SPORTS: 'Sport',
      BABY: 'Baby',
      MOBILITY: 'Mobiliteit'
    }
  };
  return labels[language][category];
};