import Image from 'next/image';
import { useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';

function Priority() {
  const router = useRouter();

  const handleBack = useCallback(() => router.back(), []);

  return (
    <section>
      <p className="title">Priority exemple</p>

      <button onClick={handleBack}>Back</button>

      <Image src="/images/1.jpg" width={1600} height={900} priority />

      <Image src="/images/2.jpg" width={1600} height={900} priority />

      <Image src="/images/3.jpg" width={1600} height={900} priority />

      <Image src="/images/4.jpg" width={1600} height={900} priority />

      <Image src="/images/5.jpg" width={1600} height={900} priority />

      <Image src="/images/6.jpg" width={1600} height={900} priority />

      <Image src="/images/7.jpg" width={1600} height={900} priority />
    </section>
  );
}

export default Priority;
