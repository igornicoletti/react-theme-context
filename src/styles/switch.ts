import { tv } from 'tailwind-variants'

const transitionBase = 'transition duration-200 ease-in-out'
const sizeFull = 'absolute inset-0 flex size-full items-center justify-center'

export const switchVariants = tv({
  slots: {
    container: `group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-lavender-purple ${transitionBase}`,
    label: 'sr-only',
    thumb: `pointer-events-none relative inline-block size-5 rounded-full bg-light-gray shadow ring-0 transform ${transitionBase} group-data-[checked]:translate-x-5`,
    iconInactive: `${sizeFull} opacity-100 group-data-[checked]:opacity-0 ${transitionBase} group-data-[checked]:duration-100 group-data-[checked]:ease-out`,
    iconActive: `${sizeFull} opacity-0 group-data-[checked]:opacity-100 ${transitionBase} group-data-[checked]:duration-200 group-data-[checked]:ease-in`,
    icon: 'size-4 text-lavender-purple',
  },
})
