import React from 'react';

const SuccessScreen = ({ score, time}) => (
  <div className="success-screen">
    <h1>Congratulations!</h1>
    <p>Your Score: {score}</p>
    <p>Time Taken: {time} seconds</p>
  </div>
);

export default SuccessScreen;

// import React from 'react';

// const SuccessScreen = ({ score, time }) => (
//   <div className="success-screen">
//     <h1>Congratulations!</h1>
//     <p>Your Score: {score}</p>
//     <p>Time Taken: {time} seconds</p>
//   </div>
// );

// export default SuccessScreen;
