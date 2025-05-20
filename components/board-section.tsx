import type React from 'react';
import Image, { StaticImageData } from 'next/image';
import Bruno from '@/public/images/bruno.jpg';

interface BoardMember {
  name: string;
  image: string | StaticImageData;
}

export default function BoardSection() {
  const boardMembers: BoardMember[] = [
    {
      name: 'Betinho',
      image:
        'https://instagram.ffln2-3.fna.fbcdn.net/v/t51.2885-19/466388904_1130369191793989_5712887965303634885_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.ffln2-3.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QGTZCyD2C7v2tuhpiGcSvHhBJH4cuSUDiw_LzA1MdUnflkY7bk2QABr9Fb_TNtdIQS-TGI38o_L0Icm1tBfyRTr&_nc_ohc=OXGbcUPRl-cQ7kNvwEmdixH&_nc_gid=rTB9mlE-BAq03uqS-S5ygg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfKwuQ5Ujde8m11e86pSNLvxapnmWbSK1lP4t4n9bMFLPA&oe=68318E8C&_nc_sid=7a9f4b',
    },

    {
      name: 'Afonso',
      image:
        'https://media-gru1-1.cdn.whatsapp.net/v/t61.24694-24/468449937_559004093400614_8192360794247796762_n.jpg?ccb=11-4&oh=01_Q5Aa1gG5cwU0vfpfznR-lckEjv2XqCfTzDQs3WNZxIyZklrPrw&oe=6838E5C9&_nc_sid=5e03e0&_nc_cat=103',
    },
    {
      name: 'Carlos Henrique',
      image:
        'https://media-gru1-1.cdn.whatsapp.net/v/t61.24694-24/488917875_2906971559462680_7366707788359378112_n.jpg?ccb=11-4&oh=01_Q5Aa1gGRoKo6wFNiBNvSDbHTk7LueIS0qzfYSqaMf_TtdvdMaw&oe=6838D269&_nc_sid=5e03e0&_nc_cat=104',
    },
    {
      name: 'Cristiano',
      image:
        'https://media-gru1-1.cdn.whatsapp.net/v/t61.24694-24/491840311_1872668129940338_1700936211142633891_n.jpg?ccb=11-4&oh=01_Q5Aa1gESxFwoQdHnRS9WI5Ag1uM6vKxTP1_rfDpVxWFMkm3d8Q&oe=6838C0D4&_nc_sid=5e03e0&_nc_cat=104',
    },
    {
      name: 'Durval',
      image:
        'https://media-gru1-1.cdn.whatsapp.net/v/t61.24694-24/406918656_792015099401126_3659055451669166276_n.jpg?ccb=11-4&oh=01_Q5Aa1gEl2mdrXucWSPlDLt_NgfPVmKc9imOpcqf-OTDo5dBKkg&oe=6838D2FF&_nc_sid=5e03e0&_nc_cat=108',
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
              <div className="mb-4 p-1 rounded-full bg-shield/20 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full object-fit w-20 h-20 md:w-32 md:h-32 lg:w-26 lg:h-26 transition-transform transform hover:scale-105"
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
