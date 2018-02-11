const colors = require('./module-colors')

module.exports = {
  colors,
  typeScale: [3, 2.25, 1.75, 1.15, 1, 0.875, 0.75],
  spacing: [0.25, 0.5, 1, 1.75, 2.5, 8, 16],
  customMedia: [{ ns: { value: 45, minWidth: true } }],
  borderWidths: [0, 0.125, 0.25, 0.5, 1, 2],
  borderRadius: [0, 0.125, 0.25, 0.5, 1],
  widths: [1, 2, 4, 8, 16],
  maxWidths: [1, 2, 4, 8, 16, 32, 48, 64, 96],
  heights: [1, 2, 4, 8, 16],
  typography: {
    measure: [30, 34, 20],
  },
  opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05, 0.025, 0],
  lineHeights: [1.7, 1.5, 1.25],
}
