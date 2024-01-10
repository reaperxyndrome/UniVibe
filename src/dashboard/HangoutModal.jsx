import { useState } from 'react';
import PropTypes from 'prop-types';

// This is a function component called HangoutModal. It takes two props: 'show' and 'onHide'.
export default function HangoutModal({ show, onHide }) {
  // 'formData' is a state variable that holds the form data. 'setFormData' is the function to update this state.
  // The initial state is an object with empty strings for name, date, time, place, and description.
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
    description: '',
  });

  // 'handleSubmit' is an async function that is called when the form is submitted.
  const handleSubmit = async (event) => {
    // 'preventDefault' is called to prevent the page from refreshing when the form is submitted.
    event.preventDefault();
  
    try {
      // 'fetch' is used to make a POST request to the server. The form data is sent in the body of the request.
      const response = await fetch('http://localhost:8096/api/v1/schedule/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // If the response is not ok (status is not in the range 200-299), an error is thrown.
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
      // handle success
      alert('Hangout created successfully'); // Show a success message
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      // If there's an error in the fetch request, an alert is shown with the error message
      alert('Error creating hangout: ' + error.message);
    }
  };

  // This function is called when an input field changes. It updates the formData state with the new value.
  const handleInputChange = (e) => {
    // 'name' is the name of the input field and 'value' is its current value
    const { name, value } = e.target;
    // The formData state is updated. The spread operator (...) is used to include all the existing key-value pairs in the state.
    // The value of the field that changed is updated with the new value.
    setFormData({ ...formData, [name]: value });
  };

  // TODO: fix hangout modal bug
  // bug 1: hangout modal removes scrollbar when showed --done
  // bug 2: hangout modal is not centered on the screen --done
  // tips: rewrite to not use bootstrap

  // The return statement contains the JSX to be rendered
  return (
    // The modal is shown or hidden based on the state of 'show'.
    // The modal is positioned fixed and covers the entire screen (inset-0). The content of the modal scrolls if it overflows (overflow-y-auto).
    <div className={`${show ? 'block' : 'hidden'} fixed z-10 inset-0 overflow-y-auto`}>
      // Centers its children both vertically and horizontally
      <div className="flex items-center justify-center min-h-screen">
      // The modal box. It has a white background, rounded corners, and a shadow. It takes up the full width on small screens, half the width on medium screens, and a third of the width on large screens.
        <div className="bg-white w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-xl p-8">
          // This is the title of the modal
          <h2 className="text-center text-2xl font-bold mb-6">New Hangout</h2>
          // Form that users fills out to create a new hangout
          <form onSubmit={handleSubmit}>
            // Contains the input fields for the hangout name, date, time, place, and description
            <div className="mb-4">
              // The label for the hangout name input field
              <label htmlFor="hangoutName" className="block text-sm font-medium">
                Name
              </label>
              // The input field for the hangout name
              // The type of the input is text
              // The id and name of the input field are both 'hangoutName'
              // The current value of the input field is formData.name
              // When the input field changes, handleInputChange is called
              // The input field has some CSS classes for styling
              <input
                type="text"
                id="hangoutName"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full mt-1"
              />
            </div>
            <div className="mb-4">
              // The label for the date input field
              <label htmlFor="date" className="block text-sm font-medium">
                Date
              </label>
              // The input field for the date
              // The type of the input is date
              // The id and name of the input field are both 'date'
              // The current value of the input field is formData.date
              // When the input field changes, handleInputChange is called
              // The input field has some CSS classes for styling
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full mt-1"
              />
            </div>
            // Contains the input file for time
            <div className="mb-4">
              // The label for the time input field
              <label htmlFor="time" className="block text-sm font-medium">
                Time
              </label>
              // The input field for the time
              // The type of the input is text
              // The id and name of the input field are both 'time'
              // The current value of the input field is formData.time
              // When the input field changes, handleInputChange is called
              // The input field has some CSS classes for styling
              <input
                type="text"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full mt-1"
              />
            </div>
            // A div that contains an input field for the place
            <div className="mb-4">
              // The label for the place input field
              <label htmlFor="place" className="block text-sm font-medium">
                Place
              </label>
              // The input field for the place
              // The type of the input is text
              // The id and name of the input field are both 'place'
              // The current value of the input field is formData.place
              // When the input field changes, handleInputChange is called
              // The input field has some CSS classes for styling
              <input
                type="text"
                id="place"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full mt-1"
              />
            </div>
            // Contains an input field for the description
            <div className="mb-4">
              // The label for the description input field
              <label htmlFor="description" className="block text-sm font-medium">
                Description
              </label>
              // The textarea for the description
              // The id and name of the textarea are both 'description'
              // The current value of the textarea is formData.description
              // When the textarea changes, handleInputChange is called
              // The textarea has some CSS classes for styling
              // The textarea has 4 rows and does not allow resizing
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full mt-1 resize-none"
                rows="4"
              ></textarea>
            </div>
            // A div that contains a submit button
            <div className="flex justify-center">
              // The submit button
              // When clicked, it submits the form
              // The button has some CSS classes for styling
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
              >
                Create Hangout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    // <div>
    // <Modal show={show} onHide={onHide}>
    //   <Modal.Header closeButton className="text-center">
    //     <Modal.Title className=''>New Hangout</Modal.Title> 
    //   </Modal.Header>
    //   <Modal.Body 
    //   className="flex flex-col w-full items-center bg-white rounded-lg shadow-xl p-8 h-auto overflow-auto">
    //     <Form onSubmit={handleSubmit}>
    //       <Form.Group controlId="hangoutName">
    //         <Form.Label>Name</Form.Label>
    //         <Form.Control
    //           type="text"
    //           name="name"
    //           value={formData.name}
    //           onChange={handleInputChange}
    //         />
    //       </Form.Group>
    //       <Form.Group controlId="date">
    //         <Form.Label>Date</Form.Label>
    //         <Form.Control
    //           type="date"
    //           name="date"
    //           value={formData.date}
    //           onChange={handleInputChange}
    //         />
    //         </Form.Group>
    //       {/* New Form.Group for Time */}
    //       <Form.Group controlId="time">
    //         <Form.Label>Time</Form.Label>
    //         <Form.Control
    //           type="text"
    //           name="time"
    //           value={formData.time}
    //           onChange={handleInputChange}
    //         />
    //       </Form.Group>
    //       {/* New Form.Group for Place */}
    //       <Form.Group controlId="place">
    //         <Form.Label>Place</Form.Label>
    //         <Form.Control
    //           type="text"
    //           name="place"
    //           value={formData.place}
    //           onChange={handleInputChange}
    //         />
    //       </Form.Group>
    //       {/* New Form.Group for Description */}
    //       <Form.Group controlId="description">
    //         <Form.Label>Description</Form.Label>
    //         <Form.Control
    //           as="textarea"
    //           name="description"
    //           value={formData.description}
    //           onChange={handleInputChange}
    //         />
    //       </Form.Group>

    //       <Button variant="primary" type="submit">
    //         Create Hangout
    //       </Button>
          
    //     </Form>
    //   </Modal.Body>
    // </Modal>
    // </div>
  );
}

HangoutModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};





{/* // import { Link } from 'react-router-dom';

// export default function Hangout() {
//   return (
//     <div className="bg-white flex max-w-[780px] flex-col items-center pl-16 pr-6 pt-7 pb-12 max-md:px-5">
//       <div className="text-stone-800 text-center text-xl font-semibold tracking-wider w-[325px]">
//         Schedule a meeting
//       </div>
//       <div className="self-stretch mt-14 mb-14 max-md:max-w-full max-md:my-10">
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//           <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
//             <div className="flex grow flex-col items-stretch max-md:mt-10">
//               <div className="text-black text-sm font-medium tracking-wider">
//                 Meeting Title
//               </div>
//               <div className="text-gray-400 text-sm border shadow-2xl bg-white justify-center mt-1.5 pl-3 pr-16 py-4 rounded-xl border-solid border-black items-start max-md:pr-5">
//                 Title
//               </div>
//               <div className="text-stone-800 text-base font-medium tracking-wider mt-6">
//                 Meeting Description
//               </div>
//               <div className="text-gray-400 text-sm border shadow-2xl bg-white mt-1.5 pl-4 pr-16 pt-4 pb-2.5 rounded-xl border-solid border-black items-start max-md:pr-5">
//                 Description
//               </div>
//               <div className="text-stone-800 text-base font-medium tracking-wider mt-7">
//                 Meeting Date
//               </div>
//               <div className="border shadow-2xl bg-white flex justify-between gap-5 px-4 py-3 rounded-xl border-solid border-black items-start">
//                 <div className="text-gray-400 text-sm mt-2">Date</div>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c98f4acd0a97094f1ffac8a80f0eaef9064e1487fd2e4029fd44240bfabf6b5?apiKey=b1110ce74f26469f8c7944650aef6c79&"
//                   className="aspect-[1.12] object-contain object-center w-[19px] overflow-hidden self-stretch shrink-0 max-w-full"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
//             <div className="flex grow flex-col my-auto max-md:mt-10">
//               <div className="text-stone-800 text-base font-medium tracking-wider self-stretch">
//                 Meeting Time
//               </div>
//               <div className="border shadow-2xl bg-white self-stretch flex items-center justify-between gap-5 mt-2 px-4 py-2.5 rounded-xl border-solid border-black">
//                 <div className="text-gray-400 text-sm my-auto">Time</div>
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&"
//                   className="aspect-[1.05] object-contain object-center w-[22px] overflow-hidden self-stretch shrink-0 max-w-full"
//                 />
//               </div>
//               <div className="text-stone-800 text-base font-medium tracking-wider self-stretch mt-5">
//                 Meeting Location
//               </div>
//               <div className="text-gray-400 text-sm border shadow-2xl bg-white self-stretch justify-center mt-1.5 pl-4 pr-16 py-4 rounded-xl border-solid border-black items-start max-md:pr-5">
//                 Location
//               </div>
//             {/* Host button that navigates to the Hangout */}
//             <Link to="/dashboard/hangout">
//               <div className="relative shrink-0 box-border appearance-none bg-blue-600 text-[white] text-center cursor-pointer mt-12 px-20 py-4 rounded-3xl">
//                 Start A Meeting!
//               </div>
//             </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
