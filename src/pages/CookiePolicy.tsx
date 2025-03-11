import PageNavigation from '../components/PageNavigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function CookiePolicy() {
  const { language } = useLanguage();
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);

  const getLocalizedContent = () => {
    if (language === 'en') {
      return {
        title: "Cookie Policy",
        lastUpdated: "Last updated",
        sections: [
          {
            title: "1. What are cookies?",
            content: "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the website."
          },
          {
            title: "2. How we use cookies",
            content: "We use cookies to:",
            items: [
              "Improve the functionality of our website and personalize your user experience.",
              "Understand how you use our website, so we can improve it.",
              "Show relevant advertisements on other websites you visit."
            ]
          },
          {
            title: "3. Types of cookies we use",
            subtitles: [
              {
                title: "Necessary cookies",
                content: "These cookies are essential to enable you to navigate through the website and use its features. Without these cookies, the services you have asked for, such as remembering your login details, cannot be provided.",
                table: {
                  headers: ["Name", "Purpose", "Expiry"],
                  rows: [
                    ["session_id", "Stores your session information", "Session"],
                    ["cookiePreferences", "Stores your cookie preferences", "1 year"]
                  ]
                }
              },
              {
                title: "Analytical cookies",
                content: "These cookies collect information about how visitors use our website, for instance which pages they visit most often and if they get error messages. These cookies collect anonymized information and are used to improve our website.",
                table: {
                  headers: ["Name", "Purpose", "Expiry"],
                  rows: [
                    ["_ga", "Google Analytics - Distinguishes users", "2 years"],
                    ["_gid", "Google Analytics - Distinguishes users", "24 hours"],
                    ["_gat", "Google Analytics - Throttles request rate", "1 minute"]
                  ]
                }
              },
              {
                title: "Marketing cookies",
                content: "These cookies are used to make advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and to help measure the effectiveness of advertising campaigns.",
                table: {
                  headers: ["Name", "Purpose", "Expiry"],
                  rows: [
                    ["_fbp", "Facebook Pixel - Identifies browsers for advertising purposes", "3 months"],
                    ["ads/ga-audiences", "Google Ads - Used by Google AdWords for remarketing", "Session"]
                  ]
                }
              },
              {
                title: "Preference cookies",
                content: "These cookies remember choices you make to improve your experience, such as your language preference or the region you are in.",
                table: {
                  headers: ["Name", "Purpose", "Expiry"],
                  rows: [
                    ["language", "Remembers your language preference", "1 year"]
                  ]
                }
              }
            ]
          },
          {
            title: "4. How to manage cookies",
            content: "You can change your cookie preferences at any time by clicking on the \"Cookie Settings\" link in the footer of our website.",
            paragraph: "Most web browsers also allow you to manage cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org."
          },
          {
            title: "5. Changes to our cookie policy",
            content: "We may update our cookie policy from time to time. We encourage you to periodically review this page to stay informed of any changes."
          },
          {
            title: "6. Contact",
            content: "If you have any questions about our cookie policy, please contact us at:",
            contact: [
              "Email: support@sandedesign.nl",
              "Phone: +31 45 209 2102",
              "Address: Provincialeweg-Zuid 70, Oirsbeek, 6438 BG"
            ]
          }
        ],
        cookieSettings: {
          title: "Adjust Cookie Settings",
          content: "You can adjust your cookie settings below. Necessary cookies cannot be disabled as they are essential for the functioning of the website.",
          button: "Adjust Cookie Settings"
        }
      };
    } else if (language === 'de') {
      return {
        title: "Cookie-Richtlinie",
        lastUpdated: "Zuletzt aktualisiert",
        sections: [
          {
            title: "1. Was sind Cookies?",
            content: "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden häufig verwendet, um Websites effizienter zu gestalten und den Eigentümern der Website Informationen zu liefern."
          },
          {
            title: "2. Wie wir Cookies verwenden",
            content: "Wir verwenden Cookies, um:",
            items: [
              "Die Funktionalität unserer Website zu verbessern und Ihre Benutzererfahrung zu personalisieren.",
              "Zu verstehen, wie Sie unsere Website nutzen, damit wir sie verbessern können.",
              "Relevante Werbung auf anderen Websites zu zeigen, die Sie besuchen."
            ]
          },
          {
            title: "3. Arten von Cookies, die wir verwenden",
            subtitles: [
              {
                title: "Notwendige Cookies",
                content: "Diese Cookies sind unerlässlich, um Ihnen die Navigation durch die Website zu ermöglichen und ihre Funktionen zu nutzen. Ohne diese Cookies können die von Ihnen angeforderten Dienste, wie z.B. das Speichern Ihrer Anmeldedaten, nicht bereitgestellt werden.",
                table: {
                  headers: ["Name", "Zweck", "Ablauf"],
                  rows: [
                    ["session_id", "Speichert Ihre Sitzungsinformationen", "Sitzung"],
                    ["cookiePreferences", "Speichert Ihre Cookie-Einstellungen", "1 Jahr"]
                  ]
                }
              },
              {
                title: "Analytische Cookies",
                content: "Diese Cookies sammeln Informationen darüber, wie Besucher unsere Website nutzen, z.B. welche Seiten sie am häufigsten besuchen und ob sie Fehlermeldungen erhalten. Diese Cookies sammeln anonymisierte Informationen und werden verwendet, um unsere Website zu verbessern.",
                table: {
                  headers: ["Name", "Zweck", "Ablauf"],
                  rows: [
                    ["_ga", "Google Analytics - Unterscheidet Benutzer", "2 Jahre"],
                    ["_gid", "Google Analytics - Unterscheidet Benutzer", "24 Stunden"],
                    ["_gat", "Google Analytics - Drosselt Anforderungsrate", "1 Minute"]
                  ]
                }
              },
              {
                title: "Marketing-Cookies",
                content: "Diese Cookies werden verwendet, um Werbung relevanter für Sie und Ihre Interessen zu gestalten. Sie werden auch verwendet, um die Anzahl der Anzeigen einer Werbung zu begrenzen und die Wirksamkeit von Werbekampagnen zu messen.",
                table: {
                  headers: ["Name", "Zweck", "Ablauf"],
                  rows: [
                    ["_fbp", "Facebook Pixel - Identifiziert Browser für Werbezwecke", "3 Monate"],
                    ["ads/ga-audiences", "Google Ads - Von Google AdWords für Remarketing verwendet", "Sitzung"]
                  ]
                }
              },
              {
                title: "Präferenz-Cookies",
                content: "Diese Cookies merken sich Ihre Entscheidungen, um Ihre Erfahrung zu verbessern, wie z.B. Ihre Sprachpräferenz oder die Region, in der Sie sich befinden.",
                table: {
                  headers: ["Name", "Zweck", "Ablauf"],
                  rows: [
                    ["language", "Speichert Ihre Sprachpräferenz", "1 Jahr"]
                  ]
                }
              }
            ]
          },
          {
            title: "4. Wie Sie Cookies verwalten können",
            content: "Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf den Link \"Cookie-Einstellungen\" im Footer unserer Website klicken.",
            paragraph: "Die meisten Webbrowser ermöglichen es Ihnen auch, Cookies über die Browser-Einstellungen zu verwalten. Um mehr über Cookies zu erfahren, einschließlich wie Sie sehen können, welche Cookies gesetzt wurden und wie Sie diese verwalten und löschen können, besuchen Sie www.allaboutcookies.org."
          },
          {
            title: "5. Änderungen an unserer Cookie-Richtlinie",
            content: "Wir können unsere Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Wir empfehlen Ihnen, diese Seite regelmäßig zu überprüfen, um über Änderungen informiert zu bleiben."
          },
          {
            title: "6. Kontakt",
            content: "Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter:",
            contact: [
              "E-Mail: support@sandedesign.nl",
              "Telefon: +31 45 209 2102",
              "Adresse: Provincialeweg-Zuid 70, Oirsbeek, 6438 BG"
            ]
          }
        ],
        cookieSettings: {
          title: "Cookie-Einstellungen anpassen",
          content: "Sie können Ihre Cookie-Einstellungen unten anpassen. Notwendige Cookies können nicht deaktiviert werden, da sie für das Funktionieren der Website unerlässlich sind.",
          button: "Cookie-Einstellungen anpassen"
        }
      };
    } else {
      // Default to Dutch
      return {
        title: "Cookie Policy",
        lastUpdated: "Laatst bijgewerkt",
        sections: [
          {
            title: "1. Wat zijn cookies?",
            content: "Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt. Ze worden veel gebruikt om websites efficiënter te laten werken en om informatie te verstrekken aan de eigenaren van de website."
          },
          {
            title: "2. Hoe gebruiken wij cookies?",
            content: "Wij gebruiken cookies om:",
            items: [
              "De functionaliteit van onze website te verbeteren en uw gebruikerservaring te personaliseren.",
              "Te begrijpen hoe u onze website gebruikt, zodat we deze kunnen verbeteren.",
              "Relevante advertenties te tonen op andere websites die u bezoekt."
            ]
          },
          {
            title: "3. Soorten cookies die we gebruiken",
            subtitles: [
              {
                title: "Noodzakelijke cookies",
                content: "Deze cookies zijn essentieel om u in staat te stellen door de website te navigeren en de functies te gebruiken. Zonder deze cookies kunnen de diensten die u hebt gevraagd, zoals het onthouden van uw inloggegevens, niet worden geleverd.",
                table: {
                  headers: ["Naam", "Doel", "Vervaltijd"],
                  rows: [
                    ["session_id", "Bewaart uw sessie-informatie", "Sessie"],
                    ["cookiePreferences", "Slaat uw cookie-voorkeuren op", "1 jaar"]
                  ]
                }
              },
              {
                title: "Analytische cookies",
                content: "Deze cookies verzamelen informatie over hoe bezoekers onze website gebruiken, bijvoorbeeld welke pagina's ze het vaakst bezoeken en of ze foutmeldingen krijgen. Deze cookies verzamelen geanonimiseerde informatie en worden gebruikt om onze website te verbeteren.",
                table: {
                  headers: ["Naam", "Doel", "Vervaltijd"],
                  rows: [
                    ["_ga", "Google Analytics - Onderscheidt gebruikers", "2 jaar"],
                    ["_gid", "Google Analytics - Onderscheidt gebruikers", "24 uur"],
                    ["_gat", "Google Analytics - Beperkt verzoeksnelheid", "1 minuut"]
                  ]
                }
              },
              {
                title: "Marketing cookies",
                content: "Deze cookies worden gebruikt om advertenties relevanter te maken voor u en uw interesses. Ze worden ook gebruikt om het aantal keren dat u een advertentie ziet te beperken en om de effectiviteit van reclamecampagnes te meten.",
                table: {
                  headers: ["Naam", "Doel", "Vervaltijd"],
                  rows: [
                    ["_fbp", "Facebook Pixel - Identificeert browsers voor advertentiedoeleinden", "3 maanden"],
                    ["ads/ga-audiences", "Google Ads - Gebruikt door Google AdWords voor remarketing", "Sessie"]
                  ]
                }
              },
              {
                title: "Voorkeurscookies",
                content: "Deze cookies onthouden keuzes die u maakt om uw ervaring te verbeteren, zoals uw taalvoorkeur of de regio waarin u zich bevindt.",
                table: {
                  headers: ["Naam", "Doel", "Vervaltijd"],
                  rows: [
                    ["language", "Onthoudt uw taalvoorkeur", "1 jaar"]
                  ]
                }
              }
            ]
          },
          {
            title: "4. Hoe kunt u cookies beheren?",
            content: "U kunt uw cookievoorkeuren op elk moment wijzigen door op de link \"Cookie-instellingen\" in de footer van onze website te klikken.",
            paragraph: "De meeste webbrowsers staan u ook toe om cookies te beheren via de instellingen van de browser. Om meer te weten te komen over cookies, inclusief hoe u kunt zien welke cookies zijn ingesteld en hoe u deze kunt beheren en verwijderen, bezoek www.allaboutcookies.org."
          },
          {
            title: "5. Wijzigingen in ons cookiebeleid",
            content: "We kunnen dit cookiebeleid van tijd tot tijd bijwerken. We raden u aan deze pagina regelmatig te controleren om op de hoogte te blijven van eventuele wijzigingen."
          },
          {
            title: "6. Contact",
            content: "Als u vragen heeft over ons cookiebeleid, neem dan contact met ons op via:",
            contact: [
              "E-mail: support@sandedesign.nl",
              "Telefoon: +31 45 209 2102",
              "Adres: Provincialeweg-Zuid 70, Oirsbeek, 6438 BG"
            ]
          }
        ],
        cookieSettings: {
          title: "Cookie-instellingen aanpassen",
          content: "U kunt uw cookie-instellingen hieronder aanpassen. Noodzakelijke cookies kunnen niet worden uitgeschakeld omdat deze essentieel zijn voor het functioneren van de website.",
          button: "Cookie-instellingen aanpassen"
        }
      };
    }
  };

  const content = getLocalizedContent();

  return (
    <div className="bg-[var(--primary)] min-h-screen">
      <PageNavigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8">
              <span className="gradient-text">{content.title}</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">
                {content.lastUpdated}: {new Date().toLocaleDateString()}
              </p>
              
              {content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">{section.title}</h2>
                  <p className="text-gray-300">
                    {section.content}
                  </p>
                  
                  {section.paragraph && (
                    <p className="text-gray-300">
                      {section.paragraph}
                    </p>
                  )}
                  
                  {section.items && (
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  
                  {section.subtitles && section.subtitles.map((subtitle, i) => (
                    <div key={i} className="mt-6 mb-6">
                      <h3 className="text-xl font-semibold mt-6 mb-3">{subtitle.title}</h3>
                      <p className="text-gray-300">
                        {subtitle.content}
                      </p>
                      
                      {subtitle.table && (
                        <table className="border-collapse w-full mt-4 mb-6">
                          <thead>
                            <tr className="bg-black/30">
                              {subtitle.table.headers.map((header, j) => (
                                <th key={j} className="border border-gray-600 p-2 text-left">{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {subtitle.table.rows.map((row, j) => (
                              <tr key={j}>
                                {row.map((cell, k) => (
                                  <td key={k} className="border border-gray-600 p-2">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  ))}
                  
                  {section.contact && (
                    <p className="text-gray-300">
                      {section.contact.map((line, i) => (
                        <span key={i}>
                          {line}<br />
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              ))}
              
              <div className="mt-12 p-6 bg-black/30 border border-[var(--accent-purple)] rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{content.cookieSettings.title}</h3>
                <p className="text-gray-300 mb-6">
                  {content.cookieSettings.content}
                </p>
                <button
                  onClick={() => {
                    // Directly show the cookie banner by manipulating localStorage
                    localStorage.removeItem('cookiePreferences');
                    // Then dispatch the event to show the cookie banner
                    const cookieBannerEvent = new CustomEvent('showCookieBanner');
                    window.dispatchEvent(cookieBannerEvent);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] text-white rounded-lg font-semibold hover:brightness-110 transition-all duration-300"
                >
                  {content.cookieSettings.button}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}