import { ITabSetRecord } from '../tabset/model';

export interface IAppState {
  tabset1: ITabSetRecord,
  tabset2: ITabSetRecord,
  tabset3: ITabSetRecord,
}

export const INITIAL_STATE: IAppState = {
  tabset1: {
    id: 'ts1',
    title: 'Lipsum for European Charsets',
    activeTabId: 't1',
    tabs: {
      t1: {
        id: 't1',
        title: 'Latin',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
 veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
 commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
 esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      t2: {
        id: 't2',
        title: 'Cyrillic',
        text: `Лорем ипсум долор сит амет, ин хас ребум нумяуам адиписци, сит
 ет пхаедрум суавитате. Дуо омнес утрояуе улламцорпер не. Ест сапиентем
 интерессет еи. Вис еи алияуип ехпетенда десеруиссе.`
      },
      t3: {
        id: 't3',
        title: 'Greek',
        text: `Λορεμ ιπσθμ δολορ σιτ αμετ, σολθμ vοcεντ ει cθμ, στετ vερι cθ
 σιτ. Διcατ σολθτα αππετερε σεδ εα, εοσ cετερο δισcερε cονσεqθθντθρ ετ. Θσθ
 νθλλα αππετερε δετερρθισσετ ιν. Ιδ μεα qθοδσι αβηορρεαντ, cθ ταμqθαμ γλοριατθρ
 εαμ, προμπτα δελενιτι εθ εθμ. Εθ qθοδσι πηαεδρθμ vιτθπερατα vελ, ιθστο
 μεδιοcρεμ τε θσθ.`
      }
    },
  },

  tabset2: {
    id: 'ts2',
    title: 'Lipsum for Asian Charsets',
    activeTabId: 't1',
    tabs: {
      t1: {
        id: 't1',
        title: 'Japanese',
        text: `新社ほふ国関リホ位2号ロユ行警チテモム態局ル雲険ょねらや全監表ヨタソク了様ょも
 ぼ校練ナヌチヱ脳史ニ経都ひば供康トルちと歴品のき要堀混ゅむイに。定びゃ無野ノヲレサ被芸スせー
 ふ主2句ラはド知図シム年便ホミ長官ヲリミフ防彦ホモオ況経改権むば副入ルネ全誇誤郡栃えせ。両りと
 く実質イル記数リワミ悲題ヤ貴正兵8変ればッゆ鑑公多イぴぼ人74練く広族被置展ねご。`,
      },
      t2: {
        id: 't2',
        title: 'Chinese',
        text: `真社散閉月精異経都転禁想都作要行方。象歌断時疑富面振重椅議当開道人飲屋限択回。
 乳区受長航新葛聞崎並査九意健山物治写新裏。医鉛要書多約査野母独案党瞳多暫還問平。河発古国権負
 育同伯禁的新批。食最禁紀東会慶要整覧力土役少能通点配。治有和無麻票長備責開容賠迫神戻契査岩。
 外一事計書正済流終情倫説間知現。`,
      },
    },
  },

  tabset3: {
    id: 'ts3',
    title: 'I Heard you Like Tabs...',
    activeTabId: 't2',
    tabs: {
      t1: {
        id: 't1',
        title: 'T3.1',
        text: 'TabSet 3 Tab 1',
        subTabSet: {
          id: 'ts1',
          title: 'So I put Tab in your Tabs.',
          activeTabId: 't1.1',
          tabs: {
            't1.1': {
              id: 't1.1',
              title: 'T3.1.1',
              text: 'Tabset 3.1 Tab 1'
            },
            't1.2': {
              id: 't1.2',
              title: 'T3.1.2', 
              text: 'Tabset 3.1 Tab 2'
            },
          },
        },
      },
      t2: {
        id: 't2',
        title: 'T3.2',
        text: 'TabSet 3 Tab 2',
        subTabSet: {
          id: 'ts1',
          title: 'So You Can Tab While You Tab',
          activeTabId: 't1.1',
          tabs: {
            't1.1': {
              id: 't1.1',
              title: 'T3.2.1',
              text: 'Tabset 3.2 Tab 1'
            },
            't1.2': {
              id: 't1.2',
              title: 'T3.2.2',
              text: 'Tabset 3.2 Tab 2'
            },
          },
        },
      },
    },
  },
}
