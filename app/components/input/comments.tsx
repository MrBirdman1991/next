import { useState, FC, useEffect } from 'react';

import CommentList from './comment-list';
import NewComment, { Comment } from './new-comment';
import classes from './comments.module.css';

interface IProps{
  eventId: string
}

const Comments: FC<IProps> = (props) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    if(showComments && comments.length === 0){
      (async () => {
        const response = await fetch(`/api/comments/${eventId}`);
        const comments: Comment[] = await response.json()
        setComments(comments)
      })()
    }
  }, [showComments, eventId, setComments, comments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData: Comment) {
    try{
     const response = await fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify({...commentData}),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log(response)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments}/>}
    </section>
  );
}

export default Comments;
