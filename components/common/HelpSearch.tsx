const HelpSearch = () => {
  return (
    <>
      <h3 className="bread__title wow fadeInDown">How can We Help You?</h3>
      <p
        className="mb__30 fz-18 fw-400 text-white wow fadeInDown"
        data-wow-duration="2.1s"
      >
        Have qustions? Search through our Help Center.
      </p>
      <form action="#" className="wow fadeInDown" data-wow-duration="2.5s">
        <input type="text" placeholder="Start typing your search..." />
        <button type="submit" className="cmn__btn">
          <span>Search</span>
        </button>
      </form>
    </>
  )
}

export default HelpSearch
