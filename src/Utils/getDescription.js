import { Link } from "react-router-dom";

function getDescription (description, animal, id) {
  
    if (!description) {
      return <p>There is currently no description available for this breed. Check back at a later time.</p>
    } else {
      let lines = description.split('.')
      let firstLine = lines[0]
      return <p>
      {firstLine}...&nbsp;
      
      <Link
      className="continue-reading"
      to={
        animal === "cat"
          ? `view-cat/${id}`
          : `view-dog/${id}`
      } >
      continue reading.
      </Link> 
      </p>
    
    }
};

export default getDescription;