import {Text, View, StyleSheet } from '@react-pdf/renderer';


const backgroundColor = '#8e8e8e'
//const borderColor = '#b5b5b5'
const borderColor = '#d2d2d2'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: borderColor,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 20,
        textAlign: 'center',
        fontStyle: 'bold',
        fontcolor: 'white',
        fontFamily: 'Helvetica-Bold',
        fontWeight: 700,
        flexGrow: 1,
        fontSize: 8,
    },
    tag: {
        width: '20%',
        height:'100%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        color: '#ffffff',
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
        color: '#ffffff',
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
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: '5px',
    },
    
  });

  const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.tag}>Tag</Text>
        <Text style={styles.tag}>Descrição</Text>
        <Text style={styles.description}>Data</Text>
        <Text style={styles.command}>Hora</Text>
        <Text style={styles.command}>Comando</Text>
        <Text style={styles.command}>Tempo(s)</Text>
        <Text style={styles.description}>Tempo Max(s)</Text>
        <Text style={styles.command}>Status</Text>
    </View>
  );
  
  export default InvoiceTableHeader