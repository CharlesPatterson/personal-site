'use client';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
const PDFViewerClient = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <div className='grid items-center justify-items-center pt-5'>
      <Document
        className='border-2 border-solid border-b-black'
        file='Resume-CharlesPatterson.pdf'
        onLoadSuccess={({ numPages }: { numPages: number }) =>
          setNumPages(numPages)
        }
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default PDFViewerClient;
