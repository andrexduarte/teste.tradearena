export const CARD_DATA = [
  {
    title: 'Depositar',
    note: 'Este QR code expira em 30 minutos. Ao realizar o pagamento, você será informado por e-mail.',
    formFields: [
      { id: 'valorDeposito', label: 'Valor que deseja depositar', type: 'text', name: 'valorDeposito' }
    ],
    buttons: [
      { type: 'submit', label: 'Gerar pix' }
    ],
    imagePath: 'assets/images/QRCode.png'
  },
  {
    title: 'Resgatar',
    note: 'As transferências são aprovadas e realizadas em até 48h úteis. A conta destino que receberá o resgate deve ser vinculada ao mesmo CPF/CNPJ do seu cadastro.',
    formFields: [
      { id: 'valorResgate', label: 'Valor que deseja resgatar via PIX', type: 'text', name: 'valorResgate' },
      {
        id: 'chavePix',
        type: 'select',
        name: 'chavePix',
        options: [
          { label: 'Selecione sua chave PIX' },
          { value: 'chave1', label: 'Chave 1' },
          { value: 'chave2', label: 'Chave 2' },
          { value: 'chave3', label: 'Chave 3' }
        ]
      }
    ],
    buttons: [
      { type: 'submit', label: 'Solicitar resgate' }
    ]
  },
  {
    title: 'Cupom',
    note: 'O valor creditado será descontado no seu próximo lucro.',
    formFields: [
      { id: 'codigoCupom', label: 'Insira o código para resgatar seu benefício', type: 'text', name: 'codigoCupom' }
    ],
    buttons: [
      { type: 'submit', label: 'Validar' }
    ]
  }
];