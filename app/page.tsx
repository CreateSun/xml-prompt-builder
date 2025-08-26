import React from "react";
import PromptBuilder from "../components/PromptBuilder";
import Layout from "@/components/layout/Layout";
import HowToUseSection from "@/components/home/HowToUseSection";

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-background-secondary dark:bg-background">
        <div className="container mx-auto px-4 py-10">
          {/* Landing Page Content */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black mb-6 leading-tight text-foreground dark:text-foreground">
              Professional <span className="text-primary">XML Prompt</span>{" "}
              Editor
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-foreground-muted dark:text-foreground-muted mb-10">
              Create structured XML prompts for AI systems without the hassle of
              manual formatting. Perfect for prompt engineers and AI
              enthusiasts.
            </p>
          </div>

          {/* Prompt Builder Component */}
          <PromptBuilder />

          <HowToUseSection />

          <div className="mt-8 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground dark:text-foreground mb-8">
              OpenAI Prompting Guide
            </h2>

            <p className="text-foreground-muted dark:text-foreground-muted mb-8">
              Learn how to use the OpenAI API to build XML prompts for AI
              agents.
              <a
                href="https://cookbook.openai.com/examples/gpt-5/gpt-5_prompting_guidents.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover underline"
              >
                OpenAI Prompting Guide
              </a>
            </p>
            <div className="mt-4 w-fit flex flex-row gap-4 border-foreground-muted dark:border-foreground-muted pb-4">
              <a
                href="https://cdn.openai.com/API/docs/gpt-5-for-coding-cheatsheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold text-lg p-2 rounded-sm border hover:text-primary-hover underline"
              >
                GPT-5 for Coding Cheatsheet
              </a>

              <a
                href="https://cookbook.openai.com/examples/gpt-5/gpt-5_prompting_guidents.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover font-bold text-lg p-2 rounded-sm border hover:text-primary-hover underline"
              >
                OpenAI Prompting Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
