import CurrentYear from '@/components/ui/CurrentYear'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 text-center">
      <p className="text-slate-400 text-xs">
        © <CurrentYear fallback={new Date().getFullYear()} /> Adil Abbasov.
      </p>
    </footer>
  )
}
