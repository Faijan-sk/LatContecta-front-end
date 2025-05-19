import NavBar from "@/components/navBar/NavBar";

export default function BlockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* NavBar Here */}
      <NavBar clss="customize__header border__bottom" />

      {/* children here */}
      {children}
    </>
  );
}
