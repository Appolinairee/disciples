import React from "react";
import { useParams } from "react-router-dom";
import { enseignementsData } from "../assets/data/enseignementsData";
import TitleAndAuthor from "../components/Lesson/TitleAndAuthor";
import Paragraph from "../components/Lesson/Paragraph";
import Quote from "../components/Lesson/Quote";
import ListContent from "../components/Lesson/ListContent";
import "../assets/styles/enseignementsPage.css";

const EnseignementPage = () => {
  const { id } = useParams();
  const lesson = enseignementsData.find((item) => item.id === parseInt(id));

  if (!id || !lesson) {
    return <p>En cours de chargement...</p>;
  }

  return (
    <div className="section lesson-page">
      <TitleAndAuthor title={lesson.title} author={lesson.author} />

      {lesson?.contents.map((content, index) => {
        switch (content.type) {
          case "introduction":
            return (
              <Paragraph key={index} content={content} />
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