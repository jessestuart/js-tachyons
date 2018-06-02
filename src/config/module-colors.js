//===========================================
// Shades of gray. These have no hue or tint.
//===========================================
const neutralShadesOfBlackAndWhite = {
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
}

//==============================================
// Solid black with varying translusency
//==============================================
const translucentBlacks = {
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
}

//==============================================
// Solid white with varying translusency
//==============================================
const translucentWhites = {
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
}

const colors = {
  ...neutralShadesOfBlackAndWhite,
  ...translucentBlacks,
  ...translucentWhites,

  //=========================================================
  // Special "brand" shades of gray -- note that these aren't
  // pure grays.
  //=========================================================
  'gray-primary': 'rgb(55, 59, 70)',
  'gray-primary-darker': 'rgb(41, 44, 52)',

  //====================
  // Primary brand colors.
  //====================
  'hot-pink': '#ff3a5c',
  purple: '#673ab7',
  'light-purple': 'rgb(199, 153, 255)',
  blue: '#56e2ff',
  green: '#b4df75',

  //=================
  // These need work.
  //=================
  navy: '#001b44',
  'dark-blue': '#00449e',
  'dark-green': '#41d69f',
  'light-blue': '#96ccff',
  'lightest-blue': '#cdecff',
  'dark-pink': '#d5008f',
  'dark-red': '#e7040f',
  'washed-green': '#e8fdf5',
  'light-pink': '#efa4b8',
  'light-yellow': '#f3dd70',
  pink: '#f49cc8',
  'washed-purple': '#f4f1f9',
  'washed-blue': '#f6fffe',
  'light-yellow': '#fbeba9',
  red: '#ff4136',
  orange: '#ff6300',
  'light-red': '#ff725c',
  gold: '#ffb700',
  'light-red': '#ffd3c0',
  yellow: '#ffde37',
  'washed-red': '#ffdfdf',
  'washed-yellow': '#fffceb',
  'green-eden': '#78C4A7',

  transparent: 'transparent',
}

module.exports = colors
