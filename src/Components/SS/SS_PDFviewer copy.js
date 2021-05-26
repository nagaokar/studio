import React, { useState, Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import cityzen1Portfolio from '../Media/cityzen1Portfolio.pdf'


export default class PDFviewer extends Component {

    state = {numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => { 
        this.setState({ numPages });
    };

    goToPrevPage = () =>  this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () => this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

    render() {

        const { pageNumber, numPages, onDocumentLoadSuccess, goToNextPage, goToPrevPage } = this.state;

        return (
            <div style={{width:2000}}>
                <Document file={cityzen1Portfolio} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                
                <button onClick={goToPrevPage}>Previous Page</button>
                <button onClick={goToNextPage}>Next Page</button>

                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }    
}