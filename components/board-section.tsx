import type React from 'react';
import Image, { StaticImageData } from 'next/image';
import Roberto from '@/public/images/roberto.jpeg';
import Afonso from '@/public/images/afonso.jpeg';
import Carlos from '@/public/images/carlos.jpeg';
import Cristiano from '@/public/images/cristiano.jpg';
import Durval from '@/public/images/durval.jpeg';
import Bruno from '@/public/images/bruno.jpg';

interface BoardMember {
  name: string;
  image: StaticImageData;
}

export default function BoardSection() {
  const boardMembers: BoardMember[] = [
    {
      name: 'Roberto Felipe',
      image: Roberto,
    },
    {
      name: 'Afonso',
      image: Afonso,
    },
    {
      name: 'Carlos Henrique',
      image: Carlos,
    },
    {
      name: 'Cristiano',
      image: Cristiano,
    },
    {
      name: 'Durval',
      image: Durval,
    },
    {
      name: 'Bruno Fenômeno',
      image: Bruno,
    },
  ];

  return (
    <section
      id="diretoria"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-muted"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Diretoria
            </h2>
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
              <div className="mb-4 p-1 rounded-full bg-shield/20 overflow-hidden flex items-center justify-center">
                <Image      
                  src={member.image}
                  alt={member.name}
                  className="rounded-full object-cover w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40  transition-transform transform hover:scale-105 overflow-hidden object-[center_top]"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
