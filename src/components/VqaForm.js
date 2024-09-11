// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../App.css'
// import logo from '../assests/onepgr-logo.webp';

// const VqaForm = () => {
//   // State to manage form data and errors
//   const [formData, setFormData] = useState({
//     email: '',
//     domainUrl: '',
//     jobReqUrl: '',
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [formErrors, setFormErrors] = useState({});

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Validate form before submission
//   const validateForm = () => {
//     const errors = {};
//     if (!formData.email) errors.email = 'Email is required';
//     if (!formData.domainUrl) errors.domainUrl = 'Domain URL is required';
//     if (!formData.jobReqUrl) errors.jobReqUrl = 'Job Requisition URL is required';
//     return errors;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form data
//     const errors = validateForm();
//     setIsLoading(true);
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       toast.error('Please fill out all required fields');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3000/vqa', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {

//         toast.success('VQA created successfully!');
//         setFormData({
//           email: '',
//           domainUrl: '',
//           jobReqUrl: '',
//         });
//         setIsLoading(false);

//         setFormData({
//           email: '',
//           domainUrl: '',
//           jobReqUrl: '',
//         });
//       } else {
//         setIsLoading(false);
//         toast.error('Failed to create VQA');
//       }
//     } catch (error) {
//       setIsLoading(false);
//       toast.error('Error submitting form');

//     }
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-brand">
//           <img src={logo} alt="Document Icon" className="navbar-icon" />
//           <span className="navbar-logo-text"></span>
//         </div>
//       </nav>
//       <div className="form-container d-flex justify-content-center align-items-center">
//         <div className="card form-card">
//           <form onSubmit={handleSubmit} className="form-box">
//             <div className="mb-4">
//               <div className="form-floating">
//                 <input
//                   className={`form-control ${formErrors.jobReqUrl ? 'is-invalid' : ''}`}
//                   id="jobReqUrl"
//                   name="jobReqUrl"
//                   type="url"
//                   value={formData.jobReqUrl}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label htmlFor="jobReqUrl">Job Requisition URL (e.g., https://example.com/job-requisition)</label>
//                 {formErrors.jobReqUrl && <div className="invalid-feedback">{formErrors.jobReqUrl}</div>}
//               </div>
//               <p className="mb-2 text-sm">
//                 Please enter the URL of the job requisition you're applying for.
//               </p>

//             </div>

//             <div className="mb-4">
//               <div className="form-floating">
//                 <input
//                   className={`form-control ${formErrors.domainUrl ? 'is-invalid' : ''}`}
//                   id="domainUrl"
//                   name="domainUrl"
//                   type="url"
//                   value={formData.domainUrl}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label htmlFor="domainUrl">Domain URL (e.g., https://example.com)</label>
//                 {formErrors.domainUrl && <div className="invalid-feedback">{formErrors.domainUrl}</div>}
//               </div>
//               <p className="mb-2 text-sm">Enter the domain URL of your organization.</p>
//             </div>

//             <div className="mb-4">
//               <div className="form-floating mb-3 mb-md-0">
//                 <input
//                   className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="name@example.com"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <label htmlFor="email">Email address</label>
//                 {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
//               </div>
//             </div>
//             <button type="submit" className="btn btn-primary btn-sm align-left">Create VQA</button>

//           </form>
//           {isLoading && (
//             <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
//               style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999 }}>
//               <div class="loader-container">
//                 <div class="circle-loader"></div>
//               </div>
//             </div>
//           )}
//           <ToastContainer />
//         </div>
//       </div>
//     </>
//   );
// };

// export default VqaForm;
