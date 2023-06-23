import ideasPhoto from "../images/post-1.jpg";
import userimage from "../images/user-1.jpg";
const Idea = ({ myideas }) => {
  return (
    myideas.map((idea, index) => (
      <div className="b__idea">
        <div className="b__idea-image">
          <img src={ideasPhoto} alt="photo" />
        </div>
        <div className="b__idea-user">
          <div className="b__user">
            <div className="b__user-img">
              <img src={userimage} alt={idea?.username} />
            </div>
            <div className="b__user-details">
              <h3>{idea?.username}</h3>
            </div>
          </div>
          <div className="b__idea-a">
            <h2>The best way we do it</h2>
            <p>{idea?.idea_text}</p>
            <span>{idea?.created_at?.data}</span>
          </div>
        </div>
        <div className="b__idea-votes">
          <span>{idea?.votes}</span>
        </div>
      </div>
    ))
  );
};

export default Idea;
