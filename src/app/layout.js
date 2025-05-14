import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar';
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio - Emmanuel Mbengo Mayemba',
  description: 'Portfolio de Emmanuel Mbengo Mayemba, développeur web et application',
    icons: {
        icon: '/assets/img/EM.jpg',
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/img/EM.jpg" />
        <link
          href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className={inter.className} id="page-top">
        <Navbar />
        <div className="container-fluid p-0">{children}</div>

        {/* Scripts */}
        <Script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
        <Script id="aos-init">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              AOS.init();
            });
          `}
        </Script>
      </body>
    </html>
  );
}