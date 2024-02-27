import React from 'react';
import Image from 'next/image';
import FiveStars from './FiveStars';

const Reviews = () => {
  const reviews = [
    {
      name: 'Nivaldo Sabino',
      comment: 'Pesqueiro localizado a 110 kms de Campo Grande, na beira da BR rumo a Aquidauana. Muito boa estrutura física com varios apartamentos, sendo alguns com ar condicionado e TV. O acesso ao rio Aquidauana é fácilimo. Alugam barcos, motores, vendem iscas. Para quem gosta pescar de barranco há estrutura de madeira excelente para isso. Possui restaurante com otimas refeições. O atendimento é muito bom,sendo o proprietário Sr. Carlos, muito atencioso e cordial. Recomendo!!!',
      img: 'https://lh3.googleusercontent.com/a-/ALV-UjVuZGkT8BiBNRBHBmvbH7oW9ZarFPgeiwBOxWmBWnmpP51j=s40-c-rp-mo-ba4-br100'
    },
    {
      name: 'Hidrovar Ltda',
      comment: 'Excelente opção para quem quer ir pescar no Pantanal, a pousada fica ao lado do rio Aquidauana com boa estrutura para pesca.Há também opções para refeições. Tem bons quiosques com churrasqueiras. Bastante barcos a disposição para pescar. O Sr Carlos Sato é muito hospitaleiro, o preço é bem atrativo. No local tem piscinas, campo de futebol, mesa de sinuca e muito verde.',
      img: 'https://lh3.googleusercontent.com/a-/ALV-UjUw4BHkAOtsiu40AfQjX_jts_i3MXSjsFwY-w5TPd1nbLNn=s40-c-rp-mo-br100'
    },
    {
      name: 'Eduardo Ocanha',
      comment: 'Nota mil. Esperimente da cordialidade do Proprietario Sr Carlos Sato e sua Esposa. Recomento o sashimi e Pacu Frito com cerveja ESTUPIDAMENTE GELADA... a o fogao e a lenha... Deixe espaco para a comida servida no fogao a lenha...',
      img: 'https://lh3.googleusercontent.com/a-/ALV-UjWCfugILPB1EW1hx4bs78kVkKoMT2vMYw5HrZeTHUSWcZts=s40-c-rp-mo-ba5-br100'
    },
    {
      name: 'Rogério Ishyama',
      comment: 'Esse é o ligar dos peixes, para quem procura aventura aí está o lugar,aí o pescador sai com história para contar pro resto da vida kkkkkkk',
      img: 'https://lh3.googleusercontent.com/a/ACg8ocJCKstHdgRl9FNldqCRv4a-0OqkbMDA7J7cdcL5Rl0x=s40-c-rp-mo-ba2-br100'
    },
  ];

  const fotos = [
    '/images/pesqueirohomem.jpg',
    '/images/sobrepic3.jpg',
    // '/images/sobrepic4.jpg',
    '/images/sobrepic.jpg',
  ]

  return (
    <section id='review' className="bg-primary py-8 sm:py-20 px-4 ">
      <div className=" text-black p-4 rounded-lg sm:container">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-8 text-secondary max-sm:text-center">Depoimentos reais Google</h2>
        <div className="grid xl:grid-cols-4 gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <div className='flex gap-2 justify-between items-center'>
                <div className='flex gap-2'>
                  <img src={review.img} alt="Quote" className="inline-block mr-2" />
                  <p className="text-sm font-medium">{review.name}</p>
                </div>
                <Image src={'/images/googleicon.webp'} width={40} height={40} alt='googleicon' />
              </div>
              <FiveStars />
              <p className="text-sm">{review.comment}</p>
              <div className="mt-2">
              </div>
            </div>
          ))}
        </div>
        <div  className='grid grid-cols-1 xl:grid-cols-3 gap-4 mt-10'>
          {fotos.map((foto, index) => (
            <Image src={foto} width={400} height={400} alt='sobrepic' className='w-full h-[200px] lg:h-[370px] object-cover object-top rounded-lg'  key={index}/>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;