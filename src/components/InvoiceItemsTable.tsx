import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace';
import InvoiceTableFooter from './InvoiceTableFooter';

const tableRowsCount = 11;

//const borderColor = '#b5b5b5'
const borderColor = '#d2d2d2'
const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 2,
        borderWidth: 1,
        borderColor: borderColor,
    },
});

  const InvoiceItemsTable = ({invoice}:{invoice: any}) => (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow items={invoice.items} />
        
        
    </View>
  );
  
  export default InvoiceItemsTable

  export {InvoiceItemsTable}


  /**
   * <InvoiceTableFooter items={invoice.items} />
   * <InvoiceTableBlankSpace rowsCount={ tableRowsCount - invoice.items.length} />
   */