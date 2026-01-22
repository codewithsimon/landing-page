import { Github, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {

  return (
    <footer
      className="border-t"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--surface)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/whatsapp_image_2026-01-22_at_3.34.43_pm-removebg-preview.png"
              alt="BASIX"
              className="h-12 w-auto mb-4"
            />
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: 'var(--muted)' }}
            >
              Beneficial Artificial Super Intelligence X Market. A decentralized platform where creators, developers, investors, and entrepreneurs co-own and monetize AI, IP, and innovation.
            </p>
          </div>

          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: 'var(--heading)' }}
            >
              ECOSYSTEM
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
              <li>
                <a
                  href="#marketplace"
                  className="transition-colors"
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#governance"
                  className="transition-colors"
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
                >
                  Governance
                </a>
              </li>
              <li>
                <a
                  href="#academy"
                  className="transition-colors"
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
                >
                  Academy
                </a>
              </li>
              <li>
                <a
                  href="#tokenization"
                  className="transition-colors"
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
                >
                  Tokenization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: 'var(--heading)' }}
            >
              CONNECT
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm"
          style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
        >
          <p>© 2025 BASIX Market DAO. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="transition-colors"
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
            >
              Terms
            </a>
            <a
              href="#"
              className="transition-colors"
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors"
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
