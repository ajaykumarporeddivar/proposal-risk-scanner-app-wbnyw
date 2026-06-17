import { clsx } from 'clsx';
import { TailwindConfig } from 'tailwindcss/tailwind-config';

const cn = (...classes: string[]) => clsx(classes);

export { cn };