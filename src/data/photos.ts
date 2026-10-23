import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { Service, ServiceCategory } from './services';

/**
 * Photo convention (no code change needed to add/replace a photo):
 *   public/images/services/<service-slug>.jpg   → service photo
 *   public/images/units/<unit-slug>.jpg         → business-unit photo
 * A `photo` field on a service overrides the convention. Missing files fall back to the vector illustration.
 */
const pub = (p: string) => existsSync(join(process.cwd(), 'public', p));
const pick = (p: string) => (pub(p) ? p : undefined);

export const servicePhoto = (s: Service) => s.photo ?? pick(`/images/services/${s.slug}.jpg`);
export const unitPhoto = (c: ServiceCategory) => pick(`/images/units/${c.slug}.jpg`);
