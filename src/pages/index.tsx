import Link from 'next/link';

import { Head } from 'components/Commons';
import { Container } from 'styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <Head title="Home page" />
        <h1>Next.js Image optimization</h1>
        <br />
        <p>Click the links bellow to see differences.</p>
        <p>Open devtools in network tab.</p>

        <nav>
          <ul>
            <li>
              <Link href="/common">
                <a>Common - tag img</a>
              </Link>
            </li>

            <li>
              <Link href="/fixed">
                <a>Next.js - fixed layout</a>
              </Link>
            </li>

            <li>
              <Link href="/intrinsic">
                <a>Next.js - intrinsic layout</a>
              </Link>
            </li>

            <li>
              <Link href="/responsive">
                <a>Next.js - responsive layout</a>
              </Link>
            </li>

            <li>
              <Link href="/fill">
                <a>Next.js - fill layout</a>
              </Link>
            </li>

            <li>
              <Link href="/styled">
                <a>Next.js - styled image</a>
              </Link>
            </li>

            <li>
              <Link href="/low-quality">
                <a>Next.js - low quality image</a>
              </Link>
            </li>

            <li>
              <Link href="/priority">
                <a>Next.js - priority</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Home;
