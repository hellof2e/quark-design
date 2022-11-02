type Merge<F, S> = Omit<F, keyof S> & S extends infer R
  ? {[K in keyof R]: R[K]}
  : never

export type ReactifyProps<T extends Record<string, any>> = Merge<
    componentBaseInterface,
    {
        [K in keyof T as (
            T[K] extends Function 
            ? (K extends string ? `on${Capitalize<K>}`: K)
            : K
            )]: T[K]
    }>

export interface componentBaseInterface extends 
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>, 
        HTMLElement
        >
     {
    name?: string
}