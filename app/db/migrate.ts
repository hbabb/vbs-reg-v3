/* eslint-disable no-console */
import { migrate } from 'drizzle-orm/neon-http/migrator';

import { db } from '~/db/index';

async function main() {
  try {
    await migrate(db, {
      migrationsFolder: './drizzle',
    });
    console.log('Migration Completed! :tada:');
  }
  catch (error) {
    console.error('Error durning migration: ', error);
    process.exit(1);
  }
}

main();
