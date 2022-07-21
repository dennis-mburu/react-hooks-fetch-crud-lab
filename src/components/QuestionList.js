import React from "react";
import QuestionItem from "./QuestionItem";

// function QuestionList({questionObj}) {

function QuestionList({questionObj, updateDeleted={updateDeleted}}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      {/* <ul>{questionObj.map((item) => (
        <li key={item.id}>{item.prompt}</li>
      ))}
      </ul> */}
      <ul>
        {questionObj.map(item => 
          <QuestionItem key={item.id} 
          question={item}
          updateDeleted={updateDeleted}/> 
        ) }
      </ul>

    </section>
  );
}

export default QuestionList;
