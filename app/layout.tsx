import './globals.css';
import './styles/custom.css';
import './styles/media.css';
import './styles/bootstrap.min.css';
import Head from 'next/head';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </Head>
      <body className="">{children}</body>
    </html>
  );
}
