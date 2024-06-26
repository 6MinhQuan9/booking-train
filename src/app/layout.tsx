export default async function LocaleLayout({ children }
  : Readonly<{
    children: React.ReactNode;
  }>) {

  return (
    <html>
      <body>
          {children}
      </body>
    </html>
  );
}
