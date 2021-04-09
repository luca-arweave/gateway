
// import config from 'dotenv';
import {strictEqual} from 'assert';
import {app, start} from '../src/Gateway';


describe('Server Application Tests (src/Gateway.ts)', () => {
  it('Return the correct types', () => {
    console.log(process.env);
    strictEqual(typeof app, 'function');
    strictEqual(typeof start, 'function');
  });
});
