import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

export const metadata = {
  title: "Wildhaven",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
        {children}
        <footer>
          <p>Wildhaven &copy; 2025</p>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
