import MainNav from '@/components/main-nav';
import Footer from '@/components/footer';
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
      <body className="flex h-screen flex-col bg-background text-text">
        <MainNav />
        <main className="container flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
