/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
// eslint-disable-next-line import/extensions
import * as environment from '$env/static/private';

export const ServerConfigSchema = z.object({
  AUTH_SECRET: z.string().trim().min(32),
  GOOGLE_CLIENT_ID: z.string().trim().min(1),
  GOOGLE_CLIENT_SECRET: z.string().trim().min(1),
  DB_HOST: z.string().trim().min(1),
  DB_USER: z.string().trim().min(1),
  DB_PASSWORD: z.string().trim().min(1),
  DB_NAME: z.string().trim().min(1),
  DB_PORT: z.coerce.number().default(5432),
  DATABASE_URL: z.string().trim().min(1).url(),
});

export type ServerConfigSchema = z.infer<typeof ServerConfigSchema>;

export const config = ServerConfigSchema.parse(environment);
