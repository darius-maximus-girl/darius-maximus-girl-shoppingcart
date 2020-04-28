import React, { useContext, useEffect } from 'react';
import { PDFform } from './PDFform';
import { Page, Text, View, Image, Document, PDFDownloadLink } from '@react-pdf/renderer';
import { StoreContext } from './contexts/StoreContext';

function Download(props) {

    const { store } = useContext(StoreContext);

    return (
        <div>
            <PDFDownloadLink document={<PDFform cart={store.productsInCart} />} fileName="summary.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download')}
            </PDFDownloadLink>
        </div>
    );
}

export default Download;
