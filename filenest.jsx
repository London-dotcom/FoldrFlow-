import { useState } from "react";

const tiers = [
  {
    id: "starter",
    name: "Starter",
    price: "$125",
    range: "0–100 files",
    tagline: "Perfect for small cleanups",
  },
  {
    id: "starter-plus",
    name: "Starter Plus",
    price: "$300",
    range: "101–300 files",
    tagline: "Ideal for growing folders",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$650",
    range: "301–1,000 files",
    tagline: "Best for active businesses",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$1,200",
    range: "1,001–3,000 files",
    tagline: "For large digital libraries",
  },
];

export default function FileNest() {
  const [selected, setSelected] = useState("starter");
  const [folderLink, setFolderLink] = useState("");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedTier = tiers.find((t) => t.id === selected);

  const handleSubmit = () => {
    if (!folderLink || !name || !email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.successCard}>
          <div style={styles.successIcon}>✦</div>
          <h2 style={styles.successTitle}>Order Confirmed!</h2>
          <p style={styles.successText}>
            Thank you, <strong>{name}</strong>. We've received your{" "}
            <strong>{selectedTier.name}</strong> order.
          </p>
          <p style={styles.successSub}>
            A confirmation has been sent to <strong>{email}</strong>.<br />
            You'll receive another email once your files are ready.
          </p>
          <div style={styles.successBadge}>
            {selectedTier.name} · {selectedTier.price} · {selectedTier.range}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.logoMark}>✦</div>
        <h1 style={styles.logo}>FileNest</h1>
        <p style={styles.tagline}>Professional, human-powered file organization.</p>
        <p style={styles.subTagline}>
          Share your folder link, tell us how you want things organized,<br />
          and we'll handle the rest — no accounts required.
        </p>
        <div style={styles.trustRow}>
          {["All file types supported", "Handled by a real person", "Secure and private"].map((t) => (
            <span key={t} style={styles.trustBadge}>
              <span style={styles.check}>✓</span> {t}
            </span>
          ))}
        </div>
      </div>

      <div style={styles.divider} />

      {/* Card */}
      <div style={styles.card}>

        {/* Tier selection */}
        <div style={styles.section}>
          <label style={styles.label}>Select your organization plan:</label>
          <div style={styles.tierGrid}>
            {tiers.map((tier) => (
              <div
                key={tier.id}
                onClick={() => setSelected(tier.id)}
                style={{
                  ...styles.tierCard,
                  ...(selected === tier.id ? styles.tierCardActive : {}),
                }}
              >
                <div style={styles.tierTop}>
                  <div style={{
                    ...styles.radio,
                    ...(selected === tier.id ? styles.radioActive : {})
                  }}>
                    {selected === tier.id && <div style={styles.radioDot} />}
                  </div>
                  <span style={styles.tierName}>{tier.name}</span>
                </div>
                <div style={styles.tierPrice}>{tier.price}</div>
                <div style={styles.tierDivider} />
                <div style={styles.tierRange}>{tier.range}</div>
                <div style={styles.tierTagline}>{tier.tagline}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Folder link */}
        <div style={styles.section}>
          <label style={styles.label}>Paste your folder link:</label>
          <input
            style={styles.input}
            type="url"
            placeholder="Google Drive or Dropbox shared folder link"
            value={folderLink}
            onChange={(e) => setFolderLink(e.target.value)}
          />
          <p style={styles.hint}>We'll organize directly in your cloud storage — your files never leave your drive.</p>
        </div>

        {/* Notes */}
        <div style={styles.section}>
          <label style={styles.label}>Notes / Instructions:</label>
          <textarea
            style={styles.textarea}
            placeholder="Tell us how you'd like your files organized..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
          />
          <p style={styles.hint}>Folder structure, naming preferences, any special instructions</p>
        </div>

        {/* Details */}
        <div style={styles.section}>
          <label style={styles.label}>Your Details:</label>
          <div style={styles.row}>
            <input
              style={styles.inputHalf}
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              style={styles.inputHalf}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Payment placeholder */}
        <div style={styles.section}>
          <label style={styles.label}>Payment Information:</label>
          <div style={styles.paymentBox}>
            <span style={styles.payIcon}>💳</span>
            <input style={styles.payInput} placeholder="Card number" disabled />
            <input style={styles.payInputSm} placeholder="MM / YY" disabled />
            <input style={styles.payInputSm} placeholder="CVC" disabled />
          </div>
          <p style={styles.hint}>Payment processing via Stripe (demo — not active)</p>
        </div>

        {/* CTA */}
        <button
          style={{
            ...styles.cta,
            opacity: (!folderLink || !name || !email) ? 0.5 : 1,
            cursor: (!folderLink || !name || !email) ? "not-allowed" : "pointer",
          }}
          onClick={handleSubmit}
        >
          Complete Order · {selectedTier.price}
        </button>

        <p style={styles.stripeNote}>
          🔒 Secure checkout powered by <strong>Stripe</strong>
        </p>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.footerCopy}>© {new Date().getFullYear()} FileNest. All rights reserved.</p>
        <div style={styles.footerLinks}>
          <a href="#privacy" style={styles.footerLink}>Privacy Policy</a>
          <span style={styles.footerDot}>·</span>
          <a href="#terms" style={styles.footerLink}>Terms of Use</a>
          <span style={styles.footerDot}>·</span>
          <a href="#faq" style={styles.footerLink}>FAQ</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F7F5F0",
    fontFamily: "'DM Sans', sans-serif",
    padding: "48px 16px 80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    maxWidth: 620,
    marginBottom: 8,
  },
  logoMark: {
    fontSize: 28,
    color: "#2563EB",
    marginBottom: 4,
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 48,
    fontWeight: 900,
    color: "#0F172A",
    margin: "0 0 12px",
    letterSpacing: "-1px",
  },
  tagline: {
    fontSize: 18,
    fontWeight: 500,
    color: "#1E293B",
    margin: "0 0 10px",
  },
  subTagline: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 1.6,
    margin: "0 0 20px",
  },
  trustRow: {
    display: "flex",
    justifyContent: "center",
    gap: 24,
    flexWrap: "wrap",
  },
  trustBadge: {
    fontSize: 13,
    color: "#334155",
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  check: {
    color: "#16A34A",
    fontWeight: 700,
  },
  divider: {
    width: "100%",
    maxWidth: 700,
    height: 1,
    background: "#E2E8F0",
    margin: "28px 0",
  },
  card: {
    background: "#FFFFFF",
    borderRadius: 16,
    padding: "36px 40px",
    maxWidth: 700,
    width: "100%",
    boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
  },
  section: {
    marginBottom: 28,
  },
  label: {
    display: "block",
    fontWeight: 600,
    fontSize: 14,
    color: "#0F172A",
    marginBottom: 12,
  },
  tierGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 10,
  },
  tierCard: {
    border: "1.5px solid #E2E8F0",
    borderRadius: 10,
    padding: "14px 12px",
    cursor: "pointer",
    transition: "all 0.15s ease",
    background: "#FAFAFA",
  },
  tierCardActive: {
    border: "2px solid #2563EB",
    background: "#EFF6FF",
  },
  tierTop: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    border: "2px solid #CBD5E1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  radioActive: {
    border: "2px solid #2563EB",
  },
  radioDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#2563EB",
  },
  tierName: {
    fontSize: 13,
    fontWeight: 600,
    color: "#0F172A",
  },
  tierPrice: {
    fontSize: 22,
    fontWeight: 700,
    color: "#0F172A",
    marginBottom: 8,
    fontFamily: "'Playfair Display', serif",
  },
  tierDivider: {
    height: 1,
    background: "#E2E8F0",
    marginBottom: 8,
  },
  tierRange: {
    fontSize: 12,
    color: "#475569",
    marginBottom: 4,
    fontWeight: 500,
  },
  tierTagline: {
    fontSize: 11,
    color: "#94A3B8",
    fontStyle: "italic",
  },
  input: {
    width: "100%",
    padding: "11px 14px",
    border: "1.5px solid #E2E8F0",
    borderRadius: 8,
    fontSize: 14,
    color: "#0F172A",
    background: "#FAFAFA",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "'DM Sans', sans-serif",
  },
  textarea: {
    width: "100%",
    padding: "11px 14px",
    border: "1.5px solid #E2E8F0",
    borderRadius: 8,
    fontSize: 14,
    color: "#0F172A",
    background: "#FAFAFA",
    outline: "none",
    resize: "vertical",
    boxSizing: "border-box",
    fontFamily: "'DM Sans', sans-serif",
  },
  hint: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 6,
  },
  row: {
    display: "flex",
    gap: 12,
  },
  inputHalf: {
    flex: 1,
    padding: "11px 14px",
    border: "1.5px solid #E2E8F0",
    borderRadius: 8,
    fontSize: 14,
    color: "#0F172A",
    background: "#FAFAFA",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
  },
  paymentBox: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    background: "#FAFAFA",
    border: "1.5px solid #E2E8F0",
    borderRadius: 8,
    padding: "10px 14px",
  },
  payIcon: {
    fontSize: 18,
  },
  payInput: {
    flex: 1,
    border: "none",
    background: "transparent",
    fontSize: 14,
    color: "#94A3B8",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
  },
  payInputSm: {
    width: 70,
    border: "none",
    background: "transparent",
    fontSize: 14,
    color: "#94A3B8",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
  },
  cta: {
    width: "100%",
    padding: "16px",
    background: "#2563EB",
    color: "#FFFFFF",
    border: "none",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "'DM Sans', sans-serif",
    transition: "background 0.2s ease",
    marginBottom: 12,
  },
  stripeNote: {
    textAlign: "center",
    fontSize: 13,
    color: "#94A3B8",
    margin: 0,
  },
  successCard: {
    background: "#FFFFFF",
    borderRadius: 16,
    padding: "60px 40px",
    maxWidth: 500,
    width: "100%",
    textAlign: "center",
    boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
  },
  successIcon: {
    fontSize: 40,
    color: "#2563EB",
    marginBottom: 16,
  },
  successTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 32,
    fontWeight: 900,
    color: "#0F172A",
    margin: "0 0 12px",
  },
  successText: {
    fontSize: 16,
    color: "#334155",
    marginBottom: 8,
  },
  successSub: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 1.6,
    marginBottom: 24,
  },
  successBadge: {
    display: "inline-block",
    background: "#EFF6FF",
    border: "1.5px solid #BFDBFE",
    borderRadius: 8,
    padding: "8px 16px",
    fontSize: 13,
    color: "#2563EB",
    fontWeight: 500,
  },
  footer: {
    marginTop: 40,
    textAlign: "center",
    maxWidth: 700,
    width: "100%",
  },
  footerCopy: {
    fontSize: 12,
    color: "#94A3B8",
    marginBottom: 8,
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  footerLink: {
    fontSize: 12,
    color: "#64748B",
    textDecoration: "none",
    borderBottom: "1px solid #CBD5E1",
    paddingBottom: 1,
  },
  footerDot: {
    fontSize: 12,
    color: "#CBD5E1",
  },
};
