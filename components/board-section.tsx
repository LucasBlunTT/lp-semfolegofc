import type React from "react"
import { Trophy, Briefcase, Calculator, Megaphone, Calendar, Users, Star } from "lucide-react"

interface BoardMember {
  name: string
  role: string
  icon: React.ReactNode
}

export default function BoardSection() {
  const boardMembers: BoardMember[] = [
    {
      name: "Betinho",
      role: "Presidente",
      icon: <Trophy className="h-8 w-8 text-primary" />,
    },
    {
      name: "Carlos",
      role: "Vice-Presidente",
      icon: <Star className="h-8 w-8 text-primary" />,
    },
    {
      name: "Cristiano",
      role: "Diretor Financeiro",
      icon: <Calculator className="h-8 w-8 text-primary" />,
    },
    {
      name: "Caloca",
      role: "Diretor Técnico",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
      name: "Afonso",
      role: "Diretor de Comunicação",
      icon: <Megaphone className="h-8 w-8 text-primary" />,
    },
    {
      name: "Renato",
      role: "Diretor de Eventos",
      icon: <Calendar className="h-8 w-8 text-primary" />,
    },
    {
      name: "+55 48",
      role: "Diretor de Relações",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <section id="diretoria" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Diretoria</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Conheça os responsáveis pela gestão do Sem Fôlego F.C.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center p-6 rounded-lg border bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 p-3 rounded-full bg-shield/20">{member.icon}</div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
