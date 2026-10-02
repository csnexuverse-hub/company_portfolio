import LegalLayout, { EmailLink, H2, P, UL } from '@/components/LegalLayout';
import { SITE } from '@/lib/site';
import { getMessages } from '@/lib/i18n';
import { alternatesFor } from '@/lib/i18n/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = getMessages(locale);
  return {
    title: m.legal.termsTitle,
    description: 'Terms governing the use of this website and the services of CS Development Technologies.',
    alternates: alternatesFor(locale, 'terms'),
  };
}

export default async function TermsPage({ params }) {
  const { locale } = await params;
  const messages = getMessages(locale);
  return (
    <LegalLayout locale={locale} messages={messages} titleKey="termsTitle">
      <P>
        These Terms and Conditions govern your use of this website and the services provided by {SITE.legalName}{' '}
        (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By using this website or engaging our services, you agree to
        these terms. If you do not agree, please do not use the website.
      </P>

      <H2>1. Our services</H2>
      <P>
        We provide software development, machine learning, data engineering and analytics, technical documentation,
        technical review, and research advisory and writing support services. The specific terms of each engagement,
        including deliverables, timelines and fees, are set out in a written proposal or agreement. If that agreement
        conflicts with these terms, the agreement applies.
      </P>

      <H2>2. Academic integrity</H2>
      <div className="elevate mt-4 rounded-xl border border-line bg-panel p-5">
        <p className="text-[15px] leading-7 text-fg/90">
          Our research and writing services are advisory, editorial and educational. We provide guidance on methodology,
          review and feedback, editing, training and technical support. We do not produce assessed coursework,
          examinations, theses or dissertations for submission as another person&apos;s own work, and we will decline or
          end any engagement where we believe our work would be used that way.
        </p>
      </div>
      <P>
        Clients are responsible for following the rules of their institution, publisher or funding body, including any
        requirement to disclose assistance received.
      </P>

      <H2>3. Enquiries, orders and payment</H2>
      <P>
        Submitting the contact form is a request, not a binding contract. An engagement begins only when both parties
        have accepted a written proposal and any agreed advance payment has been received. Fees, milestones and payment
        terms are stated in the proposal. Quotes are valid for the period stated on them.
      </P>

      <H2>4. Cancellations and refunds</H2>
      <P>
        Cancellation and refund terms are set out in each engagement agreement. Unless the agreement says otherwise, fees
        for work completed up to the date of cancellation remain payable.
      </P>

      <H2>5. Your responsibilities</H2>
      <UL>
        <li>Provide accurate information and timely feedback.</li>
        <li>Share only material that you have the right to share with us.</li>
        <li>Use our deliverables lawfully and in line with section 2.</li>
      </UL>

      <H2>6. Intellectual property</H2>
      <P>
        The content, design and branding of this website belong to us and may not be copied without permission. Unless
        an agreement says otherwise, ownership of deliverables created specifically for a client transfers to that client
        once full payment has been received. We keep the rights to our pre-existing tools, code libraries, methods and
        know-how. Third-party and open-source components remain subject to their own licences.
      </P>

      <H2>7. Confidentiality</H2>
      <P>
        We treat information you share with us in the course of an enquiry or engagement as confidential and use it only
        to provide our services, except where disclosure is required by law. We sign non-disclosure agreements on
        request.
      </P>

      <H2>8. Use of this website</H2>
      <P>
        You agree not to use this website for any unlawful purpose, not to attempt to disrupt or gain unauthorised access
        to it, and not to submit false or misleading information through it.
      </P>

      <H2>9. Third-party links</H2>
      <P>
        This website may link to third-party websites, such as our social media profiles. We are not responsible for
        their content or privacy practices.
      </P>

      <H2>10. Disclaimers</H2>
      <P>
        Information on this website is provided for general purposes and may change without notice. We carry out our
        work with professional care, but we do not guarantee specific outcomes, such as acceptance of a publication, an
        academic result, or a commercial return.
      </P>

      <H2>11. Limitation of liability</H2>
      <P>
        To the extent permitted by law, our total liability arising from any engagement is limited to the fees paid for
        that engagement, and we are not liable for indirect or consequential losses, including loss of profit, data or
        opportunity.
      </P>

      <H2>12. Governing law</H2>
      <P>
        These terms are governed by the laws of {SITE.jurisdiction}. Disputes are subject to the exclusive jurisdiction of{' '}
        {SITE.courts}.
      </P>

      <H2>13. Changes to these terms</H2>
      <P>
        We may update these terms from time to time. The date at the top of this page shows when they were last changed.
        Continued use of the website after a change means you accept the updated terms.
      </P>

      <H2>14. Contact</H2>
      <P>
        Questions about these terms can be sent to <EmailLink />.
      </P>
    </LegalLayout>
  );
}
