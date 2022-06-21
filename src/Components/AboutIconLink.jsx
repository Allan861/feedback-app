import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import React, { useState } from "react";

function AboutIconLink() {
  //const [show, deleteIcon] = useState(true);
  return (
    <div className="about-link">
        <Link to="/about">
          <FaQuestion size={30} />
        </Link>  
    </div>
  );
}



export default AboutIconLink
