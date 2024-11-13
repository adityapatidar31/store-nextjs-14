type PropType = {
  searchParams: { layout?: string; search?: string };
};

function AboutPage({ searchParams }: PropType) {
  console.log(searchParams);
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          store
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Our About page shares our journey, values, and commitment to delivering
        quality products and exceptional customer service. Learn about our
        mission to provide a seamless shopping experience, driven by trust,
        innovation, and a passion for excellence in every purchase.
      </p>
    </section>
  );
}
export default AboutPage;
