import React, { useState, Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import '../App.css'

import cityzen1Portfolio from '../Media/cityzen1Portfolio.pdf'

export default function PDFviewer() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    
    function prevPage() {
        setPageNumber(pageNumber - 2);
    }

    function nextPage() {
        setPageNumber(pageNumber + 2);
    }

    return (
        <div className="portfolio-container">
            <div style={{display:"flex"}}>
                <Document file={cityzen1Portfolio} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <Document file={cityzen1Portfolio} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber + 1} />
                </Document>
        </div>
        <div style={{display:"flex"}}>
            <p style={{paddingRight:"1.5rem"}}>Page {pageNumber} of {numPages}</p>
            <button onClick={prevPage}>Previous Page</button>
            <button onClick={nextPage}>Next Page</button>
        </div>
      </div>
    );
  }