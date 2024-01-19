import "./CommentList.scss"

function CommentList() {
    return (
         <section className ="comment-list">
            
                 <div className ="comment-list__container">
                     <div className ="comment-list__comment">
                        <div className ="comment-list__profile" alt="Profile Picture"></div>
                     </div>
                        <div className ="comment-list__subcontainer">
                           <div className ="comment-list__details">
                              <p className ="comment-list__name">Michael Lions</p>
                              <p className ="comment-list__date">08/09/2021</p>
                           </div>
                              <p className ="comment-list__text">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
                        </div>
                 </div>

                 <div className ="comment-list__container">
                     <div className ="comment-list__comment">
                        <div className ="comment-list__profile" alt="Profile Picture"></div>
                     </div>
                        <div className ="comment-list__subcontainer">
                           <div className ="comment-list__details">
                              <p className ="comment-list__name">Gary Wong</p>
                              <p className ="comment-list__date">07/11/2021</p>
                           </div>
                              <p className ="comment-list__text">Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!</p>
                        </div>
                 </div>

                 <div className ="comment-list__container">
                     <div className ="comment-list__comment">
                        <div className ="comment-list__profile" alt="Profile Picture"></div>
                     </div>
                        <div className ="comment-list__subcontainer">
                           <div className ="comment-list__details">
                              <p className ="comment-list__name">Theodore Duncan</p>
                              <p className ="comment-list__date">07/11/2021</p>
                           </div>
                              <p className ="comment-list__text">How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!</p>
                        </div>
                 </div>
         </section>
    );
}

export default CommentList;