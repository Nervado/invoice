import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 10,
        fontWeight: 'bold',
        marginBottom:20,
    },
    reportTitle:{
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'right',
        flexGrow: 1,
        borderBottom:0.5
    }
  });


const ReportDate = ({title}: {title: string}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
  );
  
export default ReportDate

export {ReportDate}