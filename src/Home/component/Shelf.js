// import React from "react";
// import MoreButton from "./MoreButton";
// import '../../asset/css/Card.css';

// class Shelf extends React.Component {
//   state = {
//     displayIndex: 0,
//   };
//   next = (event) => {
//     this.setState({
//       displayIndex: this.state.displayIndex + 1,
//     });
//   };
//   prev = (event) => {
//     this.setState({
//       displayIndex: this.state.displayIndex - 1,
//     });
//   };

//   render() {
//     const questionArray = this.props.question;
//     return (
//       <div className="question-item-card">
//         <div className="question-shelf-button">
//           {this.state.displayIndex !== 0 && (
//             <MoreButton moreItems={this.prev}>
//               <svg
//                 width="1em"
//                 height="1em"
//                 viewBox="0 0 16 16"
//                 className="bi bi-arrow-left-circle-fill"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"
//                 />
//               </svg>
//             </MoreButton>
//           )}
//         </div>
//         {questionArray.slice(
//           this.state.displayIndex,
//           this.state.displayIndex + 1
//         )}
//         <div className="question-shelf-button">
//           {questionArray.length > this.state.displayIndex + 1 && (
//             <MoreButton moreItems={this.next}>
//               <svg
//                 viewBox="0 0 16 16"
//                 className="bi bi-arrow-right-circle-fill"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
//                 />
//               </svg>
//             </MoreButton>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default Shelf;