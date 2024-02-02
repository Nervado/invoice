import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({


    container: {
        display:'flex',
        flexDirection: 'row',
        borderBottomColor: '#008000',
        backgroundColor: '#008000',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 20,
        fontcolor: 'white',
        fontWeight: 700,
        padding: '10px',
    },
   
    reportTitle:{
        fontSize: 10,
        color: '#ffffff',
        textAlign: 'center',
        paddingTop:'5px',
        alignItems: 'center',
        flexGrow:1,
        fontFamily: 'Helvetica-Bold',
    }
  });


const TableTitle = ({title}: {title: string}) => (

    <View style={styles.container}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
  );
  
export default TableTitle

export {TableTitle};