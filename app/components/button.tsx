interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'default' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'default',
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200';
  const sizeStyles = size === 'lg' ? 'px-8 py-3 text-lg' : 'px-4 py-2 text-sm';
  const variantStyles = variant === 'primary' 
    ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
    : 'bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm';

  return (
    <button 
      className={`${baseStyles} ${sizeStyles} ${variantStyles} rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
