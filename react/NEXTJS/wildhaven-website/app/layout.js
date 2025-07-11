import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";

import "@/app/_styles/globals.css";

export const metadata = {
  title: { template: "%s / Wildhaven", default: "Welcome / Wildhaven" },
  description:
    "Luxury hotel in the heart of the Italian Alps and the Dolomites. Experience the best of Italian hospitality and cuisine. Wildhaven is a 5-star hotel located in the heart of the Italian Alps and the Dolomites. It is a perfect place for a romantic getaway, a family vacation, or a business trip. The hotel is located in the heart of the Italian Alps and the Dolomites. It is a perfect place for a romantic getaway, a family vacation, or a business trip.",
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
