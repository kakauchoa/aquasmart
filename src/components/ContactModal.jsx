import { useState } from 'react'
import { Headphones, Phone, MessageCircle, Mail, AlertCircle, X, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'Como funciona o IPTU Verde?',
    a: 'O programa IPTU Verde concede desconto no IPTU proporcional à economia de água. Economizando 15% ou mais em relação ao ano anterior, você garante 8% de desconto. Atingindo 20%, o desconto sobe para 10%.',
  },
  {
    q: 'Como reportar um vazamento?',
    a: 'Acesse a tela "Reportar Problema" no app, selecione o tipo de ocorrência, informe o endereço e envie uma foto opcional. O chamado é encaminhado diretamente ao SAERP.',
  },
  {
    q: 'Como ler meu hidrômetro?',
    a: 'Localize o hidrômetro (caixa azul ou cinza na frente do imóvel). Anote os 5 primeiros dígitos do visor da esquerda para a direita — esse é o consumo em m³. A leitura é feita todo dia 08.',
  },
  {
    q: 'Meus pontos expiram?',
    a: 'Não. Os pontos acumulados no AquaSmart RP não expiram. Você pode acumulá-los ao longo do ano e convertê-los em desconto no IPTU do ano seguinte.',
  },
  {
    q: 'Como funciona a fatura digital?',
    a: 'A fatura digital é enviada por e-mail no dia 08 de cada mês, com vencimento no dia 20. Você pode pagar via Pix, boleto ou débito automático cadastrado no portal SAERP.',
  },
]

export default function ContactModal() {
  const [open, setOpen] = useState(false)
  const [faqAberta, setFaqAberta] = useState(null)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 lg:bottom-6 right-4 z-40 w-12 h-12 bg-[#0066CC] rounded-full shadow-lg flex items-center justify-center text-white"
        aria-label="Contato SAERP"
      >
        <Headphones size={22} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="relative bg-white rounded-t-3xl lg:rounded-3xl w-full max-w-lg max-h-[85vh] overflow-y-auto pb-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white px-5 pt-4 pb-3 flex items-center justify-between border-b border-gray-100">
              <div>
                <h2 className="font-bold text-gray-900 text-lg">Fale com o SAERP</h2>
                <p className="text-xs text-gray-500">Atendimento e suporte</p>
              </div>
              <button onClick={() => setOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="px-5 pt-4 space-y-3">
              <a href="tel:1639114000" className="flex items-center gap-3 p-3 rounded-2xl bg-[#F0F9FF] border border-[#E0F2FE]">
                <div className="w-9 h-9 bg-[#0066CC] rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Telefone SAERP</p>
                  <p className="font-semibold text-gray-800">(16) 3911-4000</p>
                </div>
              </a>

              <a href="https://wa.me/5516992001234" className="flex items-center gap-3 p-3 rounded-2xl bg-green-50 border border-green-100">
                <div className="w-9 h-9 bg-[#16A34A] rounded-full flex items-center justify-center">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
                  <p className="font-semibold text-gray-800">(16) 99200-1234</p>
                </div>
              </a>

              <a href="mailto:atendimento@saerp.com.br" className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">E-mail</p>
                  <p className="font-semibold text-gray-800">atendimento@saerp.com.br</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-red-50 border border-red-100">
                <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center">
                  <AlertCircle size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-red-600 font-medium">Emergência 24h</p>
                  <p className="font-bold text-red-700 text-lg">0800 722 0195</p>
                </div>
              </div>
            </div>

            <div className="px-5 pt-5">
              <h3 className="font-bold text-gray-800 mb-3">Perguntas Frequentes</h3>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800"
                      onClick={() => setFaqAberta(faqAberta === i ? null : i)}
                    >
                      <span>{faq.q}</span>
                      {faqAberta === i ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
                    </button>
                    {faqAberta === i && (
                      <div className="px-4 pb-3 text-sm text-gray-600 bg-gray-50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
