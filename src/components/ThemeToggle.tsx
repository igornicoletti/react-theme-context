import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from '../hooks'
import { switchVariants } from '../styles'

const { container, thumb, icon, iconInactive, iconActive, label } = switchVariants()

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const enabled = theme === 'dark'

  return (
    <Switch checked={enabled} onChange={toggleTheme} className={container()}>
      <span className={label()}>Theme mode</span>
      <span className={thumb()}>
        <span aria-hidden="true" className={iconInactive()}>
          <SunIcon className={icon()} />
        </span>
        <span aria-hidden="true" className={iconActive()}>
          <MoonIcon className={icon()} />
        </span>
      </span>
    </Switch>
  )
}
