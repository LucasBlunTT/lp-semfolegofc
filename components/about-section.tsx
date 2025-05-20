export default function AboutSection() {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre o Sem Fôlego F.C.</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Fundado pela paixão pelo futebol e amizade, o Sem Fôlego F.C. é mais que um time, é uma família.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Nossa História</h3>
              <p className="text-muted-foreground">
                O Sem Fôlego F.C. foi fundado em 05 de julho de 2023, nascendo da união de amigos que compartilham a
                paixão pelo futebol. Nosso nome reflete nossa dedicação em campo - jogamos até ficar sem fôlego!
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Promover a amizade, o espírito esportivo e a competição saudável através do futebol, sempre buscando
                evoluir como time e como pessoas.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Nossos Valores</h3>
              <p className="text-muted-foreground">
                Respeito, dedicação, trabalho em equipe e paixão pelo jogo são os pilares que sustentam o Sem Fôlego
                F.C. dentro e fora de campo.
              </p>
            </div>
          </div>
          <div className="space-y-4 lg:space-y-8">
            <div className="overflow-hidden rounded-lg bg-shield aspect-video">
              <div className="flex h-full items-center justify-center text-center p-6 text-black">
                <p className="text-lg font-medium italic">
                  "Jogamos com o coração, lutamos até o último minuto, e mesmo sem fôlego, nunca desistimos de uma
                  partida."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg bg-shield aspect-square">
                <div className="flex h-full items-center justify-center p-4 text-black">
                  <p className="font-bold text-3xl">2023</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-shield aspect-square">
                <div className="flex h-full items-center justify-center p-4 text-black">
                  <p className="font-bold text-3xl">PAIXÃO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
