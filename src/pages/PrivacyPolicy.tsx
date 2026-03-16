import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import signaldeskLogo from "@/assets/signaldesk-logo.png";
import signaldeskLogoWhite from "@/assets/signaldesk-logo-white.png";

const PrivacyPolicy = () => {
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
    <div className="min-h-screen bg-background">
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
          <h1 className="text-4xl font-bold text-foreground mb-2">SignalDesk Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 8, 2026</p>

          <p className="text-foreground">
            SignalDesk (a MoveWorth company) ("SignalDesk," "we," "us," or "our") respects your privacy and is committed to protecting the personal information we collect when you use our website, products, and services.
          </p>

          <p className="text-foreground">
            This Privacy Policy explains how we collect, use, disclose, and protect information about you when you use SignalDesk, including our website at signaldesk.us and our web application (together, the "Services").
          </p>

          <p className="text-foreground">
            By using the Services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the Services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. Who we are and how to contact us</h2>
          <p className="text-foreground">SignalDesk is operated by MoveWorth, a company based in the United States.</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li><strong>Legal name:</strong> SignalDesk (a MoveWorth company)</li>
            <li><strong>Address:</strong> 911 Washington Ave, Suite 329, St. Louis, MO 63101, USA</li>
            <li><strong>Privacy contact email:</strong> privacy@signaldesk.us</li>
          </ul>
          <p className="text-foreground">
            If you have questions about this Privacy Policy or our practices, you can contact us at privacy@signaldesk.us.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. What SignalDesk is</h2>
          <p className="text-foreground">
            SignalDesk is a workspace designed to replace chaotic browser tabs, scattered bookmarks, and buried links with focused workspaces called FlowDesks. Users save and organize links to tools, documents, dashboards, research, and other web resources so they can return to persistent workspaces instead of rebuilding their browser environment every day.
          </p>
          <p className="text-foreground">
            Individuals use SignalDesk as a daily starting point for their work, while teams use it as a shared home for critical links that managers can distribute and update centrally.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">3. Information we collect</h2>
          <p className="text-foreground">
            We collect information in three main categories: information you provide, information collected automatically, and information from third parties.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 Information you provide to us</h3>
          <p className="text-foreground">When you sign up for and use the Services, we may collect:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li><strong>Account information:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (if you choose to provide it)</li>
                <li>Company name</li>
                <li>Role/title</li>
              </ul>
            </li>
          </ul>
          <p className="text-foreground">
            We do not collect or store your password for Stripe or other third-party services you connect; those are handled directly by those services.
          </p>
          <p className="text-foreground">We do not currently collect:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>In-app messages</li>
            <li>Email content</li>
            <li>Notes or uploaded attachments within SignalDesk</li>
          </ul>
          <p className="text-foreground">
            You may store links in SignalDesk to third-party platforms such as Google Drive, Dropbox, or OneDrive, but those files and their contents are hosted and controlled by those third parties, not by SignalDesk.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Information collected automatically</h3>
          <p className="text-foreground">When you use the Services, we automatically collect certain technical and usage information, including:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type and settings</li>
            <li>Device information</li>
            <li>Time zone and approximate location based on IP</li>
            <li>Pages viewed and actions taken within our website and app</li>
            <li>Activity logs and basic clickstream data</li>
          </ul>
          <p className="text-foreground">
            We also track website source domain activity (for example, what referring domain brought you to our site) to understand how users discover SignalDesk and how we can better serve customers.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.3 Billing information</h3>
          <p className="text-foreground">
            Payment processing is handled by Stripe. We do not directly collect or store credit card numbers or bank account details.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.4 Sensitive and regulated information</h3>
          <p className="text-foreground">We do not intend to collect or process:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Protected health information (PHI) under HIPAA</li>
            <li>Biometric data</li>
            <li>Precise geolocation data</li>
            <li>Children's data</li>
            <li>Government IDs, bank account numbers, or similar highly sensitive information</li>
          </ul>
          <p className="text-foreground">
            We explicitly prohibit storing PHI, payment card data outside of Stripe, government IDs, financial account numbers, and other highly sensitive information in SignalDesk. If you choose to store links pointing to such data in other systems, that data is governed by those third-party services' policies.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">4. How we use your information</h2>
          <p className="text-foreground">We use the information we collect for the following purposes:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>To provide and operate the Services, including creating and managing your account and FlowDesks.</li>
            <li>To maintain persistent workspaces so you can easily return to your saved links and projects.</li>
            <li>To support team-level sharing, access control, and centralized updates to FlowDesks.</li>
            <li>To communicate with you about your account, including transactional emails such as sign-up confirmations, password resets, and billing-related messages.</li>
            <li>To send marketing emails, onboarding content, product updates, and promotional messages where permitted by law and your preferences.</li>
            <li>To understand how people discover and use the Services, including analyzing website source domain activity to improve our product and marketing.</li>
            <li>To maintain the security and integrity of the Services, including monitoring for abuse, troubleshooting issues, and improving performance.</li>
            <li>To comply with legal obligations and enforce our Terms of Service.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">5. Cookies and tracking technologies</h2>
          <p className="text-foreground">We use limited tracking technologies to operate and improve the Services.</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li><strong>Analytics:</strong> We use Google Analytics to understand aggregate usage patterns on our website.</li>
            <li><strong>Product analytics:</strong> We track website source domain activity (such as the referring domain) but not the full referring link content, to help us better serve customers.</li>
            <li><strong>Advertising and retargeting:</strong> We engage in retargeting/remarketing and cross-site behavioral advertising, which may involve placing or reading cookies and similar technologies on your browser by advertising partners.</li>
          </ul>
          <p className="text-foreground">
            We are planning to implement a cookie banner/consent manager to give you clearer control over non-essential cookies and tracking.
          </p>
          <p className="text-foreground">
            You can typically control cookies through your browser settings and by using tools provided by major ad networks to opt out of interest-based advertising.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">6. How we share your information</h2>
          <p className="text-foreground">
            We do not sell or "share" your personal information as those terms are defined under the California Consumer Privacy Act (CCPA/CPRA).
          </p>
          <p className="text-foreground">We may share personal information in the following limited circumstances:</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.1 Service providers and processors</h3>
          <p className="text-foreground">We use third-party service providers to help us operate the Services, including:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li><strong>Cloud hosting:</strong> Amazon Web Services (AWS)</li>
            <li><strong>Analytics:</strong> Google Analytics</li>
            <li><strong>Error monitoring & logging:</strong> Sentry</li>
            <li><strong>Email & notifications:</strong> Resend</li>
            <li><strong>Payments & subscriptions:</strong> Stripe</li>
            <li><strong>Infrastructure and deployment:</strong> GitHub, Vercel</li>
          </ul>
          <p className="text-foreground">
            These providers may process personal information on our behalf and are contractually required to use it only as necessary to provide services to us and to protect it appropriately.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.2 Affiliates</h3>
          <p className="text-foreground">
            We may share information with our parent company, MoveWorth, and any current or future subsidiaries or affiliates.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.3 Legal, safety, and business transfers</h3>
          <p className="text-foreground">We may disclose personal information:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>To comply with applicable law, regulation, legal process, or governmental request.</li>
            <li>To enforce our agreements, including our Terms of Service, and protect the rights, property, or safety of SignalDesk, our users, or others.</li>
            <li>In connection with a business transaction, such as a merger, acquisition, financing, or sale of all or part of our assets. In such cases, we will take steps to ensure your information remains protected and that any acquirer continues to honor this Privacy Policy or provides notice of any material changes.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">7. Your privacy rights (U.S., including California)</h2>
          <p className="text-foreground">
            SignalDesk currently focuses on users in the United States and does not target users in the EU/EEA or UK. We do, however, intend to comply with applicable U.S. privacy laws, including the California Consumer Privacy Act as amended by the CPRA (CCPA/CPRA).
          </p>
          <p className="text-foreground">Subject to applicable law, you may have rights such as:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Request information about the categories and specific pieces of personal information we have collected about you.</li>
            <li><strong>Deletion:</strong> Request that we delete personal information we hold about you, subject to certain exceptions.</li>
            <li><strong>Correction:</strong> Request that we correct inaccurate personal information.</li>
            <li><strong>Opt-out of sale/sharing:</strong> We do not sell or share personal information as defined under CCPA/CPRA, and you do not need to opt out of such sale/sharing.</li>
            <li><strong>Limit use of sensitive personal information:</strong> We do not use sensitive personal information in a way that would require a specific "limit use" mechanism under CCPA/CPRA.</li>
          </ul>
          <p className="text-foreground">
            You can exercise your rights or submit a privacy request by contacting us at privacy@signaldesk.us. We may need to verify your identity before fulfilling your request.
          </p>
          <p className="text-foreground">
            You may also authorize an agent to make requests on your behalf where permitted by law; we will require appropriate proof of authorization.
          </p>
          <p className="text-foreground">
            We will not discriminate against you for exercising your privacy rights, such as by denying services or offering different prices or discounts, except where a difference is reasonably related to the value of the data to our services as permitted by law.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">8. Data retention and deletion</h2>
          <p className="text-foreground">
            We retain personal information only for as long as necessary to provide the Services, fulfill the purposes described in this Privacy Policy, and meet legal and operational requirements.
          </p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li><strong>Account data:</strong> We retain your account information while your account is active, and for approximately 90 days after your account is deleted.</li>
            <li><strong>Logs and analytics data:</strong> We typically retain logs and analytics data for about 90 days.</li>
            <li><strong>Backups:</strong> Backup copies of data may be retained for approximately 180 days.</li>
          </ul>
          <p className="text-foreground">
            When you close your account, we will delete or anonymize your personal information after around 90 days, subject to legal or contractual retention obligations. You may also request deletion of your information at any time, and we will honor such requests consistent with applicable law and our retention needs.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">9. Data security</h2>
          <p className="text-foreground">
            We take reasonable technical and organizational measures to protect your personal information. These measures include:
          </p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Encryption in transit (HTTPS/TLS) and at rest.</li>
            <li>Role-based access control (RBAC) to limit who can access different types of data.</li>
            <li>Regular backups and disaster recovery processes.</li>
            <li>Access logging and least-privilege principles for internal access.</li>
            <li>Segregated environments (production, staging, development), which may hold real user data with appropriate controls.</li>
          </ul>
          <p className="text-foreground">
            No system can be guaranteed 100% secure, but we work to protect information against accidental or unlawful access, use, disclosure, alteration, and destruction.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">10. Children's privacy</h2>
          <p className="text-foreground">
            SignalDesk is designed for adults (18+) and business users and is not intended for children under 16 (or under 13, where applicable). We do not knowingly collect personal information from children.
          </p>
          <p className="text-foreground">
            If we learn that we have collected personal information from a child, we will take reasonable steps to delete it as soon as possible.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">11. Content and prohibited data</h2>
          <p className="text-foreground">
            SignalDesk is a platform for saving and organizing links, not for uploading files or storing large amounts of unstructured personal data directly.
          </p>
          <p className="text-foreground">You must not use SignalDesk to store or upload:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Protected health information (PHI) under HIPAA</li>
            <li>Payment card data (other than via Stripe's interfaces)</li>
            <li>Government IDs, bank account numbers, or similar highly sensitive information</li>
          </ul>
          <p className="text-foreground">If you choose to store or link to such data against our guidance, you understand that:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>It may be governed by third-party services (e.g., Google Drive, Dropbox, OneDrive) where that content actually resides.</li>
            <li>Our role is limited to storing references (links) rather than the underlying content.</li>
          </ul>
          <p className="text-foreground">
            We disclaim responsibility for how those third-party platforms handle that data, and you should review their privacy and security practices directly.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">12. Third-party services and links</h2>
          <p className="text-foreground">
            SignalDesk allows you to save and organize links to third-party websites and tools, and our Services themselves may include links to third-party websites, apps, and services.
          </p>
          <p className="text-foreground">
            We are not responsible for the privacy or security practices of those third parties, and their handling of your information is governed by their own policies and terms. We encourage you to review the privacy policies of any third-party services you access through SignalDesk.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">13. Government and law enforcement requests</h2>
          <p className="text-foreground">
            We may access, preserve, and disclose information about you to government or law enforcement authorities if we believe it is reasonably necessary to:
          </p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li>Comply with applicable law, regulation, or valid legal process.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">14. International transfers</h2>
          <p className="text-foreground">
            Our Services are operated from the United States, and your information may be processed and stored in the U.S. and other countries where our service providers are located.
          </p>
          <p className="text-foreground">
            We do not currently target or market the Services to users in the EU/EEA or UK, and our data protection practices are focused on U.S. law.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">15. Changes to this Privacy Policy</h2>
          <p className="text-foreground">
            We may update this Privacy Policy from time to time. If we make material changes, we will provide notice (for example, by updating the "Last updated" date at the top of this page, sending an email, or displaying a prominent notice in the Services).
          </p>
          <p className="text-foreground">
            Your continued use of the Services after a change becomes effective means you accept the updated policy.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">16. Governing law and contact</h2>
          <p className="text-foreground">
            This Privacy Policy and any disputes related to it are governed by the laws of the State of Missouri, without regard to conflict of law principles.
          </p>
          <p className="text-foreground">If you have questions, concerns, or requests relating to your privacy, you can contact us at:</p>
          <ul className="text-foreground list-disc pl-6 space-y-2">
            <li><strong>Email:</strong> privacy@signaldesk.us</li>
            <li><strong>Address:</strong> SignalDesk (a MoveWorth company), 911 Washington Ave, Suite 329, St. Louis, MO 63101, USA</li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
