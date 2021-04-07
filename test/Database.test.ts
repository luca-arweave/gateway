import {
  strictEqual,
} from 'assert';
import {
  connection,
} from '../src/database/connection.database';
import {
  importBlocks,
  importTransactions,
  importTags,
} from '../src/database/import.database';

// tests everything related to the database connection

// check if it imports importBlocks


describe('Tests everything related to the database connection', () => {
  it('The connection settings should be correctly grab from the .env file', () => {
    const c: any = connection();
    strictEqual(c.client.connectionSettings.host, '0.0.0.0');
    strictEqual(c.client.connectionSettings.port, 5432);
    strictEqual(c.client.connectionSettings.database, 'arweave');
    strictEqual(c.client.connectionSettings.user, 'arweave');
    strictEqual(c.client.connectionSettings.password, 'arweave');
  });

  it('Should correctly import blocks', () => {
    importBlocks(`${process.cwd()}/cache/block.csv`).then((blocks) => {
      // console.log('her');
      // console.log(blocks);
    });
  });

  it('Should correctly import transactions', () => {
    importTransactions(`${process.cwd()}/cache/block.csv`).then((transactions) => {
      // console.log('herdsadsasadadsdsasddsaadsdasasddsasda');
      console.log(transactions);
    });
  });

  it('Should correctly import tags', () => {
    importTags(`${process.cwd()}/cache/block.csv`).then((tags) => {
      // console.log('heroiioioyoityiuoityioioytioytoiutyio');
      console.log(tags);
    });
  });
});
