import React from 'react'
import FAQItem from './Faqitem';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Faq = () => {
  const faqData = [
    {
      question: "QUAL O HORÁRIO DE FUNCIONAMENTO?",
      answer: "Estamos abertos todos os dias 24 horas, basta fazer a reserva antecipadamente."
    },
    {
      question: "O PESQUEIRO VENDE ISCAS?",
      answer: "Não vendemos iscas."
    },
    {
      question: "QUAL O PREÇO DA COMIDA?",
      answer: "Restaurante almoço e jantar R$ 40,00 cada, café da manhã R$ 25,00."
    },
    {
      question: "CRIANÇAS PAGAM?",
      answer: "Crianças até cinco anos não pagam e crianças de seis a dez anos pagam meia taxa."
    },
    {
      question: "VOCÊS ALUGAM VARA PARA PESCAR?",
      answer: "Alugamos sim, porém temos uma quantidade limitada, o ideal é combinar o aluguel dos materiais na reserva."
    },
    // Adicione mais objetos conforme necessário
  ];

  return (
    <section className="sm:py-24 py-12 bg-[url('/images/fish-icon-1.png')] bg-no-repeat bg-blend-exclusion bg-[bottom_left] max-sm:bg-right  bg-fixed bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-3xl font-extrabold text-secondary mb-10 max-sm:text-center">FAQ - Perguntas mais frequentes <span className=''></span> </h2>

        <Accordion type="multiple" >
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger><h2 className='text-xl text-secondary'>{faq.question}</h2></AccordionTrigger>
              <AccordionContent>
                <p className='max-md:text-base font-medium text-lg text-gray-700'>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq