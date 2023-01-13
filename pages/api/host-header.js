import { headers } from 'next/headers';

export function getHostHeader(req) {
  if (req) {
    return req.headers.host;
  } else {
    return headers().get('host');
  }
}
