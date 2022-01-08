import { useState } from 'react';
import Button from '../../UI/Button/Button';
// import './CourseInput.css';

// or

import styles from './CourseInput.module.css';

// or

// import styled from 'styled-components'
// const FormControl = styled.div`
//   margin: 0.5rem 0;
// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color:${props => props.invalid ? 'red' : 'black'};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 2px solid ${props => props.invalid ? 'red' : '#ccc'};
//   background:${props => props.invalid ? '#ffbba7' : 'transparent'};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;



const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }
    props.onAddGoal(enteredValue);
  };
 // Css.module method

 return (
  <form onSubmit={formSubmitHandler}>
    <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
      <label>Course Goal</label>
      <input type="text" onChange={goalInputChangeHandler} />
      <label>
        { !isValid ? 'Please enter the details' : ''}
      </label>
      </div>
    <Button type="submit">Add Goal</Button>
  </form>
);


  // or Style Component Method
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl invalid={!isValid}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //       <label>
  //         { !isValid ? 'Please enter the details' : ''}
  //       </label>
  //       </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );
};

export default CourseInput;
