interface NoResultProps {
  message: string;
}

export const NoResult = ({ message }: NoResultProps) => {
  return <div className="text-center p-4 min-h-[10vh]">{message}</div>;
};
