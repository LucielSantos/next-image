import Image from 'next/image';
import { useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';
import { ImageContainer } from 'styles/pages/Fill';

function Fill() {
  const router = useRouter();

  const handleBack = useCallback(() => router.back(), []);

  return (
    <section>
      <p className="title">Fill exemple</p>

      <button onClick={handleBack}>Back</button>

      <ImageContainer>
        <Image src="/images/1.jpg" layout="fill" />
      </ImageContainer>

      <ImageContainer>
        <Image src="/images/2.jpg" layout="fill" />
      </ImageContainer>

      <ImageContainer>
        <Image src="/images/3.jpg" layout="fill" />
      </ImageContainer>

      <ImageContainer>
        <Image src="/images/4.jpg" layout="fill" />
      </ImageContainer>

      <ImageContainer>
        <Image src="/images/5.jpg" layout="fill" />
      </ImageContainer>

      <ImageContainer>
        <Image src="/images/6.jpg" layout="fill" />
      </ImageContainer>

      <ImageContainer>
        <Image src="/images/7.jpg" layout="fill" />
      </ImageContainer>
    </section>
  );
}

export default Fill;
