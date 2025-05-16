import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getMDXComponents } from './src/components/mdx-provider'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getMDXComponents(components)
}