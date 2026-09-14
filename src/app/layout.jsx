import "./tokens.css";
import "./globals.css";

export const metadata = {
  title: "Surfe a Realidade · Thiago Espíndola",
  description:
    "Você não nasceu travado, foi treinado. Comece pelo kit gratuito.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Public+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* ==========================================================
            META PIXEL: colar o ID e descomentar.
            Nao preencher com ID de teste, o disparo e real.

            <script
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', 'SEU_PIXEL_ID');
                fbq('track', 'PageView');`,
              }}
            />
            ========================================================== */}

        {/* ==========================================================
            GOOGLE ANALYTICS (GA4): colar o measurement ID e descomentar.

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU_ID" />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SEU_ID');`,
              }}
            />
            ========================================================== */}
      </head>
      <body>{children}</body>
    </html>
  );
}
