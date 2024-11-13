const Feature = () => {
  const data = [
    {
      title: "Free forever",
      subtitle: "for core features",
    },
    {
      title: "More apps",
      subtitle: "than any other platform",
    },
    {
      title: "Cutting edge",
      subtitle: "AI feature",
    },
  ];
  return (
    <div className="flex gap-3">
      {data.map((item, index) => (
        <div className="flex gap-1 items-center text-sm">
          <Check />
          <p className={`${index !== 2 ? "font-bold" : ""}`}>
            {item.title}
          </p>
          <p className={`${index === 2 ? "font-bold" : ""}`}>
            {item.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Feature;

function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
