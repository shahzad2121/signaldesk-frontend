import { forwardRef, useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import signaldeskLogo from "@/assets/signaldesk-logo.png";
import signaldeskLogoWhite from "@/assets/signaldesk-logo-white.png";

const TermsOfService = forwardRef<HTMLDivElement>((_, ref) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header with Logo */}
        <div className="flex items-center justify-between mb-12">
           <Link to="/">
             <img 
               src={isDark ? signaldeskLogoWhite : signaldeskLogo} 
               alt="SignalDesk" 
               className="h-10 w-auto"
             />
           </Link>
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-2">SignalDesk Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 8, 2026</p>

          <p className="text-foreground">
            These Terms of Service ("Terms") govern your access to and use of SignalDesk's website and services. By creating an account, accessing, or using SignalDesk, you agree to be bound by these Terms. If you do not agree, do not use the Services.
          </p>

          <p className="text-foreground">
            "SignalDesk," "we," "us," and "our" refer to SignalDesk (a MoveWorth company), 911 Washington Ave, Suite 329, St. Louis, MO 63101, USA.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. Services and eligibility</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1.1 Services</h3>
          <p className="text-foreground">
            SignalDesk provides an online workspace where users can create and manage FlowDesks—persistent collections of links to tools, documents, dashboards, and other online resources—to organize their work and share these collections with others. The Services include our website, web application, and any related tools, features, and content we make available.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1.2 Eligibility</h3>
          <p className="text-foreground">You may use the Services only if:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>You are at least 18 years old.</li>
            <li>You have the legal power to enter into a binding contract with us.</li>
            <li>You are not prohibited from using the Services under applicable law.</li>
          </ul>
          <p className="text-foreground">
            If you are using the Services on behalf of a company or other organization, you represent and warrant that you are authorized to accept these Terms on its behalf and that the organization will be legally and financially responsible for your use of the Services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. Account registration and security</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1 Account creation</h3>
          <p className="text-foreground">
            To use certain features, you must create an account by providing accurate and complete information (such as name, email, and company) and keeping that information up to date.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2 Account security</h3>
          <p className="text-foreground">You are responsible for:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Maintaining the confidentiality of your login credentials.</li>
            <li>Restricting access to your account and devices.</li>
            <li>All activities that occur under your account.</li>
          </ul>
          <p className="text-foreground">
            You agree to notify us promptly if you suspect any unauthorized access to or use of your account.
          </p>
          <p className="text-foreground">
            We reserve the right to disable or terminate accounts at our discretion, including if we reasonably believe there has been a violation of these Terms or if your account has been compromised.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">3. Privacy</h2>
          <p className="text-foreground">
            Your use of the Services is also governed by our Privacy Policy, which describes how we collect, use, and protect your information. By using the Services, you acknowledge and agree that we may process your information as described in the Privacy Policy.
          </p>
          <p className="text-foreground">
            You can review our Privacy Policy at: <a href="/privacy-policy" className="text-primary hover:underline">https://signaldesk.us/privacy-policy</a>
          </p>
          <p className="text-foreground">
            If there is a conflict between these Terms and the Privacy Policy regarding privacy or data handling, the Privacy Policy controls for those issues.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">4. Subscriptions, fees, and payments</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.1 Fees</h3>
          <p className="text-foreground">
            Some features of the Services may be offered on a paid subscription basis. We will present applicable fees and billing terms at the time of purchase or upgrade.
          </p>
          <p className="text-foreground">
            We may change our prices and billing terms at any time, but any changes will apply prospectively, and we will provide notice before they take effect.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.2 Billing and payment</h3>
          <p className="text-foreground">
            Payments are processed by third-party payment processors (such as Stripe). By providing a payment method, you authorize us and our payment processor to charge all applicable fees, taxes, and other charges to that payment method.
          </p>
          <p className="text-foreground">
            You are responsible for all fees incurred under your account and for providing accurate and up-to-date billing information.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.3 Renewals and cancellation</h3>
          <p className="text-foreground">
            Unless stated otherwise, subscriptions renew automatically at the end of each billing period at the then-current rate.
          </p>
          <p className="text-foreground">
            You may cancel your subscription at any time through the account or billing settings in the Services (or by contacting us as directed on the site). Cancellation will take effect at the end of your current billing period; we typically do not provide refunds for partial periods, except where required by law.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.4 Taxes</h3>
          <p className="text-foreground">
            Fees are exclusive of any applicable taxes. You are responsible for paying any taxes related to your purchases and use of the Services, excluding taxes based on our net income.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">5. License and acceptable use</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.1 Your license to use the Services</h3>
          <p className="text-foreground">
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Services for your internal business or personal productivity purposes.
          </p>
          <p className="text-foreground">
            You may not resell, lease, or otherwise provide the Services to third parties as a standalone service, except as permitted in writing by us.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Acceptable use</h3>
          <p className="text-foreground">You agree not to:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Use the Services for any unlawful purpose or in violation of any applicable law or regulation.</li>
            <li>Attempt to access or use another user's account without permission.</li>
            <li>Interfere with or disrupt the integrity or performance of the Services or any related systems.</li>
            <li>Reverse engineer, decompile, or attempt to obtain the source code of the Services, except to the extent permitted by law.</li>
            <li>Use the Services to send spam, phishing content, or other unwanted or harmful communications.</li>
            <li>Use automated tools (such as bots or scrapers) to access the Services in a manner that burdens or disrupts our infrastructure beyond normal use.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.3 Prohibited data and content</h3>
          <p className="text-foreground">
            SignalDesk is designed to store and organize links, not to host high-risk or regulated data directly. You agree not to use the Services to store or upload:
          </p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Protected health information (PHI) regulated by HIPAA.</li>
            <li>Payment card data outside of our integrated payment processor's forms.</li>
            <li>Government-issued identification numbers, bank account numbers, or other highly sensitive personal information.</li>
            <li>Content that is illegal, infringing, defamatory, or otherwise violates third-party rights.</li>
          </ul>
          <p className="text-foreground">
            If you choose to store links pointing to such data in third-party systems (e.g., cloud drives, HR systems), that content is governed by those systems and their terms. You remain responsible for what you store and share via SignalDesk.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">6. Your content</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.1 Ownership of your content</h3>
          <p className="text-foreground">
            You retain all rights to the links, FlowDesks, and other content you submit, store, or display in the Services ("Your Content"), subject to the limited license you grant us below.
          </p>
          <p className="text-foreground">
            You are responsible for Your Content and for ensuring it does not violate these Terms or any applicable law.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.2 License you grant to SignalDesk</h3>
          <p className="text-foreground">
            To operate and provide the Services, you grant SignalDesk a worldwide, non-exclusive, royalty-free license to host, use, reproduce, display, and modify Your Content solely as necessary to:
          </p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve the Services.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.3 Sharing and collaboration</h3>
          <p className="text-foreground">
            You may choose to share FlowDesks or other content with team members or other users. When you do so:
          </p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>You are responsible for selecting appropriate sharing settings and permissions.</li>
            <li>Recipients may have access to Your Content, including the links and any associated metadata you choose to store.</li>
          </ul>
          <p className="text-foreground">
            We are not responsible for how recipients or third parties use or share Your Content once you have shared it.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">7. Team and organization accounts</h2>
          <p className="text-foreground">If you use the Services as part of a team or organization:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Your organization's administrator may control access, roles, and permissions within the organization's account.</li>
            <li>Administrators may be able to access, modify, and delete Your Content associated with the organization's workspace.</li>
            <li>Your use of the Services may be subject to your organization's internal policies in addition to these Terms.</li>
          </ul>
          <p className="text-foreground">
            If there is a conflict between these Terms and separate terms we sign with your organization, those separate terms will usually control for the organization-level account.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">8. Service changes and availability</h2>
          <p className="text-foreground">
            We may update, modify, or discontinue features or components of the Services at any time, with or without notice, provided that such changes do not materially reduce the core functionality of the paid Services during your current billing period, except as required by law or to address security or technical issues.
          </p>
          <p className="text-foreground">
            We aim for high availability but do not guarantee that the Services will be uninterrupted or error-free. Planned maintenance, updates, and unexpected outages may temporarily affect availability.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">9. Term and termination</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.1 Term</h3>
          <p className="text-foreground">
            These Terms remain in effect while you use the Services or have an account with us.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.2 Your termination</h3>
          <p className="text-foreground">
            You may stop using the Services at any time. You may also delete your account as described in the Services or by contacting us. Deleting your account will typically result in the deletion or anonymization of associated personal data after a defined retention period, as described in the Privacy Policy.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.3 Our termination or suspension</h3>
          <p className="text-foreground">We may suspend or terminate your access to the Services, or part of them, if:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>You materially or repeatedly violate these Terms.</li>
            <li>We reasonably believe your use of the Services poses a security, legal, or reputational risk.</li>
            <li>We discontinue all or part of the Services.</li>
          </ul>
          <p className="text-foreground">
            Where reasonable, we will provide you with notice before termination or suspension, but we may act immediately where required to protect the Services, other users, or comply with law.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.4 Effect of termination</h3>
          <p className="text-foreground">Upon termination:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Your right to access and use the Services will cease.</li>
            <li>We may retain and handle your data as described in the Privacy Policy, including limited retention in backups and logs.</li>
            <li>Certain provisions of these Terms that by nature should survive (such as payment obligations, ownership, disclaimers, and limitations of liability) will continue to apply.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">10. Intellectual property</h2>
          <p className="text-foreground">
            The Services, including the underlying software, design, logos, and other content (excluding Your Content), are owned by or licensed to SignalDesk and are protected by intellectual property laws.
          </p>
          <p className="text-foreground">
            Except for the limited license granted to you in these Terms, you receive no rights or ownership in the Services or our intellectual property. You may not use our name, logos, or trademarks without our prior written permission.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">11. Disclaimers</h2>
          <p className="text-foreground">
            The Services are provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, whether express, implied, statutory, or otherwise.
          </p>
          <p className="text-foreground">
            To the fullest extent permitted by law, we specifically disclaim any implied warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising out of course of dealing or usage of trade.
          </p>
          <p className="text-foreground">We do not warrant that:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>The Services will be uninterrupted, secure, or error-free.</li>
            <li>Defects or errors will be corrected.</li>
            <li>The Services will meet your requirements or expectations.</li>
          </ul>
          <p className="text-foreground">
            You are solely responsible for determining whether the Services are suitable for your intended use.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">12. Limitation of liability</h2>
          <p className="text-foreground">To the maximum extent permitted by law:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>SignalDesk and its affiliates, officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenues, data, or goodwill arising out of or related to your use of or inability to use the Services.</li>
            <li>Our total aggregate liability for any and all claims relating to the Services or these Terms will not exceed the greater of the amounts you paid us in the 12 months before the claim arose or $100.</li>
          </ul>
          <p className="text-foreground">
            These limitations apply regardless of the legal theory and even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">13. Indemnification</h2>
          <p className="text-foreground">
            You agree to indemnify, defend, and hold harmless SignalDesk and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to:
          </p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Your use of the Services.</li>
            <li>Your violation of these Terms.</li>
            <li>Your violation of any applicable law or third-party rights.</li>
            <li>Your Content, including any allegation that it infringes or violates another party's rights.</li>
          </ul>
          <p className="text-foreground">
            We reserve the right to assume the exclusive defense and control of any matter subject to indemnification, and you agree to cooperate with us in such defense.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">14. Governing law and dispute resolution</h2>
          <p className="text-foreground">
            These Terms and any disputes arising out of or relating to them or the Services are governed by the laws of the State of Missouri, without regard to conflict of law principles.
          </p>
          <p className="text-foreground">
            Any legal action or proceeding arising out of or relating to these Terms or the Services shall be brought exclusively in the state or federal courts located in Missouri, and you and SignalDesk consent to the personal jurisdiction and venue of those courts.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">15. Changes to these Terms</h2>
          <p className="text-foreground">
            We may update these Terms from time to time. When we do, we will revise the "Last updated" date at the top of this page and may provide additional notice (for example, via email or in-app notices) for material changes.
          </p>
          <p className="text-foreground">
            If you continue to use the Services after the revised Terms become effective, you are agreeing to the updated Terms. If you do not agree to the new Terms, you must stop using the Services and, if applicable, cancel your subscription.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">16. Miscellaneous</h2>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li><strong>Entire agreement:</strong> These Terms, together with the Privacy Policy and any applicable order forms or written agreements, form the entire agreement between you and SignalDesk regarding the Services.</li>
            <li><strong>Severability:</strong> If any provision of these Terms is found unenforceable, that provision will be modified to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</li>
            <li><strong>No waiver:</strong> Our failure to enforce any right or provision of these Terms does not waive our right to enforce that right or provision in the future.</li>
            <li><strong>Assignment:</strong> You may not assign or transfer these Terms or your rights or obligations under them without our prior written consent. We may assign or transfer these Terms without restriction, including as part of a merger, acquisition, or sale of assets.</li>
            <li><strong>Relationship:</strong> Nothing in these Terms creates a partnership, joint venture, or agency relationship between you and SignalDesk.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">17. Contact us</h2>
          <p className="text-foreground">If you have questions about these Terms or the Services, you can contact us at:</p>
          <p className="text-foreground">
            <strong>SignalDesk (a MoveWorth company)</strong><br />
            911 Washington Ave, Suite 329<br />
            St. Louis, MO 63101, USA<br />
            Email: privacy@signaldesk.us
          </p>
        </article>
      </div>
    </div>
  );
});

TermsOfService.displayName = "TermsOfService";

export default TermsOfService;
