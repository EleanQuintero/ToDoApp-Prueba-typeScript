import { createContext, useState } from 'react'
import { mockTodos } from '../Mocks/mockTodos'
import { FilterValue, Todo, TodoContextType } from '../types'
import { TODO_FILTERS } from '../const'

interface Props {
  children: React.ReactNode
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
  filterSelected: TODO_FILTERS.ALL,
  setFilterSelected: () => {}
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      filterSelected,
      setFilterSelected
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
