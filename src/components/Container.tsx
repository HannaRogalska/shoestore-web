export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={`mx-auto w-full max-w-[1320px]`}>{children}</div>;
};
