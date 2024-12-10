import { ThemeToggle } from './components'
import { appVariants } from './styles'

const { container } = appVariants()

export const App = () => {
  return (
    <div className={container()}>
      <ThemeToggle />
    </div>
  )
}
