module.exports = {
  // fs1 => fs7
  typeScale: [3, 2, 1.5, 1.25, 1, 0.875, 0.75],
  spacing: [0.25, 0.5, 1, 1.75, 2.5, 8, 16],
  // Alternatively: 45 & 60 (?)
  customMedia: [{ ns: { value: 45, minWidth: true } }],
  colors: {
    //================
    // Shades of gray.
    //================
    black: '#000',
    'near-black': '#111',
    'dark-gray': '#333',
    'mid-gray': '#555',
    gray: '#777',
    silver: '#999',
    'light-silver': '#aaa',
    'moon-gray': 'rgba(220, 220, 220, 0.9)',
    'light-gray': '#eee',
    'near-white': '#f4f4f4',
    white: '#fff',
    transparent: 'transparent',
    //==============================================
    // Solid black / white with varying translusency
    //==============================================
    'black-90': 'rgba(0, 0, 0, 0.9)',
    'black-80': 'rgba(0, 0, 0, 0.8)',
    'black-70': 'rgba(0, 0, 0, 0.7)',
    'black-60': 'rgba(0, 0, 0, 0.6)',
    'black-50': 'rgba(0, 0, 0, 0.5)',
    'black-40': 'rgba(0, 0, 0, 0.4)',
    'black-30': 'rgba(0, 0, 0, 0.3)',
    'black-20': 'rgba(0, 0, 0, 0.2)',
    'black-10': 'rgba(0, 0, 0, 0.1)',
    'black-05': 'rgba(0, 0, 0, 0.05)',
    'black-025': 'rgba(0, 0, 0, 0.025)',
    'black-0125': 'rgba(0, 0, 0, 0.0125)',
    'white-90': 'rgba(255, 255, 255, 0.9)',
    'white-80': 'rgba(255, 255, 255, 0.8)',
    'white-70': 'rgba(255, 255, 255, 0.7)',
    'white-60': 'rgba(255, 255, 255, 0.6)',
    'white-50': 'rgba(255, 255, 255, 0.5)',
    'white-40': 'rgba(255, 255, 255, 0.4)',
    'white-30': 'rgba(255, 255, 255, 0.3)',
    'white-20': 'rgba(255, 255, 255, 0.2)',
    'white-10': 'rgba(255, 255, 255, 0.1)',
    'white-05': 'rgba(255, 255, 255, 0.05)',
    'white-025': 'rgba(255, 255, 255, 0.025)',
    'white-0125': 'rgba(255, 255, 255, 0.0125)',
    //====================
    // Primary-ish colors.
    //====================
    'hot-pink': '#ff3a5c',
    purple: '#673ab7',
    'light-purple': 'rgb(199, 153, 255)',
    blue: '#56e2ff',
    green: '#41D69F',

    //=================
    // These need work.
    //=================
    'dark-red': '#e7040f',
    red: '#ff4136',
    'light-red': '#ff725c',
    orange: '#ff6300',
    gold: '#ffb700',
    yellow: '#ffde37',
    'light-yellow': '#fbeba9',
    'dark-pink': '#d5008f',
    pink: '#f49cc8',
    'dark-green': '#006C71',
    navy: '#001b44',
    'dark-blue': '#00449e',
    'light-blue': '#96ccff',
    'lightest-blue': '#cdecff',
    'light-pink': '#efa4b8',
    'light-yellow': '#f3dd70',
    'light-red': '#ffd3c0',
    'washed-blue': '#f6fffe',
    'washed-green': '#e8fdf5',
    'washed-yellow': '#fffceb',
    'washed-red': '#ffdfdf',
  },
  borderWidths: [0, 0.125, 0.25, 0.5, 1, 2],
  borderRadius: [0, 0.125, 0.25, 0.5, 1],
  widths: [1, 2, 4, 8, 16],
  maxWidths: [1, 2, 4, 8, 16, 32, 48, 64, 96],
  heights: [1, 2, 4, 8, 16],
  typography: {
    measure: [30, 34, 20],
  },
  opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05, 0.025, 0],
  lhSolid: 1.25,
  lhTitle: 1.5,
  lhCopy: 1.7,
  lineHeights: [1.7, 1.5, 1.25],
}
