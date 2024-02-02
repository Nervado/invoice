import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle';
// import {Font} from '@react-pdf/renderer';
import InvoiceSubTitle from './InvoiceSubTitle';
import TableTitle from './TableTitle';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoiceThankYouMsg from './InvoiceThankYouMsg';
import logo from '../assets/petrobras.png'
import ReportDate from './ReportDate';

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 120,
        height: 25,
        marginRight: 'auto'
    }
  });
  
const Invoice = ({invoice}: {invoice: any}) => (
            <Document>
                <Page size="A4" style={styles.page}>
                    <Image style={styles.logo} src={logo} />
                    <InvoiceTitle title='FPSO P77 - Relatório de Operação de Válvulas de Segurança'/>
                    <InvoiceSubTitle title='objetivo: exibir a última atuação de falha segura (fechamento para SDV e abertura para BDV)'/>
                    <ReportDate title='01/02/2024 16:00'/>
                    <TableTitle title='Produção de Óleo - Subsistema 1210'/>
                    <InvoiceItemsTable invoice={invoice} />
                    
                </Page>
            </Document>
        );
  
export default Invoice


/**<InvoiceThankYouMsg /> */