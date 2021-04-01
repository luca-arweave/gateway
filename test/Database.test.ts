import {
  strictEqual,
} from 'assert';
import {
  connection,
} from '../src/database/connection.database';

// tests everything related to the database connection

describe('Tests everything related to the database connection', () => {
  it('The connection settings should be correctly grab from the .env file', () => {
    const c: any = connection();
    strictEqual(c.client.connectionSettings.host, '0.0.0.0');
    strictEqual(c.client.connectionSettings.port, 5432);
    strictEqual(c.client.connectionSettings.database, 'arweave');
    strictEqual(c.client.connectionSettings.user, 'arweave');
    strictEqual(c.client.connectionSettings.password, 'arweave');
  });
});
