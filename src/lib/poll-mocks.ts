import type { Poll, PollScope } from '../types/poll';

function makeMock(
  id: string,
  scope: PollScope,
  question: string,
  options: { content: string; votesCount: number }[],
  commentsCount: number,
): Poll {
  return {
    id: `mock-${id}`,
    question,
    options: options.map((opt, idx) => ({
      id: `mock-${id}-opt-${idx}`,
      pollId: `mock-${id}`,
      content: opt.content,
      votesCount: opt.votesCount,
    })),
    post: {
      id: `mock-${id}-post`,
      title: question,
      scope,
      commentsCount,
      likesCount: 0,
      sharesCount: 0,
    },
  };
}

export const POLL_MOCKS: Record<PollScope, Poll[]> = {
  internacional: [
    makeMock(
      'intl-1',
      'internacional',
      'COP30 em Belém deve resultar em metas climáticas vinculantes?',
      [
        { content: 'Sim, com prazos rígidos', votesCount: 18420 },
        { content: 'Não, basta acordo voluntário', votesCount: 6230 },
      ],
      842,
    ),
    makeMock(
      'intl-2',
      'internacional',
      'Como regulamentar a IA generativa em nível global?',
      [
        { content: 'Tratado internacional unificado', votesCount: 12150 },
        { content: 'Cada país define sua regra', votesCount: 9870 },
      ],
      1124,
    ),
    makeMock(
      'intl-3',
      'internacional',
      'Cessar-fogo no Oriente Médio: você apoia o novo acordo?',
      [
        { content: 'Apoio integralmente', votesCount: 21340 },
        { content: 'Apoio com ressalvas', votesCount: 14780 },
      ],
      2056,
    ),
  ],
  nacional: [
    makeMock(
      'nat-1',
      'nacional',
      'Reforma tributária: o consumidor sairá ganhando?',
      [
        { content: 'Sim, simplifica e barateia', votesCount: 9840 },
        { content: 'Não, deve aumentar preços', votesCount: 11520 },
      ],
      678,
    ),
    makeMock(
      'nat-2',
      'nacional',
      'Educação integral em tempo integral: deve ser obrigatória?',
      [
        { content: 'Sim, em toda rede pública', votesCount: 15630 },
        { content: 'Apenas onde houver estrutura', votesCount: 8240 },
      ],
      512,
    ),
    makeMock(
      'nat-3',
      'nacional',
      'Privatização de estatais ainda faz sentido em 2026?',
      [
        { content: 'Sim, melhora gestão', votesCount: 7320 },
        { content: 'Não, perde controle estratégico', votesCount: 13980 },
      ],
      934,
    ),
  ],
  regional: [
    makeMock(
      'reg-1',
      'regional',
      'Tarifa Zero em SP: a cidade está pronta?',
      [
        { content: 'Sim, deve ser implantada já', votesCount: 11240 },
        { content: 'Não, falta planejamento', votesCount: 8760 },
      ],
      642,
    ),
    makeMock(
      'reg-2',
      'regional',
      'Novas ciclovias na Marginal Pinheiros: você aprova?',
      [
        { content: 'Aprovo, mais mobilidade', votesCount: 6890 },
        { content: 'Reprovo, piora trânsito', votesCount: 4320 },
      ],
      318,
    ),
    makeMock(
      'reg-3',
      'regional',
      'Centro de SP: revitalização ou gentrificação?',
      [
        { content: 'Revitalização necessária', votesCount: 5430 },
        { content: 'Risco de expulsar moradores', votesCount: 4980 },
      ],
      476,
    ),
  ],
};
