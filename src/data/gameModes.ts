interface GameModeType {
    [key: number]: {
        type: string,
        name: string
    }
}

export const gameModes: GameModeType = {
  0: {
    type: 'Custom',
    name: 'Custom Game'
  },
  900: {
    type: 'Normal',
    name: 'ARURF',
  },
  450: {
    type: 'Normal',
    name: 'ARAM',
  },
  400: {
    type: 'Normal',
    name: 'Draft',
  },
  420: {
    type: 'Ranked',
    name: 'Solo',
  },
  430: {
    type: 'Normal',
    name: 'Blind',
  },
  440: {
    type: 'Ranked',
    name: 'Flex',
  },
  460: {
    type: 'Normal',
    name: 'Blind',
  },
  470: {
    type: 'Ranked',
    name: 'Flex',
  },
  700: {
    type: 'Ranked',
    name: 'Clash',
  },
  800: {
    type: 'Bot',
    name: '3v3 Co-op vs. AI (Intermediate)',
  },
  810: {
    type: 'Bot',
    name: '3v3 Co-op vs. AI (Intro)',
  },
  820: {
    type: 'Bot',
    name: '3v3 Co-op vs. AI (Beginner)',
  },
  830: {
    type: 'Bot',
    name: 'Co-op vs. AI (Intro)',
  },
  840: {
    type: 'Bot',
    name: 'Co-op vs. AI (Beginner)',
  },
  850: {
    type: 'Bot',
    name: 'Co-op vs. AI (Intermediate)',
  },
  920: {
    type: 'Normal',
    name: 'Poro King',
  },
  1020: {
    type: 'Normal',
    name: 'One for All'
  },
  1300: {
    type: 'Normal',
    name: 'Nexus Blitz'
  },
  1400: {
    type: 'Normal',
    name: 'Ultimate Spellbook'
  },
  1900: {
    type: 'Normal',
    name: 'URF',
  }
}
