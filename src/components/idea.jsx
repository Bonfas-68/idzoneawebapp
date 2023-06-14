const Idea = ({username ,text ,postimage ,votes ,title ,userimage}) => {
  return (
    <div className='b__idea'>
        <div className="b__idea-image">
        <img src={postimage} alt={title} />
        </div>
        <div className="b__idea-user">
            <div className="b__user">
                <div className="b__user-img">
                <img src={userimage} alt={username} />
                </div>
                <div className="b__user-details">
                    <h3>{username}</h3>
                    <span>myDomain Name</span>
                </div>
            </div>
            <div className="b__idea-a">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
        <div className="b__idea-votes">
            <span>{votes}</span>
        </div>
    </div>
  )
}

export default Idea