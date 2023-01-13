import { NextApiRequest } from 'next';
import { headers } from 'next/headers';

export function getHostHeader(req?: NextApiRequest) {
  if (req) {
    return req.headers.host;
  } else {
    return headers().get('host');
  }
}
