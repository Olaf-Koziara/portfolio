"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface CodeBlockProps {
  title: string;
  code: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export function CodeBlock({
  title,
  code,
  isExpanded,
  onToggle,
}: CodeBlockProps) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 bg-card-bg hover:bg-card-hover flex items-center justify-between transition-colors"
      >
        <span className="font-mono text-sm text-accent capitalize">
          {title.replace(/([A-Z])/g, " $1").trim()}
        </span>
        {isExpanded ? (
          <FiChevronUp className="text-muted" />
        ) : (
          <FiChevronDown className="text-muted" />
        )}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "1.5rem",
                fontSize: "0.875rem",
                background: "#1e1e1e",
              }}
              showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
