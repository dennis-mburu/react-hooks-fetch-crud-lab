import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() { 
  const [page, setPage] = useState("List");

  const[questions, setQuestions] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then((questionsData) => {
        // console.log(questionsData)
        setQuestions(questionsData)
    })
  },[])

// console.log(questions)

function handleQuestionsUpdate(newQuestion){
  setQuestions([...questions, newQuestion ])
}

function handleUpdateDeleted(deletedQuestion){
  console.log(deletedQuestion)
  const updatedItems = questions.filter((item) => item.id !== deletedQuestion.id)
  console.log(updatedItems)
  setQuestions(updatedItems)
}


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onQuestsupdate={handleQuestionsUpdate}/> : <QuestionList questionObj={questions} updateDeleted={handleUpdateDeleted}/>}
    </main>
  );
}

export default App;
