import './tailwind.css';
interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? '' : 'btn-secondary';
  return (
    <button
      type="button"
      className={['btn', size, mode].join(' ')}
      {...props}
    >
      {label} Test
    </button>
  );
};
