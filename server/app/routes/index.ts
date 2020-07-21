import { Express } from 'express';
import Url from '../db/models/Url';
import {createShortenedUrl, validUrl} from '../libs/shortened-urls';

export default function (app: Express) {
  app.get('/', (req, res, next) => {
    Promise.resolve()
      .then(async () => {
        try {
          const urls = await Url.find();

          res.status(200).send({
            status: 'OK',
            urls,
          });
        } catch (e) {}
      })
      .catch((err) => next(err));
  });

  app.post('/', (req, res, next) => {
    Promise.resolve()
      .then(async () => {
        try {
          const url = req.body.url;

          if (!url) {
            res.status(400).send({ error: 'url required' });
            return;
          }

          if (!validUrl(url)) {
            res.status(400).send({ error: 'invalid url' });
            return;
          }

          const createdUrl = await createShortenedUrl(url);

          res.status(200).send({
            status: 'OK',
            url: createdUrl,
          });
        } catch (e) {
          console.error(e);
        }
      })
      .catch((err) => next(err));
  });
}
