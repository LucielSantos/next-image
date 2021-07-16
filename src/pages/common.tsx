import { useRouter } from 'next/dist/client/router';
import { useCallback } from 'react';

function Common() {
  const router = useRouter();

  const handleBack = useCallback(() => router.back(), []);

  return (
    <section>
      <p className="title">Common exemple</p>

      <button onClick={handleBack}>Back</button>

      <img src="/images/1.jpg" alt="1" />

      <img src="/images/2.jpg" alt="2" />

      <img src="/images/3.jpg" alt="3" />

      <img src="/images/4.jpg" alt="4" />

      <img src="/images/5.jpg" alt="5" />

      <img src="/images/6.jpg" alt="6" />

      <img src="/images/7.jpg" alt="7" />
    </section>
  );
}

export default Common;
