import { Metadata } from "next";
import { notFound } from "next/navigation";
import { targetServices } from "@/data/seo";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { H1, H2, H3, BodyLg, BodyMd } from "@/components/ui/Typography";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle2, ShieldCheck, Wrench, Star } from "lucide-react";
import contentData from "@/data/content.json";

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateStaticParams() {
  return targetServices.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = targetServices.find((s) => s.slug === resolvedParams.service);
  
  if (!service) return {};

  return {
    title: `Professional ${service.name} Services | Fixora`,
    description: service.description,
    openGraph: {
      title: `Professional ${service.name} Services | Fixora`,
      description: service.description,
      url: `${contentData.site.url}/services/${service.slug}`,
      siteName: contentData.site.name,
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `${contentData.site.url}/services/${service.slug}`,
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = targetServices.find((s) => s.slug === resolvedParams.service);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} Services`,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fixora",
      "image": `${contentData.site.url}/icon.svg`,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "serviceType": service.name,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.name} Services`
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="bg-background min-h-screen">
        <Section className="bg-primary/5 pt-24 pb-16">
          <Container>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-medium">Verified {service.name} Experts</span>
              </div>
              <H1 className="mb-6">Professional {service.name} Services</H1>
              <BodyLg className="text-muted-foreground">{service.description}</BodyLg>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <H2 className="mb-6">Why Choose Fixora for {service.name}?</H2>
                <div className="space-y-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        {idx === 0 ? <ShieldCheck className="w-6 h-6" /> : idx === 1 ? <CheckCircle2 className="w-6 h-6" /> : <Star className="w-6 h-6" />}
                      </div>
                      <div>
                        <H3 className="mb-2">{benefit}</H3>
                        <BodyMd className="text-muted-foreground">
                          We ensure the highest quality standards for {service.name.toLowerCase()} services to provide complete peace of mind.
                        </BodyMd>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-muted rounded-2xl p-8 lg:p-12 border border-border">
                <H2 className="mb-6">Frequently Asked Questions</H2>
                <div className="space-y-6">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx}>
                      <H3 className="text-lg font-bold mb-2">{faq.question}</H3>
                      <BodyMd className="text-muted-foreground">{faq.answer}</BodyMd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
