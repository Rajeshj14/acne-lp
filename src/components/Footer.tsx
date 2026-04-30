'use client';

export const Footer = () => {
  return (
    <footer
      style={{
        background: '#f5f0e8',
        width: '100%',
        paddingBottom: '36px',
        paddingLeft: 'clamp(20px,4vw,64px)',
        paddingRight: 'clamp(20px,4vw,64px)',
        borderTop: '1px solid rgba(200,169,110,0.25)',
        fontFamily: "'Jost', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500&display=swap');
        .ft-copy {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(26,26,26,0.35);
          font-weight: 300;
          margin: 0;
        }
        .ft-link {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(26,26,26,0.35);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ft-link:hover { color: #c8a96e; }
      `}</style>

      <div
        style={{
          maxWidth: '1200px',
          margin: '40px auto 0',
          borderTop: '1px solid rgba(200,169,110,0.25)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <p className="ft-copy">
          © 2024 LUMINA SKINCARE. ALL RIGHTS RESERVED.
        </p>
        <div style={{ display: 'flex', gap: '32px' }}>
          <a className="ft-link" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};