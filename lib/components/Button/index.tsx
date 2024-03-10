import "../../component-styles.css";

interface ButtonProps {
  primary?: boolean;
  size?: "btn-sm" | "btn-md" | "btn-lg";
  label: string;
}

export const Button = ({
  primary = false,
  size = "btn-md",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "btn-primary" : "btn-secondary";
  return (
    <button type="button" className={["btn", size, mode].join(" ")} {...props}>
      {label}
    </button>
  );
};
