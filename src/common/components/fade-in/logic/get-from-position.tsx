import { From } from '../styles/fade-div'

export function getFromPosition(from: From) {
  switch (from) {
    case 'bottom':
      return 'top'
    case 'top':
      return 'bottom'
    case 'left':
      return 'right'
    case 'right':
      return 'left'
  }
}
