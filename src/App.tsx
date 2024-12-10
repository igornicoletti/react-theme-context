import { ThemeToggle } from './components'
import { appVariants } from './styles'

const { applayout } = appVariants()

export const App = () => {
  return (
    <div className={applayout()}>
      <ThemeToggle />
    </div>
  )
}
