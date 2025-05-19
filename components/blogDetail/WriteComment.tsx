const WriteComment = () => {
  return (
    <form className="write__comment">
      <h4>Write a Comment</h4>
      <input type="text" placeholder="Enter Your Name..." required />
      <input type="email" placeholder="Enter Your Email..." required />
      <textarea
        name="writecommnet"
        cols={30}
        rows={5}
        placeholder="Write a comment..."
        required
      ></textarea>
      <button type="submit" className="cmn__btn">
        <span>Submit Now</span>
      </button>
    </form>
  );
};

export default WriteComment;
