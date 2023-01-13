import { NextApiRequest, NextApiResponse } from 'next';
import { getHostHeader } from './host-header';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ hostHeader: getHostHeader(req), id: req.query.id });
}
