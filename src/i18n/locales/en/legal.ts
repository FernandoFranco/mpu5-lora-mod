import type { LegalResources } from '@/types'

export const legal: LegalResources = {
  terms: {
    title: 'Terms of Use',
    lastUpdated: 'Last updated: September 28, 2026',
    sections: [
      {
        heading: '1. About this project',
        paragraphs: [
          'MPU5 LoRa Mod is an independently maintained, open-source project documenting a physical modification that integrates a LoRa board running Meshtastic firmware inside an MPU5 airsoft replica. By accessing this site or following the assembly guide, you agree to these Terms of Use.',
        ],
      },
      {
        heading: '2. Independent nature of this project',
        paragraphs: [
          '"MPU5" is a third-party product and trademark. This project is not affiliated with, sponsored by, endorsed by, or otherwise associated with the manufacturer or distributor of the MPU5 replica. References to "MPU5" exist solely to identify the product this modification applies to.',
        ],
      },
      {
        heading: '3. Use at your own risk',
        paragraphs: [
          'The modification described on this site involves opening, cutting, drilling, or otherwise physically and irreversibly altering a third-party product, as well as installing non-original electronic components. By following this guide, you acknowledge and accept that:',
          '• The modification may permanently damage the device, render it unusable, or void any manufacturer warranty;',
          '• You are solely responsible for assessing your own technical ability before attempting the modification;',
          '• The project, its maintainer, and contributors are not liable for damage to equipment, financial loss, personal injury, or any other harm arising from use of this guide.',
        ],
      },
      {
        heading: '4. No warranty',
        paragraphs: [
          'All content (guide, STL files, documentation) is provided "as is," without warranties of any kind, express or implied, including but not limited to warranties of fitness for a particular purpose, error-free operation, or compatibility with any specific hardware.',
        ],
      },
      {
        heading: "5. User's regulatory responsibility",
        paragraphs: [
          "The modification uses radio modules operating in the 902–928 MHz band (LoRa), classified by Brazil's telecom regulator (ANATEL) as restricted-radiation equipment (Resolução nº 680/2017). Formal certification/homologation of such devices is, in Brazil, the responsibility of whoever manufactures, imports, or sells them. This project does not sell, manufacture, import, or certify any hardware — it only documents how to integrate boards that already exist on the market. It is solely the user's responsibility to verify that the hardware they intend to use complies with the telecommunications regulations applicable in their own jurisdiction before operating it.",
        ],
      },
      {
        heading: '6. Intellectual property and licensing',
        paragraphs: [
          'All original content in this project (text, assembly guide, STL files, and other documentation) is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0). Personal, non-commercial use is free, provided the license terms (attribution and share-alike) are respected. Commercial use requires prior contact with and authorization from the license holder — see the "License" link in the site footer.',
          'Meshtastic firmware and other third-party software referenced on this site are governed by their own respective licenses.',
        ],
      },
      {
        heading: '7. Third-party links and content',
        paragraphs: [
          'This site may link to third-party sites, apps, or services (such as Meshtastic, ATAK, iTAK, GitHub). We have no control over that content and are not responsible for it.',
        ],
      },
      {
        heading: '8. Limitation of liability',
        paragraphs: [
          'To the fullest extent permitted by applicable law, the project maintainer shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of, or inability to use, this site or the modification guide.',
        ],
      },
      {
        heading: '9. Changes to these terms',
        paragraphs: [
          'These Terms of Use may be updated periodically. The "last updated" date at the top of this page always reflects the current version. Continued use of the site after changes constitutes acceptance of the new terms.',
        ],
      },
      {
        heading: '10. Governing law and venue',
        paragraphs: [
          "These terms are governed by the laws of the Federative Republic of Brazil. Any disputes arising from these Terms shall be submitted to the courts of the project maintainer's domicile, to the exclusion of any other venue.",
        ],
      },
      {
        heading: '11. General provisions',
        paragraphs: [
          'These Terms of Use constitute the entire agreement between you and the project maintainer regarding use of this site and the modification guide, superseding any prior understanding on the same subject. If any provision of these terms is held invalid or unenforceable, the remaining provisions remain in full force and effect.',
        ],
      },
      {
        heading: '12. Contact',
        paragraphs: [
          "Questions about these Terms of Use can be sent via the GitHub repository's Issues page: https://github.com/FernandoHAFranco/mpu5/issues",
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: September 28, 2026',
    sections: [
      {
        heading: '1. Data controller',
        paragraphs: [
          'This site is independently maintained by Fernando Henrique Alves Franco ("controller," "we"). To exercise the rights described in this policy or ask questions, use the contact channel in section 11.',
        ],
      },
      {
        heading: '2. What data we collect',
        paragraphs: [
          'This site has no forms, user accounts, login system, or any feature that directly collects personal identification data.',
          'We only collect browsing data through Google Analytics, and only after your explicit consent via the cookie banner shown on your first visit. This data includes, aggregated and anonymized where possible: traffic source, pages visited, time on page, and device/browser type.',
          "We also use your browser's localStorage (not a cookie, and never sent to any server) to remember your theme preference (light/dark), language, and your cookie consent choice. That data stays only on your own device.",
        ],
      },
      {
        heading: '3. Legal basis',
        paragraphs: [
          'Processing of browsing data via Google Analytics is based on your consent (LGPD art. 7, I), obtained freely, with clear information, through the cookie banner. You can withdraw this consent at any time (see section 6).',
        ],
      },
      {
        heading: '4. Data sharing',
        paragraphs: [
          'Data collected via Google Analytics is processed by Google LLC, which may transfer it to servers located outside Brazil, including in the United States. Google acts as processor of this data, subject to its own privacy policy, available at: https://policies.google.com/privacy',
          'We do not share, sell, or otherwise transfer data to any other third party.',
        ],
      },
      {
        heading: '5. Cookies',
        paragraphs: [
          'We only use Google Analytics cookies, and only after you accept the consent banner shown on your first visit. If you decline or close the banner without accepting, no tracking cookie is set and Google Analytics never loads.',
        ],
      },
      {
        heading: '6. How to withdraw your consent',
        paragraphs: [
          'You can change your choice at any time via the "Cookie preferences" link in the site footer. This reopens the consent banner, letting you accept or decline again.',
        ],
      },
      {
        heading: '7. Your rights as a data subject (LGPD)',
        paragraphs: [
          'Under LGPD art. 18, you have the right to:',
          '• Confirmation that processing exists;',
          '• Access to the data processed;',
          '• Correction of incomplete, inaccurate, or outdated data;',
          '• Anonymization, blocking, or deletion of unnecessary data or data processed unlawfully;',
          '• Data portability;',
          '• Deletion of data processed based on your consent;',
          '• Information about entities the controller has shared data with;',
          '• Information about the option to withhold consent and its consequences;',
          '• Withdrawal of consent at any time.',
          'Since this site does not collect direct personal identification data (only aggregated analytics data via cookies, with consent), exercising most of these rights in practice means withdrawing cookie consent (section 6).',
        ],
      },
      {
        heading: "8. Children's data",
        paragraphs: [
          'This site is not directed at anyone under 18 and does not knowingly collect data from children or teenagers.',
        ],
      },
      {
        heading: '9. Data retention',
        paragraphs: [
          "Browsing data collected via Google Analytics is retained per Google Analytics' own standard retention policy. We keep no additional copies of this data in our own infrastructure, since we have no backend or database.",
        ],
      },
      {
        heading: '10. Changes to this policy',
        paragraphs: [
          'This Privacy Policy may be updated periodically. The date at the top of the page always reflects the most recent version.',
        ],
      },
      {
        heading: '11. Contact',
        paragraphs: [
          "To exercise your rights or ask questions about this policy, use the GitHub repository's Issues page: https://github.com/FernandoHAFranco/mpu5/issues",
        ],
      },
    ],
  },
}
