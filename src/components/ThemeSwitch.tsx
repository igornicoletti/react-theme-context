import { Switch } from '@headlessui/react'
import { MoonStars, Sun } from '@phosphor-icons/react'
import { switchVariants } from '../styles'
import { useTheme } from '../hooks'

/**
 * A toggle switch component for switching between light and dark themes.
 * - Utilizes the `useTheme` hook to access the current theme and toggle function.
 * - Uses Tailwind Variants for consistent styling and theming.
 * @returns A styled switch component that toggles the theme when interacted with.
 * @component
 */
export const ThemeSwitch = () => {
  const switchStyles = switchVariants()
  const { theme, toggleTheme } = useTheme()

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme === 'dark'}
      className={switchStyles.switch()}
      aria-label="Toggle theme between light and dark mode">
      <span className={switchStyles.label()}>Theme mode</span>
      <span className={switchStyles.thumb()}>
        <span className={switchStyles.iconSun()} aria-hidden={true}>
          <Sun className={switchStyles.icon()} aria-hidden={true} weight='duotone' />
        </span>
        <span className={switchStyles.iconMoon()} aria-hidden={true}>
          <MoonStars className={switchStyles.icon()} aria-hidden={true} weight='duotone' />
        </span>
      </span>
    </Switch>
  )
}
