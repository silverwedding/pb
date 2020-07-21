import { ShortenedUrl } from '@/models/ShortenedUrl';

export async function getShortenedUrls(): Promise<ShortenedUrl[]> {
  const response = await fetch('http://localhost:8080/');

  const body = await response.json();

  if (response.status === 200) {
    return body.urls;
  }

  return [];
}

export async function addShortenedUrl(
  url: string,
): Promise<ShortenedUrl | null> {
  const response = await fetch('http://localhost:8080/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  const body = await response.json();

  if (response.status === 200) {
    return body.url;
  }

  return null;
}
