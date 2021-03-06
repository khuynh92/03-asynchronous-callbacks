const read = require('../../lib/reader');

const root = __dirname + '/../..';

describe('Read Module', () => {

  it('should return an error for a non existent file',(done) => {
    
    read([`${root}/data/fake.txt`], (err) => {
      expect(err).not.toBeUndefined();
      done();
    });
  });

  it('should return return an error for any files that do not exist.', (done) => {

    read([`${root}/data/cats.txt`, `${root}/data/missing.txt`], (err) => {
      expect(err).not.toBeUndefined();
      done();
    });
  });

  it('should return one file if the file array has only one item', (done) => {

    read([root + '/data/cats.txt'], (err, data) => {
      expect(err).toBeNull();
      const actual = data[0].toString().trim();
      expect(actual).toEqual('cats aren\'t cooler than dogs');
      
      done();

    });

  });
  it('should return all files in array in order of the array', (done) => {
    
    read([root + '/data/cats.txt', root + '/data/dogs.txt', root + '/data/hello.txt'], (err, data) => {

      expect(err).toBeNull();
      expect(data[0]).toEqual('cats aren\'t cooler than dogs');
      expect(data[1]).toEqual('dogs are the best bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark');
      expect(data[2]).toEqual('hello world!');
      done();
    });
  }); 
});