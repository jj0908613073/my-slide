import { ImagePlaceholder, useSlidePageNumber } from '@open-slide/core';
import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import screenshot01 from './assets/影像.png';
import asset1 from './assets/影像 (1).png';



export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#0f172a', accent: '#3b6ea5' },
  fonts: {
    display: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", system-ui, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", system-ui, sans-serif',
  },
  typeScale: { hero: 132, body: 34 },
  radius: 16,
};

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

const muted = '#64748b';
const surface = '#f4f6f8';
const border = '#e2e8f0';
const accentSoft = '#e8eef6';

const fill: CSSProperties = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  position: 'relative',
  boxSizing: 'border-box',
};

const fadeUp = (delay = 0): CSSProperties => ({
  animation: `owFadeUp 520ms cubic-bezier(0, 0, 0.2, 1) ${delay}ms both`,
});

const MotionStyle = () => (
  <style>{`
    @keyframes owFadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      * { animation-duration: 1ms !important; animation-delay: 0ms !important; }
    }
  `}</style>
);

const Title = ({ children }: { children: ReactNode }) => (
  <h1
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 'var(--osd-size-hero)',
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      margin: 0,
      color: 'var(--osd-text)',
    }}
  >
    {children}
  </h1>
);

const PageTitle = ({ children }: { children: ReactNode }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 68,
      fontWeight: 800,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      margin: 0,
      color: 'var(--osd-text)',
    }}
  >{children}
  </h2>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--osd-accent)',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
    }}
  >
    <span style={{ width: 28, height: 2, background: 'var(--osd-accent)', display: 'inline-block' }} />
    {children}
  </div>
);

const Footer = ({ showLink = false }: { showLink?: boolean }) => {
  const { current, total } = useSlidePageNumber();

  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 42,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 22,
        color: muted,
        borderTop: `1px solid ${border}`,
        paddingTop: 18,
      }}
    >
      {showLink ? (
        <a
          href="https://chat.corp.ardentec.com/c/6416d33b-1cc2-4916-b730-ba1026374902"
          style={{ color: muted, textDecoration: 'none' }}
        >
          chat.corp.ardentec.com/c/6416d33b-1cc2-4916-b730-ba1026374902
        </a>
      ) : (
        <span>Open WebUI RAG Demo · 2026</span>
      )}
      <span style={{ fontVariantNumeric: 'tabular-nums' }}>
        {String(current).padStart(2, '0')}{''}{String(total).padStart(2, '0')}
      </span>
    </div>
  );
};
const ScreenshotFrame = ({
  hint,
  width,
  height,
  src,
}: {
  hint: string;
  width: number;
  height: number;
  src?: string;
}) => (
  <div
    style={{
      background: surface,
      border: `1px solid ${border}`,
      borderRadius: 'var(--osd-radius)',
      padding: 12,
      boxShadow: '0 24px 60px -28px rgba(15, 23, 42, 0.28)',
      overflow: 'hidden',
      display: 'flex',
      width: width + 24,
      height: height + 24,
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        width,
        height,
        borderRadius: 8,
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >{src ? (
        <img
          src={src}
          alt=""
          style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: '50% 50%' }}
        />
      ) : (
        <img src={asset1} alt='' style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
      )}
    </div>
  </div>
);

const Caption = ({ children }: { children: ReactNode }) => (
  <p
    style={{
      fontSize: 30,
      lineHeight: 1.5,
      color: muted,
      margin: 0,
      maxWidth: 1180,
    }}
  >
    {children}
  </p>
);

const Rail = ({ label, bullets }: { label: string; bullets?: [string, string?, string?] }) => (
  <aside
    style={{
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      paddingTop: 6,
    }}
  >
    <div
      style={{
        alignSelf: 'flex-start',
        borderRadius: 999,
        background: accentSoft,
        color: 'var(--osd-accent)',
        fontSize: 22,
        fontWeight: 700,
        padding: '10px 16px',
      }}
    >
      {label}
    </div>
    {bullets ? (
      <ul style={{ margin: 0, paddingLeft: 26, color: muted, fontSize: 30, lineHeight: 1.55 }}>
        <li>{bullets[0]}</li>
        {bullets[1] ? <li>{bullets[1]}</li> : null}
        {bullets[2] ? <li>{bullets[2]}</li> : null}
      </ul>
    ) : null}
  </aside>
);


