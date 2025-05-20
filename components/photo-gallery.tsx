import Image from "next/image"

export default function PhotoGallery() {
  // Placeholder para as imagens da galeria
  const galleryImages = [
    { id: 1, src: "/placeholder.svg?height=300&width=400", alt: "Time em campo" },
    { id: 2, src: "/placeholder.svg?height=300&width=400", alt: "Comemoração de gol" },
    { id: 3, src: "/placeholder.svg?height=300&width=400", alt: "Treino" },
    { id: 4, src: "/placeholder.svg?height=300&width=400", alt: "Confraternização" },
    { id: 5, src: "/placeholder.svg?height=300&width=400", alt: "Jogo importante" },
    { id: 6, src: "/placeholder.svg?height=300&width=400", alt: "Momento de descontração" },
  ]

  return (
    <section id="galeria" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galeria de Fotos</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Momentos inesquecíveis do Sem Fôlego F.C. dentro e fora de campo.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Siga-nos no Instagram para mais fotos e atualizações:</p>
          <a
            href="https://www.instagram.com/semfolego.fc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-2 text-primary hover:underline"
          >
            @semfolego.fc
          </a>
        </div>
      </div>
    </section>
  )
}
