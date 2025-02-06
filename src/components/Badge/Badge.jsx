const Badge = ({ content }) => {
  return (
    <span
      className={`px-4 py-1 border border-solid rounded uppercase text-xs font-bold text-grayscaleF ${
        THEME[content] || THEME.default
      }`}
    >
      {content}
    </span>
  );
};

export default Badge;

const THEME = {
  default: "bg-secondary border-secondary",
  responsive: "bg-primary border-primary",
};
