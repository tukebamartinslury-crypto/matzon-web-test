export function LoadingScreen() {
  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: '#0B111A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
      <div style={{ marginBottom: 40, textAlign: 'center' }}>
        <div suppressHydrationWarning style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, marginBottom: 8 }}>
          MATZ<span style={{ fontWeight: 400, fontFamily: 'serif', fontSize: 40 }}>ON</span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#0075FF', letterSpacing: '0.2em', textTransform: 'uppercase' }}>The Home of Digital Football</p>
      </div>
    </div>
  );
}
