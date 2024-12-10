import { tv } from 'tailwind-variants'

export const switchVariants = tv({
  slots: {
    switchlayout: 'group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-lavender-purple transition-colors duration-200 ease-in-out',
    switchtitle: 'sr-only',
    switchtgroup: 'pointer-events-none relative inline-block size-5 transform rounded-full bg-light-gray shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5',
    switchtin: 'absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out',
    switchtout: 'absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in',
    switchticon: 'size-4 text-lavender-purple',
  }
})
