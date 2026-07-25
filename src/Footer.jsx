// ============================================================
// HYELEARNER: FOUNDATION — FOOTER
// Built by Hyesent.dev
// ============================================================

export default function Footer() {
  return (
    <footer className="py-6 text-center border-t border-border mt-8">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <strong>Hyelearner</strong> — Built by{' '}
        <a
          href="https://hyesent.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          Hyesent.dev
        </a>
      </p>
    </footer>
  )
}