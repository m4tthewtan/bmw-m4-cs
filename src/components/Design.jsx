const Design = () => {
  return (
    <div>
      <ExteriorDesign />

      <InteriorDesign />
    </div>
  );
};

const images = [
  {
    src: "/exterior-1.jpg",
    heading: "Leave a lasting impression.",
    text: "Rear lights with precise laser technology. The openwork laser fibres lend the BMW M4 CS an exclusive appearance.",
  },
  {
    src: "/exterior-2.jpg",
    heading: "Headlights with yellow icons.",
    text: "Inspired by GT racing, special model-specific coloured M lights make your BMW M distinctively recognisable.",
  },
  {
    src: "/exterior-3.jpg",
    heading: "Construction that exudes glamour.",
    text: "The exclusive sheen of the high-quality carbon fibres on the bonnet, front splitter, mirror caps, roof, gurney and rear diffuser cannot fail to impress.",
  },
  {
    src: "/interior-1.jpg",
    heading: "Black. Red. Exclusive.",
    text: "Lightweight M Carbon bucket seats provide perfect support. Bright red CS lettering and Bicolour Merino Leather lend the passenger area a sportier feel.",
  },
  {
    src: "/interior-2.jpg",
    heading: "Precise. Dynamic.",
    text: "The M Alcantara steering wheel offers an ergonomic, non-slip grip. A red 12 o'clock marking, the M badge and M-colour stitching exude the look of a racing car",
  },
  {
    src: "/interior-3.jpg",
    heading: "Lightweight.",
    text: "The carbon-fibre centre console reduces weight. It also has an appealing look with its typical high-gloss fibre texture and red CS lettering.",
  },
];

const ExteriorDesign = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-12 pb-12">
      {/* Title */}
      <p className="font-primary mb-8 text-center text-4xl">EXTERIOR DESIGN</p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {images
          .filter((x) => x.src.includes("exterior"))
          .map((x, index) => (
            <div key={index}>
              <img src={x.src} className="h-64 w-full object-cover" />
              <p className="font-primary my-4 text-2xl text-black">
                {x.heading}
              </p>
              <p className="font-primary text-lg text-black">{x.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

const InteriorDesign = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-12 pb-12">
      {/* Title */}
      <p className="font-primary mb-8 text-center text-4xl">INTERIOR DESIGN</p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {images
          .filter((x) => x.src.includes("interior"))
          .map((x, index) => (
            <div key={index}>
              <img src={x.src} className="h-64 w-full object-cover" />
              <p className="font-primary my-4 text-2xl text-black">
                {x.heading}
              </p>
              <p className="font-primary text-lg text-black">{x.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Design;
