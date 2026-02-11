/**
 * load-env.mjs
 * 
 * Reads .env file from the project root and sets environment variables.
 * Import this at the top of any script that needs env vars.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '..', '.env');

try {
  const content = fs.readFileSync(envPath, 'utf-8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    const value = rest.join('=').trim();
    if (key && value && !process.env[key.trim()]) {
      process.env[key.trim()] = value;
    }
  }
} catch {
  console.warn('⚠️  No .env file found at', envPath, '— using existing environment variables');
}
