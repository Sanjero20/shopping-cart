import '../styles/globals.css';

import MainNav from '@/components/main-nav';

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
      <body className="flex h-screen min-h-screen flex-col bg-background text-text">
        <MainNav />
        <main className="container flex-1 pb-4">{children}</main>
      </body>
    </html>
  );
}
