import {
  type DesignSystem,
  type Page,
  type SlideTransition,
  useSlidePageNumber,
} from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#0f172a', accent: '#3b6ea5' },
  fonts: {
    display: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", system-ui, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", system-ui, sans-serif',
  },
  typeScale: { hero: 132, body: 34 },
  radius: 16,
};

// Extra tokens outside the DesignSystem shape stay as plain consts.
const muted = '#64748b';
const surface = '#f4f6f8';
const border = '#e2e8f0';

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", system-ui, sans-serif';

const STYLES = `
@keyframes clean-fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('clean-tech-demo-styles')) {
  const el = document.createElement('style');
  el.id = 'clean-tech-demo-styles';
  el.textContent = STYLES;
  document.head.appendChild(el);
}
const rise = (delay: number): React.CSSProperties => ({
  animation: `clean-fadeUp 520ms cubic-bezier(0, 0, 0.2, 1) both`,
  animationDelay: `${delay}ms`,
});

// ── Fixed components (verbatim from themes/clean-tech.md) ──────────────────

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontSize: 132,
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      margin: 0,
      color: '#0f172a',
    }}
  >
    {children}
  </h1>
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 22,
        color: '#64748b',
        borderTop: '1px solid #e2e8f0',
        paddingTop: 20,
      }}
    >
      <span>Clean Tech · 2026</span>
      <span style={{ fontVariantNumeric: 'tabular-nums' }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#3b6ea5',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
    }}
  >
    <span style={{ width: 28, height: 2, background: '#3b6ea5', display: 'inline-block' }} />
    {children}
  </div>
);

const Shot = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: surface,
      border: `1px solid ${border}`,
      borderRadius: 16,
      padding: 12,
      boxShadow: '0 24px 60px -28px rgba(15, 23, 42, 0.28)',
      overflow: 'hidden',
      display: 'flex',
    }}
  >
    {children}
  </div>
);

// A stand-in "screenshot" so the demo is self-contained (no external assets).
// In a real slide this is an imported <img> or an <ImagePlaceholder>.
const FakeScreenshot = () => (
  <div
    style={{
      width: '100%',
      borderRadius: 8,
      background: '#ffffff',
      border: `1px solid ${border}`,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        height: 56,
        borderBottom: `1px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '0 22px',
      }}
    >
      <span style={{ width: 12, height: 12, borderRadius: 6, background: '#e2e8f0' }} />
      <span style={{ width: 12, height: 12, borderRadius: 6, background: '#e2e8f0' }} />
      <span style={{ width: 12, height: 12, borderRadius: 6, background: '#e2e8f0' }} />
      <span
        style={{
          marginLeft: 16,
          height: 24,
          flex: 1,
          maxWidth: 420,
          borderRadius: 6,
          background: surface,
        }}
      />
    </div>
    <div style={{ display: 'flex', flex: 1 }}>
      <div style={{ width: 190, borderRight: `1px solid ${border}`, padding: 22, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <span style={{ height: 16, width: 120, borderRadius: 4, background: '#3b6ea5' }} />
        <span style={{ height: 12, width: 150, borderRadius: 4, background: surface }} />
        <span style={{ height: 12, width: 130, borderRadius: 4, background: surface }} />
        <span style={{ height: 12, width: 145, borderRadius: 4, background: surface }} />
        <span style={{ height: 12, width: 110, borderRadius: 4, background: surface }} />
      </div>
      <div style={{ flex: 1, padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', gap: 20 }}>
          <span style={{ height: 88, flex: 1, borderRadius: 10, background: '#e8eef6' }} />
          <span style={{ height: 88, flex: 1, borderRadius: 10, background: surface }} />
          <span style={{ height: 88, flex: 1, borderRadius: 10, background: surface }} />
        </div>
        <span style={{ height: 200, borderRadius: 10, background: surface, border: `1px solid ${border}` }} />
      </div>
    </div>
  </div>
);

// ── Demo pages ────────────────────────────────────────────────────────────

const fill: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: '#ffffff',
  color: '#0f172a',
  fontFamily: FONT,
  position: 'relative',
};

const Cover: Page = () => (
  <div style={{ ...fill, padding: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={rise(0)}>
      <Eyebrow>PLATFORM OVERVIEW</Eyebrow>
    </div>
    <div style={{ marginTop: 34, ...rise(90) }}>
      <Title>Ship faster with confidence</Title>
    </div>
    <p style={{ fontSize: 34, color: muted, maxWidth: 1180, marginTop: 28, lineHeight: 1.55, ...rise(180) }}>
      A calm, screenshot-first light theme for technical talks — dark slate type,
      one low-saturation blue, and content that lets the product do the talking.
    </p>
    <Footer />
  </div>
);

const Content: Page = () => (
  <div style={{ ...fill, padding: 120, display: 'flex', flexDirection: 'column' }}>
    <div style={rise(0)}>
      <Eyebrow>DASHBOARD</Eyebrow>
    </div>
    <div style={{ display: 'flex', gap: 64, alignItems: 'center', marginTop: 40, flex: 1 }}>
      <div style={{ width: 460, flexShrink: 0, ...rise(90) }}>
        <h2 style={{ fontSize: 68, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0 }}>
          Everything in one view
        </h2>
        <p style={{ fontSize: 34, color: muted, lineHeight: 1.55, marginTop: 24 }}>
          The screenshot is the hero. Copy stays a narrow rail on the side so the
          image carries the visual weight.
        </p>
        <div style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 12, background: '#e8eef6', color: '#3b6ea5', fontSize: 22, fontWeight: 600, padding: '10px 18px', borderRadius: 999 }}>
          Live metrics · sub-second refresh
        </div>
      </div>
      <div style={{ flex: 1, ...rise(200) }}>
        <Shot>
          <FakeScreenshot />
        </Shot>
      </div>
    </div>
    <Footer />
  </div>
);

const Closer: Page = () => (
  <div style={{ ...fill, padding: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={rise(0)}>
      <Eyebrow>THANKS</Eyebrow>
    </div>
    <h2 style={{ fontSize: 96, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.08, margin: '28px 0 0', maxWidth: 1300, ...rise(90) }}>
      Questions?
    </h2>
    <p style={{ fontSize: 34, color: muted, marginTop: 24, ...rise(180) }}>
      clean-tech · white canvas · slate type · one blue that points
    </p>
    <Footer />
  </div>
);

export const transition: SlideTransition = {
  duration: 200,
  exit: {
    duration: 140,
    easing: 'cubic-bezier(0.4, 0, 1, 1)',
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-4px)' },
    ],
  },
  enter: {
    duration: 200,
    delay: 80,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

export default [Cover, Content, Closer];
