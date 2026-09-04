import './globals.css';

export const metadata = {
  title: 'Alpha Capital — social trading on Ask Analyst',
  description: 'Pakistan equity social trading: feed, broker consensus, portfolios and leaderboards.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
