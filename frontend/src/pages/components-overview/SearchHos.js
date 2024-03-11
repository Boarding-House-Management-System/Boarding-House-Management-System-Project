// import React, { useState } from 'react';

// function Form() {
//   // Define state variables to store form data
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: ''
//   });

//   // Handle form input changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData); // You can do something with the form data here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//       </label>
//       <button type="button">Preview</button>
//       <br />
//       <label>
//         Room ID:
//         <input type="text" name="roomID" value={formData.roomID} onChange={handleInputChange} />
//       </label>

//       <br />
//       <button type="search">Search</button>
//     </form>
//   );
// }

// export default Form;

import { useState } from 'react';
import './SearchHos.css';

const Create = () => {
  const [name, setName] = useState('');
  const [ID, setID] = useState('');

  return (
    <div className="create">
      <form>
        <label className="create__name">
          Name:
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
          <button className="create__name-button-preview">Preview</button>
        </label>
        <label>
          Room ID:
          <input type="text" required value={ID} onChange={(e) => setID(e.target.value)} />
        </label>

        <button className="create__button-search">Search</button>
      </form>
    </div>
  );
};

export default Create;
