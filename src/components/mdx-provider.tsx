import type { MDXComponents } from 'mdx/types'
import { cn } from '@/lib/utils'

// Define custom components for MDX
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom heading components with anchor links
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight text-dark mt-8 mb-4 first:mt-0",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "text-2xl md:text-3xl font-semibold tracking-tight text-dark mt-8 mb-4",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "text-xl md:text-2xl font-semibold tracking-tight text-dark mt-6 mb-3",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          "text-lg md:text-xl font-semibold tracking-tight text-dark mt-6 mb-3",
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }) => (
      <h5
        className={cn(
          "text-base md:text-lg font-semibold tracking-tight text-dark mt-4 mb-2",
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }) => (
      <h6
        className={cn(
          "text-sm md:text-base font-semibold tracking-tight text-dark mt-4 mb-2",
          className
        )}
        {...props}
      />
    ),

    // Paragraph styling
    p: ({ className, ...props }) => (
      <p
        className={cn("leading-7 text-dark mb-4", className)}
        {...props}
      />
    ),

    // List styling
    ul: ({ className, ...props }) => (
      <ul className={cn("my-4 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("my-4 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("leading-7 mb-2", className)} {...props} />
    ),

    // Blockquote styling
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "mt-6 border-l-4 border-primary pl-6 italic text-dark/80",
          className
        )}
        {...props}
      />
    ),

    // Code styling

    code: ({ className, ...props }) => (
      <code
        className={cn(
          "relative rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 font-mono text-sm text-gray-800 dark:text-gray-100",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg bg-gray-100 dark:bg-gray-950 p-4 text-gray-800 dark:text-gray-100",
          className
        )}
        {...props}
      />
    ),

    // Table styling
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full border-collapse", className)} {...props} />
      </div>
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border border-gray-200 px-4 py-2 text-left font-semibold bg-gray-50",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn("border border-gray-200 px-4 py-2", className)}
        {...props}
      />
    ),

    // Custom image component using standard img tag for MDX
    img: ({ src, alt, className, ...props }) => (
      <div className="my-6 overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src as string || ''}
          alt={alt as string || ''}
          className={cn("w-full h-auto rounded-lg", className)}
          {...props}
        />
      </div>
    ),

    // Horizontal rule
    hr: ({ ...props }) => (
      <hr className="my-8 border-0 border-t border-gray-200" {...props} />
    ),

    // Link styling
    a: ({ className, ...props }) => (
      <a
        className={cn(
          "text-primary hover:text-primary/80 underline underline-offset-4",
          className
        )}
        {...props}
      />
    ),

    // Strong and emphasis
    strong: ({ className, ...props }) => (
      <strong className={cn("font-semibold", className)} {...props} />
    ),
    em: ({ className, ...props }) => (
      <em className={cn("italic", className)} {...props} />
    ),

    // Override any default components with custom ones
    ...components,
  }
}