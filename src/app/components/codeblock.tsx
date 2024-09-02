'use client'

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { RxCopy, RxCheck } from "react-icons/rx";
import { useState } from "react";

interface CodeBlockProps {
    language: string;
    value: string;
}

export const CodeBlock = ({ language, value }: CodeBlockProps) => {

    const [isCopied, setIsCopied] = useState<boolean>(false);

    const copyCode = () => {
        navigator.clipboard.writeText(value);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    return (
        <div className="relative">
            {!isCopied ? (
                <button onClick={() => {
                    copyCode();
                    setIsCopied(true);
                }}
                className="absolute -top-4 -right-1 text-lg opacity-50 text-[#808080]
                           hover:text-neutral-200 transition-colors duration-200
                "><RxCopy /></button>
            ) : (
                <div
                className="flex w-full justify-end text-lg -mb-4 ml-1 opacity-50 text-green-500"
                ><RxCheck /></div>
            )}
            <SyntaxHighlighter 
                className="hide-scroll"
                language={language} 
                style={atomOneDark} 
                customStyle={{  
                    background: 'var(--code)',
                    color: 'var(--text)'
                }}
                
            >{value}
            </SyntaxHighlighter>
        </div>
    )
}
