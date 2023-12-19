import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const db = drizzle(sql);

export const objects = pgTable('objects', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at'),
});