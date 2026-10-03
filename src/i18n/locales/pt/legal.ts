import type { LegalResources } from '@/types'

export const legal: LegalResources = {
  terms: {
    title: 'Termos de Uso',
    lastUpdated: 'Última atualização: 28 de setembro de 2026',
    sections: [
      {
        heading: '1. Sobre este projeto',
        paragraphs: [
          'MPU5 LoRa Mod é um projeto open-source, mantido de forma independente, que documenta uma modificação física para integrar uma placa LoRa com firmware Meshtastic dentro de uma réplica MPU5 utilizada em airsoft. Ao acessar este site ou seguir o guia de montagem, você concorda com estes Termos de Uso.',
        ],
      },
      {
        heading: '2. Natureza independente do projeto',
        paragraphs: [
          '"MPU5" é uma marca e produto de terceiros. Este projeto não é afiliado, patrocinado, endossado ou de qualquer forma associado ao fabricante ou distribuidor da réplica MPU5. Referências ao nome "MPU5" servem exclusivamente para identificar o produto ao qual a modificação se aplica.',
        ],
      },
      {
        heading: '3. Uso por sua conta e risco',
        paragraphs: [
          'A modificação descrita neste site envolve a abertura, corte, perfuração ou alteração física e irreversível de um produto de terceiros, além da instalação de componentes eletrônicos não originais. Ao seguir este guia, você reconhece e aceita que:',
          '• A modificação pode danificar permanentemente o equipamento, torná-lo inutilizável ou anular qualquer garantia do fabricante original;',
          '• Você é o único responsável por avaliar sua própria capacidade técnica antes de realizar a modificação;',
          '• O projeto, seu mantenedor e colaboradores não se responsabilizam por danos ao equipamento, perdas financeiras, lesões pessoais ou qualquer outro prejuízo decorrente do uso deste guia.',
        ],
      },
      {
        heading: '4. Ausência de garantia',
        paragraphs: [
          'Todo o conteúdo (guia, arquivos STL, documentação) é fornecido "no estado em que se encontra" ("as is"), sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não se limitando a garantias de adequação a um propósito específico, funcionamento livre de erros ou compatibilidade com qualquer hardware específico.',
        ],
      },
      {
        heading: '5. Responsabilidade regulatória do usuário',
        paragraphs: [
          'A modificação utiliza módulos de rádio operando na faixa de frequência de 902–928 MHz (LoRa), classificados pela ANATEL como equipamentos de radiação restrita (Resolução nº 680/2017). A homologação desses dispositivos junto à ANATEL é, formalmente, de responsabilidade de quem os fabrica, importa ou comercializa. Este projeto não vende, fabrica, importa ou homologa qualquer hardware — ele apenas documenta como integrar placas de terceiros já existentes no mercado. É responsabilidade exclusiva do usuário verificar se o hardware que pretende utilizar está em conformidade com a legislação de telecomunicações aplicável em sua jurisdição antes de operá-lo.',
        ],
      },
      {
        heading: '6. Propriedade intelectual e licenciamento',
        paragraphs: [
          'Todo o conteúdo original deste projeto (textos, guia de montagem, arquivos STL e demais materiais de documentação) é licenciado sob Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0). Uso pessoal e não comercial é livre, desde que respeitados os termos da licença (atribuição e compartilhamento sob a mesma licença). Para uso comercial, é necessário contato prévio e autorização do detentor da licença — veja o link "Licença" no rodapé do site.',
          'O firmware Meshtastic e demais softwares de terceiros mencionados neste site possuem suas próprias licenças, definidas por seus respectivos mantenedores.',
        ],
      },
      {
        heading: '7. Links e conteúdo de terceiros',
        paragraphs: [
          'Este site pode conter links para sites, aplicativos ou serviços de terceiros (como Meshtastic, ATAK, iTAK, GitHub). Não temos controle sobre o conteúdo desses serviços e não nos responsabilizamos por eles.',
        ],
      },
      {
        heading: '8. Limitação de responsabilidade',
        paragraphs: [
          'Na máxima extensão permitida pela legislação aplicável, o mantenedor deste projeto não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da incapacidade de uso deste site ou do guia de modificação.',
        ],
      },
      {
        heading: '9. Alterações a estes termos',
        paragraphs: [
          'Estes Termos de Uso podem ser atualizados periodicamente. A data da última atualização é sempre indicada no topo desta página. O uso continuado do site após alterações implica aceitação dos novos termos.',
        ],
      },
      {
        heading: '10. Lei aplicável e foro',
        paragraphs: [
          'Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro do domicílio do mantenedor do projeto para dirimir eventuais controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.',
        ],
      },
      {
        heading: '11. Disposições gerais',
        paragraphs: [
          'Estes Termos de Uso constituem o acordo integral entre você e o mantenedor do projeto em relação ao uso deste site e do guia de modificação, substituindo quaisquer entendimentos anteriores sobre o mesmo objeto. Caso alguma cláusula destes termos seja considerada inválida ou inexequível, as demais cláusulas permanecem em pleno vigor e efeito.',
        ],
      },
      {
        heading: '12. Contato',
        paragraphs: [
          'Dúvidas sobre estes Termos de Uso podem ser enviadas através das Issues do repositório no GitHub: https://github.com/FernandoFranco/mpu5-lora-mod/issues',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de Privacidade',
    lastUpdated: 'Última atualização: 28 de setembro de 2026',
    sections: [
      {
        heading: '1. Controlador',
        paragraphs: [
          'Este site é mantido de forma independente por Fernando Henrique Alves Franco ("controlador", "nós"). Para exercer os direitos descritos nesta política ou tirar dúvidas, utilize o canal de contato indicado na seção 11.',
        ],
      },
      {
        heading: '2. Quais dados coletamos',
        paragraphs: [
          'Este site não possui formulários, cadastro de usuários, sistema de login ou qualquer funcionalidade que colete dados de identificação pessoal diretamente.',
          'Coletamos apenas dados de navegação por meio do Google Analytics, e somente após seu consentimento explícito no banner de cookies exibido na primeira visita. Esses dados incluem, de forma agregada e anonimizada sempre que possível: origem do tráfego, páginas visitadas, tempo de permanência e tipo de dispositivo/navegador utilizado.',
          'Também usamos o localStorage do seu navegador (não é um cookie, e não é enviado a nenhum servidor) para lembrar sua preferência de tema (claro/escuro), idioma e sua escolha de consentimento de cookies. Esses dados ficam apenas no seu próprio dispositivo.',
        ],
      },
      {
        heading: '3. Base legal',
        paragraphs: [
          'O tratamento de dados de navegação via Google Analytics tem como base legal o seu consentimento (art. 7º, I, da LGPD), obtido de forma livre, informada e inequívoca através do banner de cookies. Você pode revogar esse consentimento a qualquer momento (veja seção 6).',
        ],
      },
      {
        heading: '4. Compartilhamento de dados',
        paragraphs: [
          'Os dados coletados pelo Google Analytics são processados pelo Google LLC, que pode transferi-los para servidores localizados fora do Brasil, inclusive nos Estados Unidos. O Google atua como operador desses dados, sujeito à sua própria política de privacidade, disponível em: https://policies.google.com/privacy',
          'Não compartilhamos, vendemos ou cedemos dados a nenhum outro terceiro.',
        ],
      },
      {
        heading: '5. Cookies',
        paragraphs: [
          'Utilizamos apenas cookies do Google Analytics, e somente depois que você aceita o banner de consentimento exibido na primeira visita ao site. Se você recusar ou fechar o banner sem aceitar, nenhum cookie de rastreamento é definido e o Google Analytics não carrega.',
        ],
      },
      {
        heading: '6. Como revogar seu consentimento',
        paragraphs: [
          'Você pode alterar sua escolha a qualquer momento clicando em "Preferências de cookies", disponível no rodapé do site. Isso reabre o banner de consentimento e permite aceitar ou recusar novamente.',
        ],
      },
      {
        heading: '7. Seus direitos como titular de dados (LGPD)',
        paragraphs: [
          'Nos termos do art. 18 da LGPD, você tem direito a:',
          '• Confirmação da existência de tratamento de dados;',
          '• Acesso aos dados tratados;',
          '• Correção de dados incompletos, inexatos ou desatualizados;',
          '• Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;',
          '• Portabilidade dos dados;',
          '• Eliminação dos dados tratados com base no seu consentimento;',
          '• Informação sobre entidades com as quais o controlador compartilhou dados;',
          '• Informação sobre a possibilidade de não fornecer consentimento e suas consequências;',
          '• Revogação do consentimento a qualquer momento.',
          'Como este site não coleta dados de identificação pessoal direta (apenas dados analíticos agregados via cookies, mediante consentimento), o exercício de alguns desses direitos na prática se resume a revogar o consentimento de cookies (seção 6).',
        ],
      },
      {
        heading: '8. Dados de crianças e adolescentes',
        paragraphs: [
          'Este site não é direcionado a menores de 18 anos e não coleta intencionalmente dados de crianças ou adolescentes.',
        ],
      },
      {
        heading: '9. Retenção de dados',
        paragraphs: [
          'Os dados de navegação coletados pelo Google Analytics são retidos conforme a política de retenção padrão do próprio Google Analytics. Não mantemos cópias adicionais desses dados em nossa própria infraestrutura, pois não possuímos backend ou banco de dados.',
        ],
      },
      {
        heading: '10. Alterações a esta política',
        paragraphs: [
          'Esta Política de Privacidade pode ser atualizada periodicamente. A data no topo da página sempre reflete a versão mais recente.',
        ],
      },
      {
        heading: '11. Contato',
        paragraphs: [
          'Para exercer seus direitos ou tirar dúvidas sobre esta política, utilize as Issues do repositório no GitHub: https://github.com/FernandoFranco/mpu5-lora-mod/issues',
        ],
      },
    ],
  },
}
