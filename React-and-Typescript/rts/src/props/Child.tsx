interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export function Child({ color, onClick, children }: ChildProps) {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

// export function ChildAsFC({ color }: ChildProps): React.FC<ChildProps> {
//   return <div>{color}</div>;
// }

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
