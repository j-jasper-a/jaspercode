import { CopyCodeButton } from "@/components/features/blog/copy-code-button";
import rehypeShiki from "@shikijs/rehype";
import {
  MDXComponents,
  MDXRemote,
  MDXRemoteOptions,
} from "next-mdx-remote-client/rsc";
import Link from "next/link";
import convertToText from "react-to-text";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { BundledTheme } from "shiki";

const options: MDXRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeShiki, { theme: "rose-pine-moon" as BundledTheme }],
      rehypeSlug,
    ],
  },
};

type MDXRemoteDisplayProps = {
  content: string;
};

export function MDXRemoteDisplay({ content }: MDXRemoteDisplayProps) {
  return (
    <MDXRemote components={mdxComponents} options={options} source={content} />
  );
}

export const mdxComponents: MDXComponents = {
  wrapper: ({ children }) => (
    <div className="prose dark:prose-invert prose-neutral max-w-full *:scroll-mt-24">
      {children}
    </div>
  ),
  code: ({ children }) => (
    <code className="bg-foreground/5 rounded-md px-2 py-1 font-mono font-normal before:content-[''] after:content-['']">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-foreground/5 prose-code:bg-transparent prose-code:p-0 relative whitespace-pre-wrap rounded-2xl p-4 font-mono lg:p-8">
      {children}
      <CopyCodeButton text={convertToText(children)} />
    </pre>
  ),
  a: ({ children, href }) => (
    <Link
      href={href}
      className="text-primary hover:text-accent-foreground underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  ),
  hr: () => (
    <hr className="border-foreground/10 dark:border-foreground/20 my-8" />
  ),
};
