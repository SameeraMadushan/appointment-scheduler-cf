interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-md border border-slate-200 shadow-lg">
      {children}
    </div>
  );
};

export default Card;
