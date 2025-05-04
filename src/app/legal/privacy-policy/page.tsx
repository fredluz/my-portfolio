import React from "react";
import Link from "next/link";

// IMPORTANT: This text is AI-generated based on user input and requires review by a legal professional.
export default function PrivacyPolicyEN() {
  const lastUpdatedDate = "May 4, 2025"; // Update this date when changes are made

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last Updated:</strong> {lastUpdatedDate}
      </p>
      <p>
        Welcome to TeacherZero! This Privacy Policy explains how we collect, use,
        and protect your information when you use our Beta service.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Email Address:</strong> We collect your email address when you
          sign up for Beta access. We use this solely for communication
          regarding the Beta program, updates, and related information.
        </li>
        <li>
          <strong>Usage Data:</strong> We collect data
          about how you interact with the service to help us improve its
          functionality and user experience. This includes tracking usage
          patterns, feature engagement, and performance metrics.
        </li>
        <li>
          <strong>Worksheet Data:</strong> Data you input to generate worksheets or data you
          generate using the application is processed to provide the service's
          functionality.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide Beta access and communicate with you about the service.</li>
        <li>
          To analyze usage patterns and improve the service.
        </li>
        <li>To operate and maintain the service.</li>
      </ul>

      <h2>3. Data Storage and Processing</h2>
      <ul>
        <li>
          We use third-party services for hosting and backend infrastructure,
          specifically <strong>Supabase</strong> and{" "}
          <strong>Google Cloud Platform</strong>. Your data may be stored and
          processed on their servers.
        </li>
        <li>
          <strong>Worksheet data</strong> you provide may be processed in
          servers located in the <strong>United States</strong>.
        </li>
      </ul>

      <h2>4. Data Sharing and Selling</h2>
      <ul>
        <li>
          <strong>
            We will not sell your personal data (like your email address) to
            third parties.
          </strong>
        </li>
        <li>
          We may share anonymous, aggregated usage data with third parties for
          analysis or service improvement purposes.
        </li>
        <li>We may share data if required by law or to protect our rights.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We implement reasonable measures to protect your information, but no
        system is completely secure.
      </p>

      <h2>6. Your Choices</h2>
      <p>
        You can request deletion of your account and associated email address by
        contacting us at fredericorodrigues2000@gmail.com.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this policy occasionally. We will notify you of
        significant changes.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have questions, please contact us at
        fredericorodrigues2000@gmail.com.
      </p>

      <hr style={{ margin: "2rem 0" }} />
      <p>
        <Link href="/legal/privacy-policy/pt">Ver em Português</Link>
      </p>
    </main>
  );
}
