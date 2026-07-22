import { Metadata } from "next";
import { blogPosts } from "@/data/seo";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { H1, BodyLg } from "@/components/ui/Typography";
import { Card, CardContent } from "@/components/ui/Card";
import contentData from "@/data/content.json";

export const metadata: Metadata = {
  title: "Blog & Home Maintenance Tips | Fixora",
  description: "Read the latest tips, guides, and advice on home maintenance, electrical safety, plumbing, and cleaning.",
  openGraph: {
    title: "Blog & Home Maintenance Tips | Fixora",
    description: "Read the latest tips, guides, and advice on home maintenance, electrical safety, plumbing, and cleaning.",
    url: `${contentData.site.url}/blog`,
    siteName: contentData.site.name,
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: `${contentData.site.url}/blog`,
  }
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Fixora Home Services Blog",
    "url": `${contentData.site.url}/blog`,
    "description": metadata.description,
    "publisher": {
      "@type": "Organization",
      "name": "Fixora",
      "logo": {
        "@type": "ImageObject",
        "url": `${contentData.site.url}/icon.svg`
      }
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
              <H1 className="mb-6">Home Maintenance Tips & Guides</H1>
              <BodyLg className="text-muted-foreground">
                Expert advice from Fixora professionals to keep your home running smoothly.
              </BodyLg>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <a href={`/blog/${post.slug}`} key={post.id} className="block group">
                  <Card className="h-full hover:shadow-lg transition-shadow border-border hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {post.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground pt-4 border-t border-border mt-auto">
                        <span>{new Date(post.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>{post.author}</span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
