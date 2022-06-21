import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from './data/FeedbackData';
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./Components/Pages/AboutPage";
import { FeedbackProvider } from "./Context/FeedbackContext";
import AboutIconLink from "./Components/AboutIconLink"; 


function App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]) 
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  
    
  
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
