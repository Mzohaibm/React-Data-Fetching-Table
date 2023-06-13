// import React, { useState } from "react";

// const Home = () => {
//   const [score, setScore] = useState("10");
//   const [comment, setComment] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (Number(score) <= 5 && comment.length < 10) {
//       alert("Please enter valid information");
//     }
//     console.log("Form has been created");
//     setComment("");
//     setScore("10");
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>FeedBackForm</h2>
//         <div>
//           <label>Score: {score}</label>
//           <input
//             type="range"
//             min="0"
//             max="10"
//             value={score}
//             onChange={(e) => setScore(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Your Message:</label>
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             placeholder="Enter Your Message"
//           />
//         </div>
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// };

// export default Home;
