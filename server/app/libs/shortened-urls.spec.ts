import {
  createRandomString,
  createShortenedUrl,
  validUrl,
} from './shortened-urls';
import Url from '../db/models/Url';
import mongoose from 'mongoose';

describe('app/libs/shortened-urls', () => {
  describe('createRandomString', () => {
    test('should create a random string', () => {
      const string = createRandomString();

      const match = expect.stringMatching(/[a-zA-Z0-9]+/g);
      expect(string).toEqual(match);
      expect(string.length).toEqual(8);
    });
  });

  describe('createShortenedUrl', () => {
    beforeAll(async () => {
      await mongoose.connect(
        'mongodb://localhost:27017/pb',
        { useNewUrlParser: true, useCreateIndex: true },
        (err) => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
        },
      );
    });

    beforeEach(async () => {
      await Url.remove({});
    });

    test('should create a url', async () => {
      const createdUrl = await createShortenedUrl('test');

      const url = await Url.find({ where: { _id: createdUrl._id } });

      expect(url).toBeDefined();
    });
  });

  describe('validUrl', () => {
    test('should return true if url valid', () => {
      expect(validUrl('www.test.com')).toEqual(true);
    });

    test('should return false if url invalid', () => {
      expect(validUrl('test')).toEqual(false);
    });
  });
});
