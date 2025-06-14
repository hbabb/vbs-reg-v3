/* eslint-disable node/no-process-env */
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { drizzle } from 'drizzle-orm/neon-http';

expand(config({ path: '.env' }));

const sql = neon(process.env.DATABASE_URL!);

// Logger if needed
// const db = drizzle(sql, { logger: true });

const db = drizzle(sql);

export { db };
