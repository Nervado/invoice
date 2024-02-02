import {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

//const borderColor = '#90e5fc'
//const borderColor = '#b5b5b5'
const borderColor = '#d2d2d2'
const color = '#000000'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 20,
        fontStyle: 'bold',
        fontSize: 8,
    },
    tag: {
        width: '20%',
        height:'100%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        color: color,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: '5px',
    },
    description: {
        width: '13%',
        height:'100%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        color: color,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: '5px',
    },
    command: {
        width: '10%',
        height:'100%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        color: color,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: '5px',
    },
    
  });


const InvoiceTableRow = ({items}:{items: any}) => {
    const rows = items.map((item: any) => 
        <View style={styles.row} key={item.sno.toString()}>
            <Text style={styles.tag}>{item.desc}</Text>
            <Text style={styles.tag}>{item.qty}</Text>
            <Text style={styles.description}>{item.rate}</Text>
            <Text style={styles.command}>{(item.qty * item.rate).toFixed(2)}</Text>
            <Text style={styles.command}>{item.qty}</Text>
            <Text style={styles.command}>{item.qty}</Text>
            <Text style={styles.description}>{item.rate}</Text>
            <Text style={styles.command}>{(item.qty * item.rate).toFixed(2)}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
  
export default InvoiceTableRow