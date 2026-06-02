import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black font-bold text-6xl mb-6">
              A beeter Way to track your job Application
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, Organize, and manage your job application at one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className="h-12 px-8 text-lg font-medium">
                Start for free <ArrowRight className="ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Free forever. no credit card required
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
