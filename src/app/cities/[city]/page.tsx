import { Metadata } from "next";
import { notFound } from "next/navigation";
import { targetCities, targetServices } from "@/data/seo";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { H1, H2, BodyLg, BodyMd } from "@/components/ui/Typography";
import { Card, CardContent } from "@/components/ui/Card";
import { MapPin, CheckCircle2 } from "lucide-react";
import contentData from "@/data/content.json";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return targetCities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const city = targetCities.find((c) => c.slug === resolvedParams.city);
  
  if (!city) return {};

  return {
    title: `Best Home Services in ${city.name} | Fixora`,
    description: city.description,
    openGraph: {
      title: `Best Home Services in ${city.name} | Fixora`,
      description: city.description,
      url: `${contentData.site.url}/cities/${city.slug}`,
      siteName: contentData.site.name,
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `${contentData.site.url}/cities/${city.slug}`,
    }
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const resolvedParams = await params;
  const city = targetCities.find((c) => c.slug === resolvedParams.city);

  if (!city) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Fixora ${city.name}`,
    "description": city.description,
    "url": `${contentData.site.url}/cities/${city.slug}`,
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressCountry": "IN"
    },
    "provider": {
      "@type": "Organization",
      "name": "Fixora",
      "url": contentData.site.url
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-background min-h-screen">
        <Section className="bg-primary/5 pt-24 pb-16">
          <Container>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Serving {city.name}</span>
              </div>
              <H1 className="mb-6">Top-Rated Home Services in {city.name}</H1>
              <BodyLg className="text-muted-foreground">{city.description}</BodyLg>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="mb-12 text-center">
              <H2>Our Services in {city.name}</H2>
              <BodyMd className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Book verified professionals for all your home maintenance needs across {city.name}.
              </BodyMd>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetServices.map((service) => (
                <Card key={service.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.name} in {city.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
