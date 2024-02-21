import Image from 'next/image'
import React from 'react'
import PeixeItem from './PeixeItem'

const PeixesCatalog = () => {
  const peixes = [
    { name: 'Dourado', scientificName: 'Salminus maxillosus; Salminus. brasiliensis', maxHeight: '+1m', maxWeight: '+25kg', image: '/images/dourado.gif', iscas: 'Entre as iscas artificiais, as que apresentam melhores resultados são os plugs de meia água e as colheres, que podem ser utilizadas no corrico ou no arremesso em direção às margens. Iscas naturais como tuvira, sarapó, lambari, curimbatá e piraputanga também são bastante produtivas. Podem ser utilizadas na rodada, com um pequeno chumbo para afundar a linha e mantê-la na coluna d’água, ou deixando o barco rodar perto das margens, onde a isca é jogada repetidamente em direção às galhadas.' },
    { name: 'Cachara, Surubim', scientificName: 'Pseudoplatystoma fasciatum', maxHeight: '+1m', maxWeight: '?', image: '/images/cachara.gif', iscas: 'É capturado principalmente com iscas naturais de peixes, como sarapós, muçum, tuviras, lambaris, piaus, curimbatás e minhocuçu. Também podem ser utilizadas iscas artificiais, como plugs de meia água e de fundo, principalmente em lagos, lagoas e nas praias, mas, nesse caso, as iscas devem ser trabalhadas bem próximas ao fundo.' },
    { name: 'Barbado, Piranambu, Barba-chata', scientificName: 'Pinirampus pirinampu', maxHeight: '+80cm', maxWeight: '+12kg', image: '/images/barbado.gif', iscas: 'Este peixe só é capturado com iscas naturais, como peixes inteiros ou em pedaços e minhocuçu.' },
    { name: 'Jaú, Giant Catfish', scientificName: 'Paulicea luetkeni', maxHeight: '+1,5m', maxWeight: '+100kg', image: '/images/jau.gif', iscas: 'Somente iscas naturais, como pequenos peixes de escama, tuvira, muçum e, também, minhocuçu.' },
    { name: 'Pintado, Speckled Catfish', scientificName: 'Pseudoplatystoma corruscans', maxHeight: '+1m', maxWeight: '?', image: '/images/pintado.gif', iscas: 'Somente iscas naturais, como pequenos peixes de escama, tuvira, muçum e, também, minhocuçu.' },
    { name: 'Piraputanga', scientificName: 'Brycon microleps; Brycon hilarii', maxHeight: '+50cm', maxWeight: '2,5kg', image: '/images/piraputanga.gif', iscas: 'Pode-se usar iscas naturais, frutinhas e pequenos peixes que compõem a dieta destes peixes, e iscas artificiais, como spinners e pequenos plugs de meia água.' },
    { name: 'Pacu, Pacu-caranha', scientificName: 'Piaractus mesopotamicus', maxHeight: '+50cm', maxWeight: '?', image: '/images/pacu.gif', iscas: 'Somente iscas naturais, como tucum, laranjinha-de-pacu, pedaços de jenipapo, caranguejo, minhocuçu, filé de curimbatá azedo e bolinhas de massa de farinha de mandioca.' },
    { name: 'Curimbatá, Curimatã, Curimatá, Curimba, Papa-terra', scientificName: 'Prochilodus spp', maxHeight: '+80cm', maxWeight: '?', image: '/images/curimbata.gif', iscas: 'Como são peixes detritívoros, não atacam iscas artificiais. A melhor isca é a massa de farinha de trigo iscada no anzol até a metade do colo. Deve ser consistente, nem muito dura nem mole demais.' },
    { name: 'Cachorra, Peixe-cachorro, Pirandirá/Paraya', scientificName: 'Hydrolycus scomberoides', maxHeight: '1m', maxWeight: '?', image: '/images/cachorra.gif', iscas: 'Pode ser capturado com peixes inteiros ou em pedaços (lambaris, tuviras, curimbatás etc.) e com iscas artificiais, como plugs de meia água, poppers e hélices.' },
  ]

  return (
    <section id='peixes' className="sm:py-24 py-12 bg-[url('/images/fish-icon-1.png')] bg-no-repeat bg-blend-exclusion bg-[bottom_left] max-sm:bg-right bg-fixed bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-xl sm:text-3xl font-extrabold text-secondary mb-10 max-sm:text-center">Catálogo de Peixes <span className=''>Rio Aquidauana MS</span>
          <br />
          <strong className='text-primary text-3xl sm:text-5xl'>Conheça alguns dos peixes da nossa região</strong></h1>
        <div className="grid xl:grid-cols-4 gap-4 md:grid-cols-3 mt-20">
          {peixes.map((peixe, index) => (
           <PeixeItem key={index} {...peixe} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PeixesCatalog