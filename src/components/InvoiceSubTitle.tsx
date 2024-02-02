import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 2,
        fontWeight: 'bold',
    },
    reportTitle:{
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',    
        fontFamily: 'Helvetica',
    }
  });


const InvoiceSubTitle = ({title}: {title: string}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
  );
  
export default InvoiceSubTitle

export {InvoiceSubTitle}