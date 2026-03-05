import { Helmet } from "react-helmet-async";

export default function StructuredData() {
    const organizationSchema = {
        "@context" : "https://schema.org",
        "@type": "FinancialService",
        "name": "Cashmoov",
        "description": "Leader du transfert d'argent en Guinée. Service de mobile money et paiement électronique.",
        "url": "https://cashmoov.net",
        "logo": "https://cashmoov.net/images/LogoCashMoov.png",
        "image": "https://cashmoov.net/images/LogoCashMoov.png",
        "telephone": "+224-621-64-00-00, +224-661-64-00-00, +224-657-64-00-00",
        "email": "contact@cashmoov.net",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "GN",
            "addressLocality": "Conakry",
            "addressRegion": "Conakry",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "9.6412",
            "longitude": "-13.5784",
        },
        "areaServed": {
            "@type": "Country",
            "name": "Guinée"
        },
        "sameAs": [
            "https://www.facebook.com/Cashmoov01/",
            "https://www.linkedin.com/company/cash-moov/",
            "https://www.instagram.com/cashmoov/",
            "https://x.com/CashMoov",
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Helmet>
    );
}