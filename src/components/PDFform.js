import React from 'react';
import { Page, Text, View, Image, Document, PDFDownloadLink } from '@react-pdf/renderer';

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
        // marginVertical: 15,
        // marginHorizontal: 100,
        width: 100,
        height: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'red',
    },
}

export function PDFform(props) {

    const { cart } = props;

    console.log('CAAAART', cart)
    return (
        <Document>
            <Page style={styles.body}>
                {cart.map(item => {
                    return (
                        <Text>
                            {item.model}, {item.price}
                            <Image
                                style={styles.image}
                                src={item.img}
                            />
                        </Text>
                    )
                })}
            </Page>
        </Document>
    );
}

