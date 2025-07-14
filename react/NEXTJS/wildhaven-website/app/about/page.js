import Image from "next/image";
import image1 from "@/public/about-1.jpg";

export const metadata = {
  title: "About",
};
const styles = {
  h1: "text-4xl text-accent-400 font-medium mb-10",
};

function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 items-center">
      <div className="col-span-3">
        <h1 className={styles.h1}>Welcome to The Wild Oasis</h1>
        <div className="space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you&apos;ll find in the surrounding mountains. Wander through
            lush forests, breathe in the fresh air, and watch the stars twinkle
            above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>
      <Image
        src={image1}
        alt="Family sitting around a fire pit in front of cabin"
        placeholder="blur"
        className="col-span-2"
        quality={80}
      />
      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-2.jpg"
          alt="Family that manages"
          fill
          className="object-cover"
        />
      </div>
      <div className="col-span-3">
        <h1 className={styles.h1}>Managed by our family since 1962</h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
