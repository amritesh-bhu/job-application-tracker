"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export default function SignUp() {
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("signUpData", signUpData)
    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
            <Card className="w-full max-w-md border-gray-200 shadow-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-blacks">Sign Up</CardTitle>
                    <CardDescription className="text-gray-600">Create an account to start tracking your job application</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-gray-700">Name</Label>
                            <Input
                                id="name"
                                type="name"
                                placeholder="John Doe"
                                value={signUpData.name}
                                onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                                required
                                className="border-gray-300 focus:border-primary focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                value={signUpData.email}
                                onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                                required
                                className="border-gray-300 focus:border-primary focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-gray-700">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={signUpData.password}
                                onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                                required
                                className="border-gray-300 focus:border-primary focus:ring-primary"

                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90"
                        >
                            Sign Up
                        </Button>
                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{" "}

                            Sign in

                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}