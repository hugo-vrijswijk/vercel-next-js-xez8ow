import { getHostHeader } from '../pages/api/host-header';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const h = getHostHeader();
  return <h1>hello world {h}</h1>;
}
