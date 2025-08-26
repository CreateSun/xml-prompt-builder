"use client";

import React from "react";
import PromptBuilder from "../components/PromptBuilder";
import HelpDialog from "../components/HelpDialog";
import { Code, Github } from "lucide-react";
import FourSection from "@/components/home/FourSection";
import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-background-secondary dark:bg-background">
        <div className="container mx-auto px-4 py-10">
          {/* Landing Page Content */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black mb-6 leading-tight text-foreground dark:text-foreground">
              Professional <span className="text-primary">XML Prompt</span> Editor
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-foreground-muted dark:text-foreground-muted mb-10">
              Create structured XML prompts for AI systems without the hassle of
              manual formatting. Perfect for prompt engineers and AI
              enthusiasts.
            </p>
          </div>

          {/* Prompt Builder Component */}
          <PromptBuilder />

          <FourSection />
        </div>
      </div>
    </Layout>
  );
}
