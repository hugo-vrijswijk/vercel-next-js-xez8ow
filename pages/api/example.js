import { getHostHeader } from './host-header';

export function handler(req) {
  return res.json({ hostHeader: getHostHeader(req) });
}
