import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from '../hooks'
import { switchVariants } from '../styles'

const { container, thumb, icon, iconInactive, iconActive, label } = switchVariants()

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const enabled = theme === 'dark'

  return (
    <Switch className={container()} checked={enabled} onChange={toggleTheme}>
      <span className={label()}>Theme mode</span>
      <span className={thumb()}>
        <span className={iconInactive()} aria-hidden={true}>
          <SunIcon className={icon()} />
        </span>
        <span className={iconActive()} aria-hidden={true}>
          <MoonIcon className={icon()} />
        </span>
      </span>
    </Switch>
  )
}
