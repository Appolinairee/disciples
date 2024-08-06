import React from "react";
import { useParams } from "react-router-dom";
import { enseignementsData } from "../assets/data/enseignementsData";
import TitleAndAuthor from "../components/Lesson/TitleAndAuthor";
import Paragraph from "../components/Lesson/Paragraph";
import Quote from "../components/Lesson/Quote";
import ListContent from "../components/Lesson/ListContent";

const EnseignementPage = () => {
  const { id } = useParams();
  const lesson = enseignementsData.find((item) => item.id === parseInt(id));

  if (!id || !lesson) {
    return <p>En cours de chargement...</p>;
  }

  return (
    <div className="section">
      <TitleAndAuthor title={lesson.title} author={lesson.author} />

      {lesson?.contents.map((content, index) => {
        switch (content.type) {
          case "introduction":
            return (
              <div key={index} className="introduction">
                <img src={content.image} alt="" />
                <p>{content.text}</p>
              </div>
            );
          case "paragraph":
            return <Paragraph key={index} content={content} />;
          case "quote":
            return (
              <Quote key={index} content={content} />
            );
          case "list":
            return <ListContent key={index} content={content} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default EnseignementPage;
