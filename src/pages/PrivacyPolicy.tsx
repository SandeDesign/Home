import PageNavigation from '../components/PageNavigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const getLocalizedContent = () => {
    if (language === 'en') {
      return {
        title: "Privacy Policy",
        lastUpdated: "Last updated",
        sections: [
          {
            title: "1. Introduction",
            content: "SandeDesign (\"we\", \"us\", or \"our\") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we handle your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you."
          },
          {
            title: "2. The data we collect",
            content: "Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).",
            list: "We may collect, use, store and transfer different kinds of personal data about you, including:",
            items: [
              "Identity Data such as first name, last name, username or similar identifier.",
              "Contact Data such as email address and telephone numbers.",
              "Technical Data such as IP address, login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.",
              "Usage Data such as information about how you use our website, products and services.",
              "Marketing and Communications Data such as your preferences for receiving marketing from us and our third parties and your communication preferences."
            ]
          },
          {
            title: "3. How we use your personal data",
            content: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
            items: [
              "Where we have your consent.",
              "Where we need to perform the contract we are about to enter into or have entered into with you.",
              "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.",
              "Where we need to comply with a legal or regulatory obligation."
            ]
          },
          {
            title: "4. Data retention",
            content: "We will only retain your personal data for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements."
          },
          {
            title: "5. Your legal rights",
            content: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:",
            items: [
              "Request access to your personal data.",
              "Request correction of your personal data.",
              "Request erasure of your personal data.",
              "Object to processing of your personal data.",
              "Request restriction of processing your personal data.",
              "Request transfer of your personal data.",
              "Withdraw consent."
            ]
          },
          {
            title: "6. Cookies",
            content: "You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. For more information about the cookies we use, please see our Cookie Policy."
          },
          {
            title: "7. Changes to the privacy policy",
            content: "We keep our privacy policy under regular review. This version was last updated on the date stated at the top of this page."
          },
          {
            title: "8. Contact",
            content: "If you have any questions about this privacy policy or our privacy practices, please contact us at:",
            contact: [
              "Email: support@sandedesign.nl",
              "Phone: +31 45 209 2102",
              "Address: Provincialeweg-Zuid 70, Oirsbeek, 6438 BG"
            ]
          }
        ]
      };
    } else if (language === 'de') {
      return {
        title: "Datenschutzrichtlinie",
        lastUpdated: "Zuletzt aktualisiert",
        sections: [
          {
            title: "1. Einleitung",
            content: "SandeDesign (\"wir\", \"uns\" oder \"unser\") respektiert Ihre Privatsphäre und verpflichtet sich, Ihre persönlichen Daten zu schützen. Diese Datenschutzrichtlinie informiert Sie darüber, wie wir mit Ihren persönlichen Daten umgehen, wenn Sie unsere Website besuchen (unabhängig davon, von wo aus Sie diese besuchen), und informiert Sie über Ihre Datenschutzrechte und wie das Gesetz Sie schützt."
          },
          {
            title: "2. Die Daten, die wir sammeln",
            content: "Persönliche Daten oder persönliche Informationen bedeuten alle Informationen über eine Person, durch die diese Person identifiziert werden kann. Dazu gehören keine Daten, bei denen die Identität entfernt wurde (anonyme Daten).",
            list: "Wir können verschiedene Arten von persönlichen Daten über Sie sammeln, verwenden, speichern und übertragen, darunter:",
            items: [
              "Identitätsdaten wie Vorname, Nachname, Benutzername oder ähnliche Kennungen.",
              "Kontaktdaten wie E-Mail-Adresse und Telefonnummern.",
              "Technische Daten wie IP-Adresse, Anmeldedaten, Browsertyp und -version, Zeitzoneneinstellung und Standort, Browser-Plugin-Typen und -Versionen, Betriebssystem und Plattform sowie andere Technologien auf den Geräten, die Sie für den Zugriff auf diese Website verwenden.",
              "Nutzungsdaten wie Informationen darüber, wie Sie unsere Website, Produkte und Dienstleistungen nutzen.",
              "Marketing- und Kommunikationsdaten wie Ihre Präferenzen für den Erhalt von Marketing von uns und unseren Dritten und Ihre Kommunikationspräferenzen."
            ]
          },
          {
            title: "3. Wie wir Ihre persönlichen Daten verwenden",
            content: "Wir werden Ihre persönlichen Daten nur verwenden, wenn das Gesetz es uns erlaubt. Am häufigsten werden wir Ihre persönlichen Daten unter folgenden Umständen verwenden:",
            items: [
              "Wenn wir Ihre Zustimmung haben.",
              "Wenn wir den Vertrag erfüllen müssen, den wir mit Ihnen abschließen werden oder abgeschlossen haben.",
              "Wenn es für unsere berechtigten Interessen (oder die eines Dritten) notwendig ist und Ihre Interessen und Grundrechte diese Interessen nicht überwiegen.",
              "Wenn wir einer gesetzlichen oder behördlichen Verpflichtung nachkommen müssen."
            ]
          },
          {
            title: "4. Datenspeicherung",
            content: "Wir werden Ihre persönlichen Daten nur so lange aufbewahren, wie es zur Erfüllung der Zwecke, für die wir sie erhoben haben, erforderlich ist, einschließlich der Erfüllung gesetzlicher, buchhalterischer oder berichtspflichtiger Anforderungen."
          },
          {
            title: "5. Ihre gesetzlichen Rechte",
            content: "Unter bestimmten Umständen haben Sie nach den Datenschutzgesetzen Rechte in Bezug auf Ihre persönlichen Daten, einschließlich des Rechts auf:",
            items: [
              "Zugang zu Ihren persönlichen Daten anfordern.",
              "Korrektur Ihrer persönlichen Daten anfordern.",
              "Löschung Ihrer persönlichen Daten anfordern.",
              "Widerspruch gegen die Verarbeitung Ihrer persönlichen Daten.",
              "Einschränkung der Verarbeitung Ihrer persönlichen Daten anfordern.",
              "Übertragung Ihrer persönlichen Daten anfordern.",
              "Einwilligung widerrufen."
            ]
          },
          {
            title: "6. Cookies",
            content: "Sie können Ihren Browser so einstellen, dass er alle oder einige Browser-Cookies ablehnt oder Sie warnt, wenn Websites Cookies setzen oder darauf zugreifen. Wenn Sie Cookies deaktivieren oder ablehnen, beachten Sie bitte, dass einige Teile dieser Website möglicherweise unzugänglich werden oder nicht richtig funktionieren. Weitere Informationen zu den von uns verwendeten Cookies finden Sie in unserer Cookie-Richtlinie."
          },
          {
            title: "7. Änderungen der Datenschutzrichtlinie",
            content: "Wir überprüfen unsere Datenschutzrichtlinie regelmäßig. Diese Version wurde zuletzt am oben auf dieser Seite angegebenen Datum aktualisiert."
          },
          {
            title: "8. Kontakt",
            content: "Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter:",
            contact: [
              "E-Mail: support@sandedesign.nl",
              "Telefon: +31 45 209 2102",
              "Adresse: Provincialeweg-Zuid 70, Oirsbeek, 6438 BG"
            ]
          }
        ]
      };
    } else {
      // Default to Dutch
      return {
        title: "Privacy Policy",
        lastUpdated: "Laatst bijgewerkt",
        sections: [
          {
            title: "1. Inleiding",
            content: "SandeDesign (\"wij\", \"ons\", of \"onze\") respecteert uw privacy en zet zich in voor het beschermen van uw persoonlijke gegevens. Dit privacybeleid informeert u over hoe wij omgaan met uw persoonlijke gegevens wanneer u onze website bezoekt (ongeacht waar u deze bezoekt) en vertelt u over uw privacyrechten en hoe de wet u beschermt."
          },
          {
            title: "2. De gegevens die we verzamelen",
            content: "Persoonlijke gegevens, of persoonlijke informatie, betekent elke informatie over een individu waaruit die persoon kan worden geïdentificeerd. Het omvat niet gegevens waar de identiteit is verwijderd (anonieme gegevens).",
            list: "We kunnen verschillende soorten persoonlijke gegevens over u verzamelen, gebruiken, opslaan en overdragen, waaronder:",
            items: [
              "Identiteitsgegevens zoals voornaam, achternaam, gebruikersnaam of soortgelijke identificator.",
              "Contactgegevens zoals e-mailadres en telefoonnummers.",
              "Technische gegevens zoals IP-adres, inloggegevens, browsertype en -versie, tijdzone-instelling en locatie, browser plug-in types en versies, besturingssysteem en platform, en andere technologie op de apparaten die u gebruikt om toegang te krijgen tot deze website.",
              "Gebruiksgegevens zoals informatie over hoe u onze website, producten en diensten gebruikt.",
              "Marketing- en communicatiegegevens zoals uw voorkeuren voor het ontvangen van marketing van ons en onze derden en uw communicatievoorkeuren."
            ]
          },
          {
            title: "3. Hoe we uw persoonlijke gegevens gebruiken",
            content: "We zullen uw persoonlijke gegevens alleen gebruiken wanneer de wet het ons toestaat. Meestal zullen we uw persoonlijke gegevens gebruiken in de volgende omstandigheden:",
            items: [
              "Waar we uw toestemming hebben.",
              "Waar we het contract moeten uitvoeren dat we op het punt staan met u aan te gaan of hebben aangegaan.",
              "Waar het noodzakelijk is voor onze legitieme belangen (of die van een derde) en uw belangen en fundamentele rechten niet zwaarder wegen dan die belangen.",
              "Waar we moeten voldoen aan een wettelijke of regelgevende verplichting."
            ]
          },
          {
            title: "4. Gegevensbewaring",
            content: "We zullen uw persoonlijke gegevens alleen bewaren zolang als nodig is om te voldoen aan de doeleinden waarvoor we deze hebben verzameld, inclusief voor het voldoen aan wettelijke, boekhoudkundige of rapportagevereisten."
          },
          {
            title: "5. Uw wettelijke rechten",
            content: "Onder bepaalde omstandigheden heeft u rechten onder de gegevensbeschermingswetten met betrekking tot uw persoonlijke gegevens, waaronder het recht om:",
            items: [
              "Toegang te vragen tot uw persoonlijke gegevens.",
              "Correctie van uw persoonlijke gegevens te vragen.",
              "Verwijdering van uw persoonlijke gegevens te vragen.",
              "Bezwaar te maken tegen de verwerking van uw persoonlijke gegevens.",
              "Beperking van de verwerking van uw persoonlijke gegevens te vragen.",
              "Overdracht van uw persoonlijke gegevens te vragen.",
              "Uw toestemming in te trekken."
            ]
          },
          {
            title: "6. Cookies",
            content: "U kunt uw browser instellen om alle of sommige browsercookies te weigeren, of om u te waarschuwen wanneer websites cookies instellen of openen. Als u cookies uitschakelt of weigert, houd er dan rekening mee dat sommige delen van deze website ontoegankelijk kunnen worden of niet goed functioneren. Voor meer informatie over de cookies die we gebruiken, zie ons Cookiebeleid."
          },
          {
            title: "7. Wijzigingen in het privacybeleid",
            content: "We houden ons privacybeleid regelmatig tegen het licht. Deze versie werd voor het laatst bijgewerkt op de datum die bovenaan deze pagina staat vermeld."
          },
          {
            title: "8. Contact",
            content: "Als u vragen heeft over dit privacybeleid of onze privacypraktijken, neem dan contact met ons op via:",
            contact: [
              "E-mail: support@sandedesign.nl",
              "Telefoon: +31 45 209 2102",
              "Adres: Provincialeweg-Zuid 70, Oirsbeek, 6438 BG"
            ]
          }
        ]
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
                  
                  {section.list && (
                    <p className="text-gray-300">
                      {section.list}
                    </p>
                  )}
                  
                  {section.items && (
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  
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
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}