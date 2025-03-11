import PageNavigation from '../components/PageNavigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function TermsConditions() {
  const { language } = useLanguage();

  const getLocalizedContent = () => {
    if (language === 'en') {
      return {
        title: "Terms and Conditions",
        lastUpdated: "Last updated",
        sections: [
          {
            title: "1. Introduction",
            content: "These terms and conditions apply to all services offered by SandeDesign (\"we\", \"us\", or \"our\"). By using our website and services, you agree to these terms. If you do not agree with these terms, please do not use our website and services."
          },
          {
            title: "2. Services",
            content: "SandeDesign offers web design, development, hosting, and related services. The specific services provided to you are described in the agreement you enter into with us.",
            paragraph: "We strive to deliver our services with the highest quality, but we cannot guarantee that our services will always be without interruptions, delays, or imperfections."
          },
          {
            title: "3. Intellectual Property",
            content: "All intellectual property rights in our services and website, including designs, code, content, and logos, are owned by us or our licensors. You may not use, copy, modify, or distribute any of our intellectual property without our prior written consent."
          },
          {
            title: "4. Your Responsibilities",
            content: "You are responsible for providing accurate information, maintaining the confidentiality of your account details, and ensuring that your use of our services complies with applicable laws and regulations.",
            items: [
              "You must not use our services for any illegal or unauthorized purpose.",
              "You must not attempt to gain unauthorized access to any part of our services or systems.",
              "You must not interfere with or disrupt the integrity or performance of our services."
            ]
          },
          {
            title: "5. Payment and Fees",
            content: "The fees for our services are as specified in the agreement you enter into with us. Payment terms and methods are also specified in that agreement.",
            paragraph: "We reserve the right to change our fees at any time, but any changes will not affect existing agreements without your consent."
          },
          {
            title: "6. Termination",
            content: "Either party may terminate the agreement in accordance with the terms specified in the agreement. Upon termination, you must cease using our services and pay any outstanding fees."
          },
          {
            title: "7. Limitation of Liability",
            content: "To the maximum extent permitted by law, we exclude all liability for any loss or damage arising from your use of our services, whether direct, indirect, incidental, or consequential."
          },
          {
            title: "8. Changes to Terms",
            content: "We may update these terms from time to time. We will notify you of any significant changes, but we encourage you to review these terms periodically."
          },
          {
            title: "9. Governing Law",
            content: "These terms are governed by the laws of the Netherlands. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of the Netherlands."
          },
          {
            title: "10. Integration with Third-Party Services",
            content: "Our automation solutions can be integrated with various third-party services including Google Calendar, Google Docs, and other productivity tools to provide comprehensive automation capabilities.",
            paragraph: "While we strive to maintain compatibility with these services, we cannot guarantee continuous functionality as third-party services may change their APIs or terms of service."
          },
          {
            title: "11. Contact",
            content: "If you have any questions about these terms, please contact us at:",
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
        title: "Allgemeine Geschäftsbedingungen",
        lastUpdated: "Zuletzt aktualisiert",
        sections: [
          {
            title: "1. Einleitung",
            content: "Diese Allgemeinen Geschäftsbedingungen gelten für alle von SandeDesign (\"wir\", \"uns\" oder \"unser\") angebotenen Dienstleistungen. Durch die Nutzung unserer Website und Dienstleistungen stimmen Sie diesen Bedingungen zu. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie bitte nicht unsere Website und Dienstleistungen."
          },
          {
            title: "2. Dienstleistungen",
            content: "SandeDesign bietet Webdesign, Entwicklung, Hosting und verwandte Dienstleistungen an. Die spezifischen Dienstleistungen, die Ihnen zur Verfügung gestellt werden, sind in der Vereinbarung beschrieben, die Sie mit uns abschließen.",
            paragraph: "Wir bemühen uns, unsere Dienstleistungen in höchster Qualität zu erbringen, können jedoch nicht garantieren, dass unsere Dienstleistungen immer ohne Unterbrechungen, Verzögerungen oder Unvollkommenheiten sein werden."
          },
          {
            title: "3. Geistiges Eigentum",
            content: "Alle Rechte an geistigem Eigentum an unseren Dienstleistungen und unserer Website, einschließlich Designs, Code, Inhalten und Logos, gehören uns oder unseren Lizenzgebern. Sie dürfen unser geistiges Eigentum ohne unsere vorherige schriftliche Zustimmung nicht verwenden, kopieren, modifizieren oder verteilen."
          },
          {
            title: "4. Ihre Verantwortlichkeiten",
            content: "Sie sind verantwortlich für die Bereitstellung genauer Informationen, die Wahrung der Vertraulichkeit Ihrer Kontodaten und die Sicherstellung, dass Ihre Nutzung unserer Dienstleistungen den geltenden Gesetzen und Vorschriften entspricht.",
            items: [
              "Sie dürfen unsere Dienstleistungen nicht für illegale oder unbefugte Zwecke nutzen.",
              "Sie dürfen nicht versuchen, unbefugten Zugriff auf Teile unserer Dienstleistungen oder Systeme zu erlangen.",
              "Sie dürfen die Integrität oder Leistung unserer Dienstleistungen nicht beeinträchtigen oder stören."
            ]
          },
          {
            title: "5. Zahlung und Gebühren",
            content: "Die Gebühren für unsere Dienstleistungen sind in der Vereinbarung festgelegt, die Sie mit uns abschließen. Zahlungsbedingungen und -methoden sind ebenfalls in dieser Vereinbarung festgelegt.",
            paragraph: "Wir behalten uns das Recht vor, unsere Gebühren jederzeit zu ändern, aber Änderungen wirken sich nicht auf bestehende Vereinbarungen aus, ohne Ihre Zustimmung."
          },
          {
            title: "6. Kündigung",
            content: "Jede Partei kann die Vereinbarung gemäß den in der Vereinbarung festgelegten Bedingungen kündigen. Nach der Kündigung müssen Sie die Nutzung unserer Dienstleistungen einstellen und alle ausstehenden Gebühren bezahlen."
          },
          {
            title: "7. Haftungsbeschränkung",
            content: "Im maximal gesetzlich zulässigen Umfang schließen wir jede Haftung für Verluste oder Schäden aus, die aus Ihrer Nutzung unserer Dienstleistungen entstehen, sei es direkt, indirekt, zufällig oder folgerichtig."
          },
          {
            title: "8. Änderungen der Bedingungen",
            content: "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, aber wir empfehlen Ihnen, diese Bedingungen regelmäßig zu überprüfen."
          },
          {
            title: "9. Geltendes Recht",
            content: "Diese Bedingungen unterliegen den Gesetzen der Niederlande. Alle Streitigkeiten, die aus diesen Bedingungen entstehen, unterliegen der ausschließlichen Zuständigkeit der Gerichte der Niederlande."
          },
          {
            title: "10. Integration mit Drittanbieterdiensten",
            content: "Unsere Automatisierungslösungen können mit verschiedenen Drittanbieterdiensten wie Google Kalender, Google Docs und anderen Produktivitätstools integriert werden, um umfassende Automatisierungsfunktionen zu bieten.",
            paragraph: "Obwohl wir uns bemühen, die Kompatibilität mit diesen Diensten aufrechtzuerhalten, können wir keine kontinuierliche Funktionalität garantieren, da Drittanbieterdienste ihre APIs oder Nutzungsbedingungen ändern können."
          },
          {
            title: "11. Kontakt",
            content: "Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte unter:",
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
        title: "Algemene Voorwaarden",
        lastUpdated: "Laatst bijgewerkt",
        sections: [
          {
            title: "1. Inleiding",
            content: "Deze algemene voorwaarden zijn van toepassing op alle diensten die worden aangeboden door SandeDesign (\"wij\", \"ons\" of \"onze\"). Door gebruik te maken van onze website en diensten, gaat u akkoord met deze voorwaarden. Als u niet akkoord gaat met deze voorwaarden, gebruik dan onze website en diensten niet."
          },
          {
            title: "2. Diensten",
            content: "SandeDesign biedt webdesign, ontwikkeling, hosting en aanverwante diensten aan. De specifieke diensten die aan u worden geleverd, worden beschreven in de overeenkomst die u met ons aangaat.",
            paragraph: "Wij streven ernaar onze diensten met de hoogste kwaliteit te leveren, maar kunnen niet garanderen dat onze diensten altijd zonder onderbrekingen, vertragingen of onvolkomenheden zullen zijn."
          },
          {
            title: "3. Intellectueel eigendom",
            content: "Alle intellectuele eigendomsrechten in onze diensten en website, inclusief ontwerpen, code, inhoud en logo's, zijn eigendom van ons of onze licentiegevers. U mag geen van onze intellectuele eigendommen gebruiken, kopiëren, wijzigen of distribueren zonder onze voorafgaande schriftelijke toestemming."
          },
          {
            title: "4. Uw verantwoordelijkheden",
            content: "U bent verantwoordelijk voor het verstrekken van nauwkeurige informatie, het handhaven van de vertrouwelijkheid van uw accountgegevens en het waarborgen dat uw gebruik van onze diensten voldoet aan de toepasselijke wet- en regelgeving.",
            items: [
              "U mag onze diensten niet gebruiken voor illegale of ongeautoriseerde doeleinden.",
              "U mag niet proberen ongeautoriseerde toegang te krijgen tot enig deel van onze diensten of systemen.",
              "U mag de integriteit of prestaties van onze diensten niet verstoren of belemmeren."
            ]
          },
          {
            title: "5. Betaling en kosten",
            content: "De kosten voor onze diensten zijn zoals gespecificeerd in de overeenkomst die u met ons aangaat. Betalingsvoorwaarden en -methoden worden ook in die overeenkomst gespecificeerd.",
            paragraph: "Wij behouden ons het recht voor om onze tarieven op elk moment te wijzigen, maar eventuele wijzigingen hebben geen invloed op bestaande overeenkomsten zonder uw toestemming."
          },
          {
            title: "6. Beëindiging",
            content: "Elke partij kan de overeenkomst beëindigen in overeenstemming met de voorwaarden die in de overeenkomst zijn gespecificeerd. Bij beëindiging moet u het gebruik van onze diensten staken en eventuele openstaande kosten betalen."
          },
          {
            title: "7. Beperking van aansprakelijkheid",
            content: "Voor zover maximaal toegestaan door de wet, sluiten wij alle aansprakelijkheid uit voor verlies of schade die voortvloeit uit uw gebruik van onze diensten, hetzij direct, indirect, incidenteel of gevolgschade."
          },
          {
            title: "8. Wijzigingen in voorwaarden",
            content: "We kunnen deze voorwaarden van tijd tot tijd bijwerken. We zullen u op de hoogte stellen van belangrijke wijzigingen, maar we raden u aan deze voorwaarden regelmatig te bekijken."
          },
          {
            title: "9. Toepasselijk recht",
            content: "Deze voorwaarden worden beheerst door de wetten van Nederland. Eventuele geschillen die voortvloeien uit deze voorwaarden zullen onderworpen zijn aan de exclusieve jurisdictie van de rechtbanken van Nederland."
          },
          {
            title: "10. Integratie met diensten van derden",
            content: "Onze automatiseringsoplossingen kunnen worden geïntegreerd met verschillende diensten van derden, waaronder Google Agenda, Google Documenten en andere productiviteitstools om uitgebreide automatiseringsmogelijkheden te bieden.",
            paragraph: "Hoewel we ernaar streven om compatibiliteit met deze diensten te behouden, kunnen we geen continue functionaliteit garanderen omdat diensten van derden hun API's of servicevoorwaarden kunnen wijzigen."
          },
          {
            title: "11. Contact",
            content: "Als u vragen heeft over deze voorwaarden, neem dan contact met ons op via:",
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