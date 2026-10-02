import LegalLayout, { EmailLink, H2, P, Strong, UL } from '@/components/LegalLayout';
import { SITE } from '@/lib/site';
import { getMessages } from '@/lib/i18n';
import { alternatesFor } from '@/lib/i18n/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = getMessages(locale);
  return {
    title: m.legal.privacyTitle,
    description: 'How CS Development Technologies collects, uses and protects personal data.',
    alternates: alternatesFor(locale, 'privacy'),
  };
}

export default async function PrivacyPage({ params }) {
  const { locale } = await params;
  const messages = getMessages(locale);
  return (
    <LegalLayout locale={locale} messages={messages} titleKey="privacyTitle">
      <P>
        This Privacy Policy explains how {SITE.legalName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects,
        uses and protects personal data when you visit this website or contact us. By using this website or submitting
        the contact form, you acknowledge the practices described here.
      </P>

      <H2>1. Information we collect</H2>
      <P>We collect only what we need to respond to you and to provide our services.</P>
      <UL>
        <li>
          <Strong>Information you give us through the contact form:</Strong> your name, email address, phone number,
          organisation, the subject and area of interest you select, and the content of your message or feedback.
        </li>
        <li>
          <Strong>Information you share during an engagement:</Strong> details, documents and data you provide so that we
          can prepare a proposal or deliver a service.
        </li>
        <li>
          <Strong>Technical information:</Strong> our hosting provider may record standard server logs, such as IP
          address, browser type, pages requested and the date and time of access, for security and reliability.
        </li>
      </UL>

      <H2>2. How we use your information</H2>
      <UL>
        <li>To respond to orders, enquiries and feedback.</li>
        <li>To prepare proposals, deliver services and manage our relationship with you.</li>
        <li>To improve our website and services.</li>
        <li>To keep our website secure and to meet legal, tax and accounting obligations.</li>
      </UL>
      <P>
        We do not sell your personal data, and we do not use it for third-party advertising or for decisions made solely
        by automated means.
      </P>

      <H2>3. Consent and lawful use</H2>
      <P>
        We process your data on the basis of the consent you give when submitting the contact form, to take steps you
        request before entering into an agreement, to perform an agreement with you, and where the law requires us to.
        You may withdraw your consent at any time by emailing <EmailLink />. Withdrawal does not affect processing
        carried out before it.
      </P>

      <H2>4. Cookies and tracking</H2>
      <P>
        This website does not use advertising or analytics cookies. It stores two preferences on your device: your
        chosen language, in a cookie named NEXT_LOCALE, and your light or dark theme, in your browser&apos;s local storage.
        Neither identifies you or is used for tracking. If we introduce analytics in the future, we will update this
        policy and request your consent where the law requires it.
      </P>

      <H2>5. Sharing your information</H2>
      <P>We share personal data only where necessary, with:</P>
      <UL>
        <li>
          Service providers that process data on our behalf, such as our website host and our email and form-handling
          providers, under obligations of confidentiality and security.
        </li>
        <li>Professional advisers, such as accountants and lawyers, where needed.</li>
        <li>Government or regulatory authorities, where required by law.</li>
      </UL>
      <P>
        Some of these providers may process data outside your country. Where this happens, we take the steps required by
        applicable law to protect it.
      </P>

      <H2>6. Data retention</H2>
      <P>
        We keep personal data only for as long as needed for the purposes described in this policy. After that, we
        delete or anonymise it, unless the law requires us to keep it for longer.
      </P>

      <H2>7. Security</H2>
      <P>
        We use reasonable technical and organisational measures to protect personal data against unauthorised access,
        loss or misuse. No method of transmission or storage is completely secure, so we cannot guarantee absolute
        security.
      </P>

      <H2>8. Your rights</H2>
      <P>
        Subject to applicable law, including, where it applies, India&apos;s Digital Personal Data Protection Act, 2023,
        you may have the right to:
      </P>
      <UL>
        <li>Request a summary of the personal data we hold about you and how it is used.</li>
        <li>Ask us to correct, complete or update your personal data.</li>
        <li>Ask us to erase your personal data where it is no longer needed.</li>
        <li>Withdraw your consent.</li>
        <li>Nominate another person to exercise your rights in the event of death or incapacity.</li>
        <li>Raise a grievance with us, and escalate it to the relevant authority if it is not resolved.</li>
      </UL>
      <P>
        If other data protection laws apply to you, you may have additional rights. To exercise any of these rights,
        email <EmailLink />. We may need to verify your identity before acting on a request.
      </P>

      <H2>9. Children</H2>
      <P>
        This website is not directed at children under 18. We do not knowingly collect personal data from children. If
        you believe a child has sent us personal data, contact us and we will delete it.
      </P>

      <H2>10. Changes to this policy</H2>
      <P>We may update this policy from time to time. The date at the top of this page shows when it was last changed.</P>

      <H2>11. Contact and grievances</H2>
      <P>
        For questions or complaints about this policy or your personal data, contact us at <EmailLink /> or{' '}
        {SITE.phones.join(' or ')}. Postal address: {SITE.address}.
      </P>
    </LegalLayout>
  );
}
