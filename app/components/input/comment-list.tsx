import { FC } from "react";
import classes from "./comment-list.module.css";
import { Comment } from "./new-comment";

interface Props {
  comments: Comment[];
}

const CommentList: FC<Props> = ({ comments }) => {
  return (
    <ul className={classes.comments}>
      {comments.map((comment, idx) => (
        <li key={idx}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
