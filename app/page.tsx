import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import TeamRoster from "@/components/team-roster"
import PhotoGallery from "@/components/photo-gallery"
import AboutSection from "@/components/about-section"
import BoardSection from "@/components/board-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Sem Fôlego F.C. Logo" width={50} height={50} className="h-10 w-auto" />
            <span className="text-xl font-bold">Sem Fôlego F.C.</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#sobre" className="text-sm font-medium transition-colors hover:text-primary">
              Sobre
            </Link>
            <Link href="#diretoria" className="text-sm font-medium transition-colors hover:text-primary">
              Diretoria
            </Link>
            <Link href="#elenco" className="text-sm font-medium transition-colors hover:text-primary">
              Elenco
            </Link>
            <Link href="#galeria" className="text-sm font-medium transition-colors hover:text-primary">
              Galeria
            </Link>
            <Link
              href="https://www.instagram.com/semfolego.fc/"
              target="_blank"
              className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-shield text-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Image src="/images/logo.png" alt="Sem Fôlego F.C. Logo" width={200} height={200} className="mx-auto" />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sem Fôlego F.C.</h1>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  Paixão, garra e determinação dentro de campo.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="#elenco"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Conheça o Elenco
                </Link>
                <Link
                  href="https://www.instagram.com/semfolego.fc/"
                  target="_blank"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Siga no Instagram
                </Link>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <BoardSection />
        <TeamRoster />
        <PhotoGallery />
      </main>
      <footer className="w-full border-t bg-shield py-6 text-black">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Sem Fôlego F.C. Logo" width={40} height={40} />
            <p className="text-sm">© 2025 Sem Fôlego F.C. Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/semfolego.fc/"
              target="_blank"
              className="flex items-center gap-1 text-sm hover:underline"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
