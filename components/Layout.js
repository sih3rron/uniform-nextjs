import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../components/Navbar'

const Layout = ({children})=>{

    return ( 
        <>
        <Head>
            <title> my page title </title>
        </Head>

        <Script id="GA4-TM" strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=G-TSEWB05FXV`} />
        <Script id="GA4-DL" strategy='lazyOnload'>
            {
            `window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TSEWB05FXV', {'debug_mode' :true});`
            }
        </Script>
        <Navbar />
        {children}
        </>
    );

};

export default Layout;