import MainNav from '@/components/main-nav';
import '../styles/globals.css';

export const metadata = {
  title: 'Fake Store',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
