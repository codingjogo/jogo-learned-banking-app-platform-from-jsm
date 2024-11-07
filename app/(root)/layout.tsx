export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        SIDEBAR
        <main>
            {children}
        </main>
    </>

  );
}