const SolutionBox = () => (
  <div
    style={{
      width: 1180,
      height: 664,
      borderRadius: 'var(--osd-radius)',
      border: `1px solid ${border}`,
      background: surface,
      boxShadow: '0 24px 60px -28px rgba(15, 23, 42, 0.18)',
      boxSizing: 'border-box',
      padding: '72px 84px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 34,
    }}
  >
    <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--osd-accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
      解決辦法
    </div>
    <ol style={{ margin: 0, paddingLeft: 42, color: 'var(--osd-text)', fontSize: 36, lineHeight: 1.55 }}>
      <li>用 inst to agent，透過 origin problem 補充使用者原始問題。</li>
      <li>補回 refine data 可能移除的時間、地點等關鍵上下文。</li>
    </ol>
  </div>
);

const Cover: Page = () => (
  <section
    style={{
      ...fill,
      padding: 120,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <MotionStyle />
    <div style={fadeUp(0)}>
      <Eyebrow>{''}</Eyebrow>
    </div>
    <div style={{ ...fadeUp(90), marginTop: 34 }}>
      <Title>週報</Title>
    </div>
    <p
      style={{
        ...fadeUp(180),
        fontSize: 38,
        lineHeight: 1.55,
        color: muted,
        maxWidth: 1180,
        margin: '30px 0 0',
      }}
    >日期：2026/07/06。。</p>
    <Footer />
  </section>
);

const Demo01: Page = () => (
  <section style={{ ...fill, padding: '76px 120px 0' }}>
    <MotionStyle />
    <div style={fadeUp(0)}>
      <Eyebrow>SCREENSHOT-01</Eyebrow>
    </div>
    <div style={{ ...fadeUp(80), marginTop: 14 }}>
      <PageTitle>Misc_TransformToMarkdown</PageTitle>
    </div>
    <div style={{ ...fadeUp(160), margin: '24px auto 0', width: 1344 }}>
      <ScreenshotFrame hint="screenshot-01: Open WebUI 首頁與模型選擇" width={1320} height={742} src={screenshot01} />
    </div>
    <div style={{ ...fadeUp(240), margin: '18px auto 0', width: 1180 }}>
      <Caption>{''}</Caption>
    </div>
    <Footer />
  </section>
);

const Demo02: Page = () => (
  <section style={{ ...fill, padding: '76px 120px 0' }}>
    <MotionStyle />
    <div style={fadeUp(0)}>
      <Eyebrow>SCREENSHOT-02</Eyebrow>
    </div>
    <div style={{ ...fadeUp(80), marginTop: 14 }}>
      <PageTitle>嘗試解決 refine data 造成的錯誤</PageTitle>
    </div>
    <div style={{ display: 'flex', gap: 44, alignItems: 'flex-start', marginTop: 44 }}>
      <div style={fadeUp(160)}>
        <Rail label="refine data 造成回答的錯誤" />
      </div>
      <div style={fadeUp(220)}>
        <SolutionBox />
      </div>
    </div>
    <Footer showLink />
  </section>
);

const Demo03: Page = () => (
  <section style={{ ...fill, padding: '76px 120px 0' }}>
    <MotionStyle />
    <div style={fadeUp(0)}>
      <Eyebrow>SCREENSHOT-02</Eyebrow>
    </div>
    <div style={{ ...fadeUp(80), marginTop: 14 }}>
      <PageTitle>{''}</PageTitle>
    </div>
    <div style={{ ...fadeUp(160), margin: '24px auto 0', width: 1344 }}>
      <ScreenshotFrame hint="screenshot-03: 在對話中選擇 RAG 知識庫" width={1320} height={742} />
    </div>
    <div style={{ ...fadeUp(240), margin: '18px auto 0', width: 1180 }}>
      <Caption>{''}</Caption>
    </div>
    <Footer />
  </section>
);

const Demo04: Page = () => (
  <section style={{ ...fill, padding: '76px 120px 0' }}>
    <MotionStyle />
    <div style={fadeUp(0)}>
      <Eyebrow>SCREENSHOT-04</Eyebrow>
    </div>
    <div style={{ ...fadeUp(80), marginTop: 14 }}>
      <PageTitle>檢索脈絡回填</PageTitle>
    </div>
    <div style={{ display: 'flex', gap: 44, alignItems: 'flex-start', marginTop: 44 }}>
      <div style={fadeUp(160)}>
        <ScreenshotFrame hint="screenshot-04: 顯示檢索片段與引用來源" width={1180} height={664} />
      </div>
      <div style={fadeUp(220)}>
        <Rail label="RAG 脈絡" bullets={['命中段落', '相似度排序', '來源可追溯']} />
      </div>
    </div>
    <Footer />
  </section>
);

const Demo05: Page = () => (
  <section style={{ ...fill, padding: '76px 120px 0' }}>
    <MotionStyle />
    <div style={fadeUp(0)}>
      <Eyebrow>SCREENSHOT-05</Eyebrow>
    </div>
    <div style={{ ...fadeUp(80), marginTop: 14 }}>
      <PageTitle>多模態輸入</PageTitle>
    </div>
    <div style={{ ...fadeUp(160), margin: '24px auto 0', width: 1344 }}>
      <ScreenshotFrame hint="screenshot-05: 上傳圖片並詢問圖中資訊" width={1320} height={742} />
    </div>
    <div style={{ ...fadeUp(240), margin: '18px auto 0', width: 1180 }}>
      <Caption>多模態模型讀取畫面、表格或照片，再和知識庫文字一起形成回答依據。</Caption>
    </div>
    <Footer />
  </section>
);

const Demo06: Page = () => (
  <section style={{ ...fill, padding: '76px 120px 0' }}>
    <MotionStyle />
    <div style={fadeUp(0)}>
      <Eyebrow>SCREENSHOT-06</Eyebrow>
    </div>
    <div style={{ ...fadeUp(80), marginTop: 14 }}>
      <PageTitle>回答依據生成</PageTitle>
    </div>
    <div style={{ display: 'flex', gap: 44, alignItems: 'flex-start', marginTop: 44 }}>
      <div style={fadeUp(160)}>
        <Rail label="回覆品質" bullets={['摘要先行', '列出依據', '標示不確定性']} />
      </div>
      <div style={fadeUp(220)}>
        <ScreenshotFrame hint="screenshot-06: 產生摘要、建議與引用" width={1180} height={664} />
      </div>
    </div>
    <Footer />
  </section>
);

const Demo07: Page = () => (
  <section style={{ ...fill, padding: '76px 120px 0' }}>
    <MotionStyle />
    <div style={fadeUp(0)}>
      <Eyebrow>SCREENSHOT-07</Eyebrow>
    </div>
    <div style={{ ...fadeUp(80), marginTop: 14 }}>
      <PageTitle>追問與驗證</PageTitle>
    </div>
    <div style={{ ...fadeUp(160), margin: '24px auto 0', width: 1344 }}>
      <ScreenshotFrame hint="screenshot-07: 對同一份資料進行追問與改寫" width={1320} height={742} />
    </div>
    <div style={{ ...fadeUp(240), margin: '18px auto 0', width: 1180 }}>
      <Caption>同一輪對話可以持續縮小問題範圍，快速確認答案是否符合現場情境。</Caption>
    </div>
    <Footer />
  </section>
);

const Demo08: Page = () => (
  <section style={{ ...fill, padding: '76px 120px 0' }}>
    <MotionStyle />
    <div style={fadeUp(0)}>
      <Eyebrow>SCREENSHOT-08</Eyebrow>
    </div>
    <div style={{ ...fadeUp(80), marginTop: 14 }}>
      <PageTitle>部署檢查</PageTitle>
    </div>
    <div style={{ display: 'flex', gap: 44, alignItems: 'flex-start', marginTop: 44 }}>
      <div style={fadeUp(160)}>
        <ScreenshotFrame hint="screenshot-08: 系統設定、模型與知識庫狀態" width={1180} height={664} />
      </div>
      <div style={fadeUp(220)}>
        <Rail label="上線前" bullets={['權限與審計', '資料更新節奏', '評測與回饋']} />
      </div>
    </div>
    <Footer />
  </section>
);

const Closing: Page = () => (
  <section
    style={{
      ...fill,
      padding: 120,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <MotionStyle />
    <div style={fadeUp(0)}>
      <Eyebrow>WRAP-UP</Eyebrow>
    </div>
    <div style={{ ...fadeUp(90), marginTop: 34 }}>
      <Title>對話介面是入口，可信資料流才是核心。</Title>
    </div>
    <div
      style={{
        ...fadeUp(180),
        display: 'flex',
        gap: 22,
        marginTop: 44,
        fontSize: 32,
        color: muted,
      }}
    >
      <span>多模態理解</span>
      <span style={{ color: border }}>/</span>
      <span>RAG 引用</span>
      <span style={{ color: border }}>/</span>
      <span>可部署治理</span>
    </div>
    <div style={{ ...fadeUp(260), marginTop: 70, fontSize: 58, fontWeight: 800, color: 'var(--osd-accent)' }}>
      Q&A
    </div>
    <Footer />
  </section>
);

export const meta: SlideMeta = {
  title: '多模態 RAG 系統週報',
  theme: 'clean-tech',
  createdAt: '2026-07-06T15:11:51.297Z',
};

export default [Cover, Demo01, Demo03, Demo02] satisfies Page[];
