import React, { useContext, useEffect } from 'react';
import { Page, Text, View, Image, Document, PDFDownloadLink } from '@react-pdf/renderer';
import { StoreContext } from './contexts/StoreContext';

const styles = {
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
    },
    text: {
        margin: 12,
        padding: 10,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman',
        color: 'red',
        border: '2 solid green'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'red',
    },
}


function PDFform(props) {

    const { dispatch, store } = useContext(StoreContext);

    console.log('HELLO STORE', store)


    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>
                    ~ Dolphone Purchase Summary ~
                 </Text>
                {/*HERE I SHOULD GRAB THE USER DATA*/}
                <Image
                    style={styles.image}
                    src="/static/images/quijote1.jpg"
                />
                <Text style={styles.text}>
                    Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
                    Quijote de la Mancha
                </Text>
                <Text >
                    {store.totalPrice}
                </Text>
            </Page>
        </Document>

    );
}

// const Download = () => (
//     <div>
//         <PDFDownloadLink document={<PDFform />} fileName="summary.pdf">
//             {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download')}
//         </PDFDownloadLink>
//     </div>
// )

// export default Download
