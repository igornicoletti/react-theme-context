import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from '../hooks'
import { switchVariants } from '../styles'

const { switchlayout, switchtgroup, switchticon, switchtin, switchtitle, switchtout } = switchVariants()

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const enabled = theme === 'dark'

  return (
    <Switch checked={enabled} onChange={toggleTheme} className={switchlayout()}>
      <span className={switchtitle()}>Theme mode</span>
      <span className={switchtgroup()}>
        <span aria-hidden='true' className={switchtin()}>
          <SunIcon className={switchticon()} />
        </span>
        <span aria-hidden='true' className={switchtout()}>
          <MoonIcon className={switchticon()} />
        </span>
      </span>
    </Switch>
  )
}
