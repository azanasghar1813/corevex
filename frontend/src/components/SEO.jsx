import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'Corevex | Software Engineering & Digital Solutions';
const DEFAULT_DESC = 'Corevex builds intelligent POS systems, business software, and custom digital solutions for modern businesses.';
const BASE_URL = 'https://corevex.tech';

export default function SEO({ title, description, canonical }) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    const fullTitle = title ? `${title} | Corevex` : DEFAULT_TITLE;
    document.title = fullTitle;

    // 2. Update Meta Description
    const metaDesc = description || DEFAULT_DESC;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', metaDesc);
    }

    // 3. Update Canonical URL
    const canonicalPath = canonical || location.pathname;
    const fullCanonical = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', fullCanonical);
    }

    // 4. Update Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metaDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullCanonical);

    // 5. Update Twitter
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', fullTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', metaDesc);

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', fullCanonical);
  }, [title, description, canonical, location.pathname]);

  return null;
}
