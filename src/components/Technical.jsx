const Technical = () => {
  return (
    <div>
      <EngineDescription />

      <BuildDescription />

      <CockpitDescription />
    </div>
  );
};

const EngineDescription = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-12 pb-12 md:grid-cols-2">
      {/* Image */}
      <img src="/technical-engine.jpg" className="h-full w-full object-cover" />

      {/* Text */}
      <div>
        <p className="font-primary mb-4 text-2xl md:text-3xl">
          Developed for motorsport.
        </p>
        <p className="font-primary text-md mb-4 text-black md:text-lg">
          The M TwinPower Turbo inline 6-cylinder features superior power
          delivery and the striking characteristic M sound. The engine has been
          further developed and delivers an outstanding 405 kW (550 hp) and a
          maximum torque of 650 Nm. The 3.0-litre unit has had track performance
          as its raison d’être from day one of its development. Indeed, it also
          provides the basis for the engine in the BMW M4 GT3, which won the DTM
          touring car title in 2022 at the first time of asking and followed
          that up in 2023 with overall victories at the 24-hour races in
          Spa-Francorchamps and Dubai.
        </p>
        <p className="font-primary text-md mb-4 text-black md:text-lg">
          The optional lightweight M precision strut for the engine compartment
          increases torsional rigidity and improves handling through dynamically
          taken corners.
        </p>
        <p className="font-primary text-md mb-4 text-black md:text-lg">
          The optimum routing of the exhaust system’s pipes and their large
          cross sections serve to reduce backpressure. The system’s two
          electrically controlled flaps, a bespoke titanium rear silencer and
          two pairs of tailpipes painted in matt Black enable the BMW M4 CS to
          produce an emotional sound. The engine’s acoustic presence adjusts to
          the powertrain setting selected via the M Setup menu.
        </p>
      </div>
    </div>
  );
};

const BuildDescription = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-12 pb-12 md:grid-cols-2">
      {/* Text */}
      <div>
        <p className="font-primary mb-4 text-2xl md:text-3xl">
          Built for performance.
        </p>
        <p className="font-primary text-md mb-4 text-black md:text-lg">
          Extensive, model-specific lightweight design measures play a major
          part in moulding the performance qualities and exclusive character of
          the BMW M4 CS. The use of components made from carbon fibre-reinforced
          plastic (CFRP) both inside and out is of key importance here. Besides
          its carbon fibre roof, the special-edition model also uses this
          lightweight, high-tech material for its bonnet, front splitter, front
          air intakes, exterior mirror caps, rear diffuser and Gurney-style rear
          spoiler to further increase driving performance.
        </p>
        <p className="font-primary text-md mb-4 text-black md:text-lg">
          Under its carbon shell, moreover, the BMW M4 CS features optimised
          components for even better driving performance: The individually tuned
          axle kinematics and bespoke wheel camber settings, dampers, auxiliary
          springs and anti-roll bars serve to optimise steering precision,
          transmission of lateral control forces when cornering, spring and
          damping response and wheel location.
        </p>
      </div>

      {/* Image */}
      <img src="/technical-build.jpg" className="h-full w-full object-cover" />
    </div>
  );
};

const CockpitDescription = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-12 pb-24 md:grid-cols-2">
      {/* Image */}
      <img
        src="/technical-cockpit.jpg"
        className="h-full w-full object-cover"
      />

      {/* Text */}
      <div>
        <p className="font-primary mb-4 text-2xl md:text-3xl">
          Developed for motorsport.
        </p>
        <p className="font-primary text-md mb-4 text-black md:text-lg">
          The M TwinPower Turbo inline 6-cylinder features superior power
          delivery and the striking characteristic M sound. The engine has been
          further developed and delivers an outstanding 405 kW (550 hp) and a
          maximum torque of 650 Nm. The 3.0-litre unit has had track performance
          as its raison d’être from day one of its development. Indeed, it also
          provides the basis for the engine in the BMW M4 GT3, which won the DTM
          touring car title in 2022 at the first time of asking and followed
          that up in 2023 with overall victories at the 24-hour races in
          Spa-Francorchamps and Dubai.
        </p>
        <p className="font-primary text-md mb-4 text-black md:text-lg">
          The optional lightweight M precision strut for the engine compartment
          increases torsional rigidity and improves handling through dynamically
          taken corners.
        </p>
        <p className="font-primary text-md mb-4 text-black md:text-lg">
          The optimum routing of the exhaust system’s pipes and their large
          cross sections serve to reduce backpressure. The system’s two
          electrically controlled flaps, a bespoke titanium rear silencer and
          two pairs of tailpipes painted in matt Black enable the BMW M4 CS to
          produce an emotional sound. The engine’s acoustic presence adjusts to
          the powertrain setting selected via the M Setup menu.
        </p>
      </div>
    </div>
  );
};

export default Technical;
