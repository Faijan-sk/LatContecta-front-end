const SmallBanner = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="breadcumnd__banner">
      {/* Container- */}
      <div className="container">
        <div className="breadcumnd__wrapper">
          <h2 className="bread__title">{title}</h2>

          {/* Breadcumnd */}
          {children}
        </div>
      </div>
      {/* Container- */}
    </section>
  );
};

export default SmallBanner;
