import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/seo";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { H1, BodyLg } from "@/components/ui/Typography";
import contentData from "@/data/content.json";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) return {};

  return {
    title: `${post.title} | Fixora Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | Fixora Blog`,
      description: post.excerpt,
      url: `${contentData.site.url}/blog/${post.slug}`,
      siteName: contentData.site.name,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `${contentData.site.url}/blog/${post.slug}`,
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fixora",
      "logo": {
        "@type": "ImageObject",
        "url": `${contentData.site.url}/icon.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${contentData.site.url}/blog/${post.slug}`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": contentData.site.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${contentData.site.url}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${contentData.site.url}/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="bg-background min-h-screen">
        <Section className="bg-primary/5 pt-24 pb-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex gap-2 mb-6 flex-wrap">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <H1 className="mb-6">{post.title}</H1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-8">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="max-w-3xl mx-auto">
              <BodyLg className="leading-relaxed text-foreground/80 whitespace-pre-wrap">
                {post.content}
              </BodyLg>
              
              <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
                <a href="/blog" className="text-primary hover:underline font-medium inline-flex items-center gap-2">
                  &larr; Back to all posts
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
