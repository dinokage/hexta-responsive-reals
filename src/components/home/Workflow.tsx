import Image from 'next/image';

const Workflow = () => {
  return (
    <section className="section pb-0">
      <div className="mb-8 text-center">
        <h2 className="mx-auto max-w-[400px] font-bold text-3xl md:text-4xl leading-tight dark:text-white text-gray-900">
          Experience the best workflow with us
        </h2>
      </div>
      <Image
        src={"/banner.svg"}
        alt="Workflow Image"
        width={1920}
        height={296}
        priority
      />
    </section>
  );
};

export default Workflow;