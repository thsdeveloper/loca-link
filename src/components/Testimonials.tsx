"use client";

import { useState } from "react";
import { TESTIMONIALS, SOCIAL_PROOF } from "@/lib/constants";

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    const goNext = () => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const goPrev = () => {
        setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section id="depoimentos" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            {/* Gradient orbs */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2" />

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm text-accent mb-6">
                        <StarIcon className="w-4 h-4" />
                        {SOCIAL_PROOF.rating} de 5 estrelas • {SOCIAL_PROOF.totalReviews} avaliações
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        O que nossos <span className="text-gradient">clientes dizem</span>
                    </h2>
                    <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                        Mais de {SOCIAL_PROOF.eventsCompleted} eventos conectados com sucesso em Brasília e região
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    <div className="text-center p-6 rounded-2xl bg-background/50 border border-primary-500/20">
                        <p className="text-3xl font-bold text-accent mb-1">{SOCIAL_PROOF.eventsCompleted}+</p>
                        <p className="text-sm text-foreground-muted">Eventos realizados</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-background/50 border border-primary-500/20">
                        <p className="text-3xl font-bold text-accent mb-1">{SOCIAL_PROOF.rating}★</p>
                        <p className="text-sm text-foreground-muted">Avaliação média</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-background/50 border border-primary-500/20">
                        <p className="text-3xl font-bold text-accent mb-1">{SOCIAL_PROOF.satisfactionRate}%</p>
                        <p className="text-sm text-foreground-muted">Satisfação</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-background/50 border border-primary-500/20">
                        <p className="text-3xl font-bold text-accent mb-1">5min</p>
                        <p className="text-sm text-foreground-muted">Instalação média</p>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={goPrev}
                        aria-label="Depoimento anterior"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-20 w-12 h-12 rounded-full bg-primary-700/80 border border-primary-500/30 flex items-center justify-center text-foreground hover:bg-primary-600 hover:border-accent/50 transition-all"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={goNext}
                        aria-label="Próximo depoimento"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-20 w-12 h-12 rounded-full bg-primary-700/80 border border-primary-500/30 flex items-center justify-center text-foreground hover:bg-primary-600 hover:border-accent/50 transition-all"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>

                    {/* Testimonial Card */}
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {TESTIMONIALS.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 p-8 lg:p-12"
                                >
                                    <div className="bg-background-secondary/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-primary-500/20">
                                        {/* Quote Icon */}
                                        <div className="mb-6">
                                            <QuoteIcon className="w-12 h-12 text-accent/30" />
                                        </div>

                                        {/* Text */}
                                        <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                                            "{testimonial.text}"
                                        </blockquote>

                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            {/* Avatar */}
                                            <div className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center">
                                                <span className="text-lg font-bold text-accent">{testimonial.avatar}</span>
                                            </div>

                                            <div className="flex-1">
                                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                                <p className="text-sm text-foreground-muted">{testimonial.role}</p>
                                            </div>

                                            {/* Event Badge */}
                                            <div className="hidden sm:block text-right">
                                                <p className="text-sm font-medium text-accent">{testimonial.event}</p>
                                                <p className="text-xs text-foreground-muted">{testimonial.location}</p>
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1 mt-6 pt-6 border-t border-primary-500/20">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <StarFilledIcon
                                                    key={i}
                                                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent' : 'text-primary-600'}`}
                                                />
                                            ))}
                                            <span className="ml-2 text-sm text-foreground-muted">Avaliação verificada</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {TESTIMONIALS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? "bg-accent w-8"
                                        : "bg-primary-600 hover:bg-primary-500 w-2.5"
                                    }`}
                                aria-label={`Ir para depoimento ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StarIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}

function StarFilledIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}

function QuoteIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
    );
}

function ChevronLeftIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
        </svg>
    );
}

function ChevronRightIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
        </svg>
    );
}
