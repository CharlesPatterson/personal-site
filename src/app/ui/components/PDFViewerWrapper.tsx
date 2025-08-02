'use client';
import dynamic from 'next/dynamic';

const PDFViewerClient = dynamic(() => import('./PDFViewerClient'), {
  ssr: false,
});

const PDFViewer = () => {
  return <PDFViewerClient />;
};

export default PDFViewer;
