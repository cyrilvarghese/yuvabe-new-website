export function BackgroundFx() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#020611_0%,#071327_42%,#091a34_100%)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(74% 55% at 50% -8%, rgba(112,152,220,0.36) 0%, rgba(62,99,164,0.26) 34%, rgba(8,19,42,0) 78%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(58% 100% at 0% 50%, rgba(1,4,12,0.96) 0%, rgba(1,6,16,0.52) 44%, rgba(1,7,18,0) 74%), radial-gradient(58% 100% at 100% 50%, rgba(1,4,12,0.96) 0%, rgba(1,6,16,0.52) 44%, rgba(1,7,18,0) 74%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(52deg, rgba(2,7,17,0.92) 0%, rgba(2,7,17,0.72) 24%, rgba(2,7,17,0) 48%), linear-gradient(-52deg, rgba(2,7,17,0.92) 0%, rgba(2,7,17,0.72) 24%, rgba(2,7,17,0) 48%)",
          backgroundPosition: "left top, right top",
          backgroundSize: "58% 100%, 58% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.52]"
        style={{
          background:
            "radial-gradient(72% 85% at 50% -10%, rgba(103,146,214,0.34) 0%, rgba(48,88,156,0.2) 42%, rgba(6,16,36,0) 84%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(90deg, transparent 0, rgba(136,165,214,0.12) 1px, transparent 1px)",
          backgroundSize: "10.8rem 100%",
          backgroundPosition: "center top",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.32] mix-blend-screen"
        style={{
          background:
            "radial-gradient(40% 50% at 28% 22%, rgba(45,96,170,0.34) 0%, rgba(45,96,170,0) 72%), radial-gradient(44% 56% at 72% 24%, rgba(58,108,180,0.28) 0%, rgba(58,108,180,0) 72%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.24) 0, rgba(255,255,255,0.24) 1px, transparent 1px, transparent 3px)",
          backgroundSize: "3px 3px",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-screen"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,8,20,0) 56%, rgba(2,7,17,0.34) 72%, rgba(1,5,13,0.68) 88%, rgba(0,3,10,0.92) 100%)",
        }}
      />
    </div>
  );
}
