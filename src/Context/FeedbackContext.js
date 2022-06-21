import { createContext, useState} from 'react'
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()
  
export const FeedbackProvider = ({children}) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "context item",
      rating: 10,
    },
    {
      id: 2,
      rating: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 3,
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 4,
      rating: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  
  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit ({
      item,
      edit: true
    })
  }

  // update the item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item)=> item.id === id ? {
      ...item, ...updItem } : item))
        
     
    setFeedbackEdit({
        item: {},
        edit: false,
      });
  }


  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );

    }
export default FeedbackContext