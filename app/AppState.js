import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  Players = [
    {
      name: "John",
      score: 0
    },
    {
      name: "Jacob",
      score: 0
    },
    {
      name: "HammerSmit",
      score: 0
    }
  ]

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())