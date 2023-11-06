import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import CartProvider from '../store/CartProvider';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <CartProvider >
     <Component {...pageProps} />
     </CartProvider>
    
    </Layout>
  );
  
}

export default MyApp
