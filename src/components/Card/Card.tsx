interface CardProps {
  children: React.ReactNode;
}

/**
 * Simple card with shadow and border
 */
const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-md border border-slate-200 shadow-lg">
      {children}
    </div>
  );
};

export default Card;
