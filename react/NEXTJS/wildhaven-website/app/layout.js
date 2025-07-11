import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "Wildhaven",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
        </header>
        <Navigation />
        {children}
        <footer>
          <p>Copyright by Wildhaven &copy; 2025</p>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
