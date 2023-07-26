import React from 'react';

export default function Page() {
  return (
    <section className='container grid min-h-screen'>
      {/* Image at the Top */}
      <div
        className="w-full h-96 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets/images/innoxlearn.svg')",
        }}
      />

      {/* Main Content */}
      <div className="px-4 py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        reiciendis reprehenderit? Expedita animi corrupti dignissimos enim aliquid
        iste culpa possimus ullam eos dicta aut laborum, voluptatum deleniti ad
        repellendus quis.
      </div>
    </section>
  );
}
