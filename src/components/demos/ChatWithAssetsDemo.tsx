'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ChatWithAssetsDemo.module.css';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    sources?: { title: string; type: string }[];
}

const DEMO_CONVERSATIONS: { question: string; answer: string; sources: { title: string; type: string }[] }[] = [
    {
        question: "What is the maximum operating pressure for the XR-500 compressor?",
        answer: "The XR-500 compressor has a maximum operating pressure of 350 PSI (24.1 bar). According to the maintenance manual, regular pressure relief valve testing is required every 6 months to ensure safe operation.",
        sources: [
            { title: "XR-500 Technical Manual v3.2", type: "PDF" },
            { title: "Maintenance Schedule 2024", type: "DOC" }
        ]
    },
    {
        question: "How do I troubleshoot P&ID valve FV-101?",
        answer: "For valve FV-101 troubleshooting: 1) Check the 24VDC control signal from DCS, 2) Verify air supply pressure (min 80 PSI), 3) Inspect positioner calibration, 4) Check for mechanical binding. If issues persist, refer to the P&ID drawing DR-2024-045.",
        sources: [
            { title: "P&ID Drawing DR-2024-045", type: "DWG" },
            { title: "Valve Maintenance Guide", type: "PDF" }
        ]
    },
    {
        question: "What are the HSE requirements for confined space entry?",
        answer: "Confined space entry requires: 1) Valid entry permit signed by supervisor, 2) Atmospheric testing for O2, LEL, CO, H2S, 3) Continuous ventilation, 4) Standby attendant at entry point, 5) Emergency rescue plan. All personnel must complete CSE training within last 12 months.",
        sources: [
            { title: "HSE Manual Chapter 7", type: "PDF" },
            { title: "Confined Space Permit Form", type: "FORM" }
        ]
    }
];

export default function ChatWithAssetsDemo() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const simulateTyping = (text: string, sources: { title: string; type: string }[]) => {
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: text,
                sources
            }]);
            setIsTyping(false);
        }, 1500);
    };

    const handleQuestionClick = (index: number) => {
        const conv = DEMO_CONVERSATIONS[index];
        setCurrentQuestion(index);

        // Add user message
        setMessages(prev => [...prev, {
            role: 'user',
            content: conv.question
        }]);

        // Simulate AI response
        simulateTyping(conv.answer, conv.sources);
    };

    const handleReset = () => {
        setMessages([]);
        setCurrentQuestion(0);
    };

    return (
        <section className={styles.demoSection}>
            <h2>Chat with Assets Demo</h2>

            <div className={styles.demoContainer}>
                {/* Left: Chat Interface */}
                <div className={styles.chatColumn}>
                    <div className={styles.chatWindow}>
                        <div className={styles.chatHeader}>
                            <div className={styles.chatTitle}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span>Asset Knowledge Base</span>
                            </div>
                            <span className={styles.docCount}>10,247 Documents Indexed</span>
                        </div>

                        <div className={styles.messagesArea}>
                            {messages.length === 0 ? (
                                <div className={styles.emptyState}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <p>Ask questions about your technical documentation</p>
                                </div>
                            ) : (
                                messages.map((msg, idx) => (
                                    <div key={idx} className={`${styles.message} ${styles[msg.role]}`}>
                                        <div className={styles.messageContent}>
                                            {msg.content}
                                        </div>
                                        {msg.sources && (
                                            <div className={styles.sources}>
                                                <span className={styles.sourcesLabel}>Sources:</span>
                                                {msg.sources.map((src, sidx) => (
                                                    <span key={sidx} className={styles.sourceTag}>
                                                        <span className={styles.sourceType}>[{src.type}]</span>
                                                        {src.title}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}

                            {isTyping && (
                                <div className={`${styles.message} ${styles.assistant}`}>
                                    <div className={styles.typingIndicator}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className={styles.inputArea}>
                            <input
                                type="text"
                                placeholder="Ask about your documents..."
                                className={styles.chatInput}
                                disabled
                            />
                            <button className={styles.sendBtn} disabled>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right: Demo Controls */}
                <div className={styles.controlsColumn}>
                    <div className={styles.infoCard}>
                        <h3>RAG Pipeline</h3>
                        <p>Hybrid semantic search with Azure AI Search. Retrieves relevant chunks from PDFs, manuals, and P&IDs, then generates cited answers using GPT-4o.</p>
                    </div>

                    <div className={styles.metrics}>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>4.2s</span>
                            <span className={styles.metricLabel}>Response Time</span>
                        </div>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>95%</span>
                            <span className={styles.metricLabel}>Relevance</span>
                        </div>
                    </div>

                    <div className={styles.quickQuestions}>
                        <h4>Try These Questions</h4>
                        {DEMO_CONVERSATIONS.map((conv, idx) => (
                            <button
                                key={idx}
                                className={styles.questionBtn}
                                onClick={() => handleQuestionClick(idx)}
                                disabled={isTyping}
                            >
                                {conv.question}
                            </button>
                        ))}
                    </div>

                    {messages.length > 0 && (
                        <button className={styles.resetBtn} onClick={handleReset}>
                            Reset Chat
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
