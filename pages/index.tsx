import Slider from "@/components/Slider";
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/data/testimonials.json";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-24`}
    >
      {/* 1. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="w-screen">
        <Slider options={{ align: "center" }}>
          {testimonials.map((testimonial, i) => (
            // 2. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}
