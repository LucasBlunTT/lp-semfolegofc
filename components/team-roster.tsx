interface Player {
  number: string
  name: string
  position?: string
}

export default function TeamRoster() {
  const goalkeepers: Player[] = [
    { number: "🧤", name: "André", position: "Goleiro" },
    { number: "🧤", name: "Lucas", position: "Goleiro" },
  ]

  const players: Player[] = [
    { number: "1", name: "Edu" },
    { number: "2", name: "Léo" },
    { number: "3", name: "Kalocaa" },
    { number: "4", name: "Romario" },
    { number: "5", name: "Bruninho" },
    { number: "6", name: "Willian" },
    { number: "7", name: "Thalisson" },
    { number: "8", name: "Deh" },
    { number: "9", name: "K9" },
    { number: "10", name: "Pi" },
    { number: "11", name: "Arthur" },
    { number: "12", name: "Tanke" },
    { number: "13", name: "Cris" },
    { number: "14", name: "JM" },
    { number: "15", name: "KDS" },
    { number: "16", name: "Dylan" },
    { number: "17", name: "Fon" },
    { number: "18", name: "Dudu" },
  ]

  return (
    <section id="elenco" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nosso Elenco</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Conheça os jogadores que dão vida ao Sem Fôlego F.C.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Goleiros</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {goalkeepers.map((player) => (
              <div
                key={player.name}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card text-card-foreground shadow"
              >
                <div className="overflow-hidden rounded-full bg-shield w-24 h-24 flex items-center justify-center">
                  <span className="text-4xl">{player.number}</span>
                </div>
                <h4 className="text-xl font-bold">{player.name}</h4>
                <p className="text-sm text-muted-foreground">{player.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Jogadores de Linha</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {players.map((player) => (
              <div
                key={player.number}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card text-card-foreground shadow"
              >
                <div className="overflow-hidden rounded-full bg-shield w-16 h-16 flex items-center justify-center">
                  <span className="text-xl font-bold">{player.number}</span>
                </div>
                <h4 className="text-lg font-bold">{player.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
