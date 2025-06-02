import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  const handleQuestionAdded = (newQuestion) => {
    setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
    setPage("List"); // Switch to list view to see the new question
  };

  const handleQuestionsChange = (updatedQuestions) => {
    setQuestions(updatedQuestions);
  };
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
