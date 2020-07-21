import Url from '../db/models/Url';

export const URL_DOMAIN = 'https://pbid.io';

export function createRandomString() {
  return Math.random()
    .toString(36)
    .replace(/[^a-zA-Z0-9]+/g, '')
    .substr(0, 8);
}

export async function createShortenedUrl(url) {
  const shortened = `${URL_DOMAIN}/${createRandomString()}`;
  const createdUrl = new Url({ url, shortened });
  await createdUrl.save();
  return createdUrl;
}

export function validUrl(url: string): boolean {
  const res = url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
  );
  return res !== null;
}
