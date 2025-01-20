import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Building2, Cpu, Clock } from "lucide-react"

export function Hyperservice() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">#HYPERSERVICE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Building2 className="mx-auto h-16 w-16 mb-4" />
            <h3 className="text-xl font-bold mb-2">1000 Service Centres</h3>
            <p>1 lakh third party mechanics to be EV-ready.</p>
          </div>
          <div className="text-center">
            <Cpu className="mx-auto h-16 w-16 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI Powered Service</h3>
            <p>Proactive maintenance alerts. Remote diagnostics.</p>
          </div>
          <div className="text-center">
            <Clock className="mx-auto h-16 w-16 mb-4" />
            <h3 className="text-xl font-bold mb-2">Quick Service Guarantee</h3>
            <p>1 Day resolution else get backup Ola S1. Ola Cabs coupons for Care+ Subscribers.</p>
          </div>
        </div>
        <div className="text-center">
          <Button variant="link" className="text-blue-600 text-lg">
            More about Ola Hyperservice →
          </Button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          2X network by Dec. 3rd party mechanics by Dec 2025. Quick Service Guarantee rolling out from 10th Oct.
        </p>
      </div>
    </section>
  )
}

