import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function HangoutModal({ show, onHide }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    onHide(); // Close the modal after form submission
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>New Hangout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="hangoutName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            </Form.Group>
          {/* New Form.Group for Time */}
          <Form.Group controlId="time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="text"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* New Form.Group for Place */}
          <Form.Group controlId="place">
            <Form.Label>Place</Form.Label>
            <Form.Control
              type="text"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* New Form.Group for Description */}
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Hangout
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
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
