import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import QueryBox from "../queryBox/QueryBox";
import "./feed.scss";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../auth/firebase";

const Feed = () => {
  const [posts, setPost] = useState([]);

  const fetchData = async () => {
    try {
      const q = await query(
        collection(db, "questions"),
        orderBy("timestamp", "asc")
      );

      await onSnapshot(q, (querySnapshot) => {
        setPost(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            question: doc.data(),
          }))
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(posts);

  return (
    <div className="feed">
      <QueryBox />
      {posts.map(({ id, question }) => (
        <Post
          key={id}
          Id={id}
          image={question.imageUrl}
          question={question.question}
          timestamp={question.timestamp}
          quoraUser={question.user}
        />
      ))}
    </div>
  );
};

export default Feed;
