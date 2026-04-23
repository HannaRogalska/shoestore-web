export const Container = ({
  children,
  size = "default",
}: {
  children: React.ReactNode;
  size?: "default" | "wide";
}) => {
  const maxWidth = size === "wide" ? "max-w-[1440px]" : "max-w-[1320px]";

  return (
    <div className={`w-full mx-auto px-4 md:px-8 ${maxWidth}`}>{children}</div>
  );
};
