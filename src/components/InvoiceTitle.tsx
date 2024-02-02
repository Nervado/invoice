import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
        fontFamily: 'Helvetica-Bold',
    },
    reportTitle:{
        fontSize: 12,
        textAlign: 'center',
    }
  });


const InvoiceTitle = ({title}: {title: string}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
  );
  
export default InvoiceTitle

export {InvoiceTitle}