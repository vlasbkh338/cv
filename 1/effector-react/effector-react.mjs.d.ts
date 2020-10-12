import * as React from 'react'
import {Store, Event, Effect, Domain} from 'effector'

export type StoreConsumer<State> = React.ComponentType<{
  children: (state: State) => React.ReactNode
}>

export type Gate<Props = {}> = React.ComponentType<Props> & {
  open: Event<Props>
  close: Event<Props>
  status: Store<boolean>
  state: Store<Props>
}
export type StoreView<State, Props = {}> = React.ComponentType<Props> & {
  mounted: Event<{props: Props; state: State}>
  unmounted: Event<{props: Props; state: State}>
}

export function useStore<State>(store: Store<State>): State
export function useStoreMap<
  State,
  Result,
  Keys extends [any] | ReadonlyArray<any> | any[]
>(opts: {
  readonly store: Store<State>
  readonly keys: Keys
  readonly fn: (state: State, keys: Keys) => Result
}): Result
export function useList<T>(
  list: Store<T[]> | Store<ReadonlyArray<T>>,
  renderItem:
    | {
        readonly keys?: any[]
        readonly fn: (item: T, index: number) => React.ReactNode
      }
    | ((item: T, index: number) => React.ReactNode),
): JSX.Element

export function useGate<Props>(Gate: Gate<Props>, props?: Props): void

export function createGate<Props>(name?: string): Gate<Props>
export function createGate<Props>(config: {
  defaultState?: Props
  name?: string
  domain?: Domain
}): Gate<Props>
export function createGate<Props>(
  name: string,
  defaultState: Props,
): Gate<Props>

export function createComponent<Props, State>(
  store: Store<State>,
  view: (props: Props, state: State) => React.ReactNode,
): StoreView<State, Props>
export function createComponent<Props, Shape extends object>(
  store: Shape,
  view: (
    props: Props,
    state: {[K in keyof Shape]: Shape[K] extends Store<infer U> ? U : Shape[K]},
  ) => React.ReactNode,
): StoreView<
  {[K in keyof Shape]: Shape[K] extends Store<infer U> ? U : Shape[K]},
  Props
>

export function createContextComponent<Props, State, Context>(
  store: Store<State>,
  context: React.Context<Context>,
  view: (props: Props, state: State, context: Context) => React.ReactNode,
): React.ComponentType<Props>

export function connect<
  State extends object,
  Com extends React.ComponentType<any>
>(store: Store<State>): (Component: Com) => React.ComponentType<State>
export function connect<
  State extends object,
  Com extends React.ComponentType<any>
>(Component: Com): (store: Store<State>) => React.ComponentType<State>

export function createStoreConsumer<State>(
  store: Store<State>,
): StoreConsumer<State>

export function createReactState<
  State extends object,
  Com extends React.ComponentType<any>
>(store: Store<State>, Component: Com): React.ComponentType<State>

export function useEvent<T>(event: Event<T>): (payload: T) => T
export function useEvent<T, R>(
  fx: Effect<T, R, any>,
): (payload: T) => Promise<R>
