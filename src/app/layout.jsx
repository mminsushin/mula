import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Mula | 프리미엄 아기요 방수패드',
  description: '우리아기를 위한 쉼표, 프리미엄 아기요 방수패드 전문 브랜드 뮤라(Mula)입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
