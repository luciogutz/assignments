import React from 'react'


export default React.createClass({
getInitialState() {
  return {
    comments: [{
      profileName: "Person",
      profilePic: "http://lavincenter.sdsu.edu/images/profile-images/square_profile_pic_male.png",
      commentDate: "May 5, 2016",
      commentText: "This is a comment",
      likes: "Likes",
      comm: "Comments",
      shares: "Shares",
      id: 0
    }],
    
  }
},

  render() {
    return (
      <div>
        <section ref="comment" className="articleContainer">
          <header ref="header" className="titleContainer">
            <img ref="profileImage" className="profileImage"       src="http://lavincenter.sdsu.edu/images/profile-images/square_profile_pic_male.png"></img>
            <h2 ref="profileName" className="title"> Instant Articles </h2>
            <p ref="commentDate" className="titleDate"> May 13, 2015 </p>
          </header>
          <p ref="profileComment"> Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android. </p>
          <p> Learn more about this new tool for publishers at instantarticles.fb.com. </p>
          <button className="buttons"> 778 Likes </button>
          <button className="buttons"> 315 Comments </button>
          <button className="buttons"> 53 Shares </button>
        </section>
        <section>
            {
              this.state.comments.map((comment, i) => {
                return <article key={i}>
                 <section className="articleContainer">
                  <header className="titleContainer">
                    <img src= {`${comment.profilePic}`} className="profileImage"/>
                    <h2 className="title">{comment.profileName}</h2>
                    <p className="titleDate"> {comment.commentDate}</p>
                  </header>
                  <p>{comment.commentText}</p>
                  <button className="buttons">{comment.likes}</button>
                  <button className="buttons">{comment.comm}</button>
                  <button className="buttons">{comment.shares}</button>
                  </section>
                </article>
              })
            }
        </section>
      </div>

    )
  }

})
