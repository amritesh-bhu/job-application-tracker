"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"

export default function ImageTabs() {
    const [activeTab, setActiveTab] = useState("organise")
    return (
        <section className="border-t bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="flex gap-2 justify-center mb-8">
                        <Button
                            onClick={() => setActiveTab("organise")}
                            className={`${activeTab === "organise" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                        >Organize Applications</Button>
                        <Button
                            onClick={() => setActiveTab("hired")}
                            className={`${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                        >Get Hired</Button>
                        <Button
                            onClick={() => setActiveTab("board")}
                            className={`${activeTab === "board" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                        >Manage Boards</Button>
                    </div>
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border-gray-200 shadow-xl">
                        {
                            activeTab === "organise" && (
                                <Image
                                    src="/hero-images/hero1.png"
                                    alt="organise Applications"
                                    height={1200}
                                    width={800}
                                />
                            )
                        }
                        {
                            activeTab === "hired" && (
                                <Image
                                    src="/hero-images/hero2.png"
                                    alt="Get Hired"
                                    height={1200}
                                    width={800}
                                />
                            )
                        }
                        {
                            activeTab === "board" && (
                                <Image
                                    src="/hero-images/hero3.png"
                                    alt="Manage Boards"
                                    height={1200}
                                    width={800}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}