// page.js and layout.js are reserved file names

import './globals.css'

// it is also a reserved name which contains title and description etc..
export const metadata = {
  title: 'Focusing', // title of the page
  description: 'Your first NextJS app!'
};

export default function RootLayout({ children }) { // children is the content of the pages 
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
