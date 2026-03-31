# JSON-LD Schema Templates for SEO & AEO

Ready-to-use JSON-LD templates for common content types. Place in `<script type="application/ld+json">` tags in `<head>`.

## Organization Schema

Use on homepage and company pages. Replace placeholders with actual data.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "alternateName": "Short Name or Acronym",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "description": "Brief description of company",
  "sameAs": [
    "https://www.facebook.com/company",
    "https://www.twitter.com/company",
    "https://www.linkedin.com/company/company-name",
    "https://www.instagram.com/company"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "Customer Service",
    "areaServed": ["US", "CA"],
    "availableLanguage": ["en", "es"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "foundingDate": "2020",
  "numberOfEmployees": 50,
  "areaServed": [
    {
      "@type": "City",
      "name": "San Francisco"
    },
    {
      "@type": "Country",
      "name": "United States"
    }
  ]
}
```

---

## LocalBusiness Schema

Use for local businesses (restaurants, services, shops). Include on every page.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "image": "https://example.com/business-photo.jpg",
  "description": "What the business does",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "telephone": "+1-555-123-4567",
  "email": "info@example.com",
  "url": "https://example.com",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "CLOSED"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.7749",
    "longitude": "-122.4194"
  },
  "sameAs": [
    "https://www.facebook.com/business",
    "https://www.yelp.com/biz/business"
  ]
}
```

---

## WebSite Schema with Search Action

Use on homepage. Enables sitelinks search box in Google results.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Site Name",
  "url": "https://example.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

## BreadcrumbList Schema

Use on all pages except homepage. Appears as breadcrumb navigation in results.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Category Name",
      "item": "https://example.com/category"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Subcategory Name",
      "item": "https://example.com/category/subcategory"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Current Page",
      "item": "https://example.com/category/subcategory/page"
    }
  ]
}
```

---

## Article Schema

Use on blog posts, news articles, guides.

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title (Under 110 characters)",
  "description": "Meta description or article summary (150-160 chars)",
  "image": [
    "https://example.com/article-image-1x1.jpg",
    "https://example.com/article-image-4x3.jpg",
    "https://example.com/article-image-16x9.jpg"
  ],
  "datePublished": "2026-03-30",
  "dateModified": "2026-03-28",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://example.com/authors/author-name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Publication Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "mainEntity": {
    "@type": "Article"
  }
}
```

---

## NewsArticle Schema

Use on news content with timely information.

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "News Headline",
  "alternativeHeadline": "Alternative headline for social sharing",
  "description": "Article summary",
  "image": "https://example.com/news-image.jpg",
  "datePublished": "2026-03-30T08:00:00Z",
  "dateModified": "2026-03-30T10:00:00Z",
  "author": {
    "@type": "Person",
    "name": "Journalist Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "News Organization",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png",
      "width": 250,
      "height": 60
    }
  }
}
```

---

## FAQPage Schema

Use for pages with Q&A content. Appears as rich snippets in search.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is image optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Image optimization involves reducing file size while maintaining quality through compression, format selection, and responsive sizing."
      }
    },
    {
      "@type": "Question",
      "name": "How do I compress images?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can compress images using ImageMagick: convert photo.jpg -quality 75 photo-compressed.jpg"
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between JPEG and PNG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JPEG is best for photos (smaller file size), PNG is best for graphics with transparency (larger file size, lossless)."
      }
    }
  ]
}
```

---

## Product Schema

Use on product pages, ecommerce sites.

```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Product Name",
  "image": "https://example.com/product-image.jpg",
  "description": "Detailed product description",
  "sku": "SKU123",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/product",
    "priceCurrency": "USD",
    "price": "99.99",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Company Name"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "89",
    "reviewCount": "45"
  }
}
```

---

## Review Schema

Use on product pages with customer reviews.

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Review Author Name"
  },
  "reviewBody": "This product exceeded my expectations. Highly recommend!",
  "datePublished": "2026-03-30"
}
```

---

## Event Schema

Use on event pages.

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Event Name",
  "description": "Event description",
  "image": "https://example.com/event-image.jpg",
  "startDate": "2026-06-15T09:00:00",
  "endDate": "2026-06-15T17:00:00",
  "eventAttendanceMode": "OfflineEventAttendanceMode",
  "eventStatus": "EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Venue Name",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/event/register",
    "price": "99.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-03-30T00:00"
  },
  "organizer": {
    "@type": "Organization",
    "name": "Organizer Name",
    "url": "https://example.com"
  }
}
```

---

## VideoObject Schema

Use for video content.

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Video Title",
  "description": "Video description",
  "thumbnailUrl": "https://example.com/video-thumbnail.jpg",
  "uploadDate": "2026-03-30",
  "duration": "PT5M30S",
  "contentUrl": "https://example.com/video.mp4",
  "embedUrl": "https://example.com/embed/video",
  "interactionCount": "1234"
}
```

---

## Person Schema (Author/Expert)

Use on author pages or expert profiles.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Author Name",
  "url": "https://example.com/authors/author-name",
  "image": "https://example.com/author-photo.jpg",
  "description": "Short bio and expertise description",
  "jobTitle": "Job Title",
  "worksFor": {
    "@type": "Organization",
    "name": "Company Name"
  },
  "sameAs": [
    "https://twitter.com/author",
    "https://linkedin.com/in/author"
  ]
}
```

---

## How-To Schema

Use for step-by-step guides.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Optimize Images",
  "description": "A step-by-step guide to optimizing web images",
  "image": "https://example.com/how-to-image.jpg",
  "estimatedCost": {
    "@type": "PriceSpecification",
    "priceCurrency": "USD",
    "price": "0"
  },
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Choose the right format",
      "text": "JPEG for photos, PNG for graphics, SVG for icons"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Compress the image",
      "text": "Use ImageMagick or similar tool to compress to 70% quality",
      "image": "https://example.com/compression-step.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Verify the result",
      "text": "Check file size reduction and visual quality"
    }
  ]
}
```

---

## Implementation Notes

1. **Validation**: Test all schemas on [schema.org](https://validator.schema.org/) or Google's Structured Data Testing Tool
2. **Placement**: Include in `<head>` section or in page body before closing `</body>`
3. **One per page**: Include only one main schema per page (e.g., Article OR Product, not both)
4. **Fallback**: Always include BreadcrumbList on non-homepage pages
5. **Testing**: After implementation, test in Google Search Console to see rich snippet preview
6. **Updates**: Keep dateModified current to show freshness
7. **Images**: Always include multiple image sizes (1x1, 4x3, 16x9) for Article schema
8. **URLs**: Always use absolute URLs, never relative
9. **Contact**: Always include valid contact information in Organization schema
10. **Reviews**: Only include if you have verified customer reviews (no fake reviews)
