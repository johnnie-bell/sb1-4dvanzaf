import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToBrowse = () => {
    const browseSection = document.getElementById('browse');
    if (browseSection) {
      browseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Holiday background"
          fill
          className="object-cover"
          priority
          unoptimized
          onError={(e) => {
            // Fallback to Unsplash image
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          {t('heroTitle')}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          {t('heroSubtitle')}
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90"
          onClick={scrollToBrowse}
        >
          {t('browseItems')}
        </Button>
      </div>
    </section>
  );
}