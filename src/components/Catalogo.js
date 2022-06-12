// import React, { useState } from 'react'
// import { Viewer } from '@react-pdf-viewer/core'
// import { Worker } from '@react-pdf-viewer/core'

// import "@react-pdf-viewer/core/lib"
// import '@react-pdf-viewer/default-layout'

// import '@react-pdf-viewer/core/lib/styles/index.css';

// import PdfFile from ''

// export const ResumeFile = () => {

//     const [defaultPdfFile] = useState(PdfFile);


//     return (
//         <div className="pdf-container">
          
//                       {defaultPdfFile &&
//                 <>
//                     <div className='worker'>
//                         <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
//                             <Viewer className="viewer" fileUrl={defaultPdfFile} />
//                         </Worker>

//                     </div>
//                 </>
//                 }
//         </div>
//     )
// }