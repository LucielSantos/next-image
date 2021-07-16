import Image from 'next/image';
import { useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';

function LowQuality() {
  const router = useRouter();

  const handleBack = useCallback(() => router.back(), []);

  return (
    <section>
      <p className="title">Low quality exemple</p>

      <button onClick={handleBack}>Back</button>

      <Image src="/images/1.jpg" width={1600} height={900} quality={1} />
      <h4>quality=1</h4>

      <Image src="/images/1.jpg" width={1600} height={900} />
      <h4>quality=75</h4>

      <Image src="/images/1.jpg" width={1600} height={900} quality={100} />
      <h4>quality=100</h4>
    </section>
  );
}

export default LowQuality;
