import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Tailwind 클래스를 조건부로 병합 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
