// import React from 'react';

// import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
// import VideoRecorder from './components/VideoRecorder';
// // import VqaForm from './components/VqaForm';

// const App = () => {
  

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/application" element={<VideoRecorder />} />
//         {/* <Route exact path="/VqaForm" element={<VqaForm />} /> */}
//         <Route path="*" element={<Navigate to="/application" />} />
//         <Route path="/" element={<Navigate to="/application" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library
import VideoRecorder from './components/VideoRecorder';

const App = () => {
  useEffect(() => {
    // Generate or retrieve a unique identifier for the user
    let uid = localStorage.getItem("uid");
    if (!uid) {
      uid = uuidv4(); // Generate a new UUID
      localStorage.setItem("uid", uid); // Save it in localStorage
    }

    // Set user details for FullStory
    window.FS?.identify?.(uid, {
      displayName: "Anonymous User"
    
    });
    console.log(`FullStory identify called for UID: ${uid}`);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/application" element={<VideoRecorder />} />
        <Route path="*" element={<Navigate to="/application" replace />} />
        <Route path="/" element={<Navigate to="/application" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
