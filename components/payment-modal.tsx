"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Loader2, Smartphone, CheckCircle, XCircle, Download, CreditCard } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  onPaymentSuccess: () => void
  proposalTitle: string
  totalAmount: number
}

type PaymentStatus = "idle" | "initiating" | "pending" | "success" | "failed"

export function PaymentModal({ isOpen, onClose, onPaymentSuccess, proposalTitle, totalAmount }: PaymentModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle")
  const [transactionId, setTransactionId] = useState("")

  const handlePayment = async () => {
    if (!phoneNumber.trim()) return

    setPaymentStatus("initiating")

    // Simulate API call to initiate MPesa STK Push
    try {
      // This would be replaced with actual MPesa API integration
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const mockTransactionId = `TXN${Date.now()}`
      setTransactionId(mockTransactionId)
      setPaymentStatus("pending")

      // Simulate waiting for payment confirmation
      setTimeout(() => {
        // In real implementation, this would be handled by webhook
        const success = Math.random() > 0.3 // 70% success rate for demo
        if (success) {
          setPaymentStatus("success")
          setTimeout(() => {
            onPaymentSuccess()
          }, 2000)
        } else {
          setPaymentStatus("failed")
        }
      }, 5000)
    } catch (error) {
      setPaymentStatus("failed")
    }
  }

  const handleRetry = () => {
    setPaymentStatus("idle")
    setTransactionId("")
  }

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "")

    // Format as Kenyan phone number
    if (digits.startsWith("254")) {
      return digits.slice(0, 12)
    } else if (digits.startsWith("0")) {
      return "254" + digits.slice(1, 10)
    } else if (digits.startsWith("7") || digits.startsWith("1")) {
      return "254" + digits.slice(0, 9)
    }
    return digits.slice(0, 12)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhoneNumber(formatted)
  }

  const displayPhoneNumber = (phone: string) => {
    if (phone.length >= 12) {
      return `+${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6, 9)} ${phone.slice(9)}`
    }
    return phone
  }

  const renderPaymentContent = () => {
    switch (paymentStatus) {
      case "idle":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pay with M-Pesa</h3>
              <p className="text-gray-600 text-sm">
                Enter your M-Pesa number to receive a payment prompt on your phone
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Proposal Document:</span>
                  <span className="font-medium">{proposalTitle}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">PDF Generation:</span>
                  <span>KES 500</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span className="text-green-600">KES 500</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Label htmlFor="phone">M-Pesa Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={displayPhoneNumber(phoneNumber)}
                onChange={handlePhoneChange}
                placeholder="+254 7XX XXX XXX"
                className="text-center text-lg"
              />
              <p className="text-xs text-gray-500 text-center">You will receive an M-Pesa prompt on this number</p>
            </div>

            <Button
              onClick={handlePayment}
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={phoneNumber.length < 12}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Pay KES 500
            </Button>
          </div>
        )

      case "initiating":
        return (
          <div className="text-center space-y-4 py-8">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto" />
            <h3 className="text-lg font-semibold">Initiating Payment...</h3>
            <p className="text-gray-600">Setting up your M-Pesa payment request</p>
          </div>
        )

      case "pending":
        return (
          <div className="text-center space-y-6 py-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <Smartphone className="h-8 w-8 text-orange-600 animate-pulse" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Check Your Phone</h3>
              <p className="text-gray-600">
                M-Pesa payment request sent to
                <br />
                <span className="font-medium">{displayPhoneNumber(phoneNumber)}</span>
              </p>
              <Badge variant="outline" className="mt-2">
                Transaction ID: {transactionId}
              </Badge>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-orange-800">
                <strong>Next Steps:</strong>
                <br />
                1. Check your phone for M-Pesa prompt
                <br />
                2. Enter your M-Pesa PIN
                <br />
                3. Confirm the payment
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={handleRetry} className="flex-1 bg-transparent">
                Cancel
              </Button>
              <Button variant="outline" onClick={handlePayment} className="flex-1 bg-transparent">
                Resend Prompt
              </Button>
            </div>
          </div>
        )

      case "success":
        return (
          <div className="text-center space-y-6 py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-green-800">Payment Successful!</h3>
              <p className="text-gray-600">
                Your payment has been confirmed.
                <br />
                Your proposal PDF is ready for download.
              </p>
              <Badge variant="default" className="bg-green-600">
                Transaction ID: {transactionId}
              </Badge>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>What's Next:</strong>
                <br />• Your PDF will download automatically
                <br />• A copy will be saved to your account
                <br />• Receipt sent to your phone via SMS
              </p>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        )

      case "failed":
        return (
          <div className="text-center space-y-6 py-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-red-800">Payment Failed</h3>
              <p className="text-gray-600">
                We couldn't process your payment.
                <br />
                Please try again or contact support.
              </p>
              {transactionId && (
                <Badge variant="outline" className="mt-2">
                  Transaction ID: {transactionId}
                </Badge>
              )}
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Common Issues:</strong>
                <br />• Insufficient M-Pesa balance
                <br />• Incorrect PIN entered
                <br />• Network connectivity issues
                <br />• Transaction timeout
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
                Cancel
              </Button>
              <Button onClick={handleRetry} className="flex-1 bg-blue-600 hover:bg-blue-700">
                Try Again
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
          <DialogDescription>Pay securely with M-Pesa to download your proposal PDF</DialogDescription>
        </DialogHeader>

        {renderPaymentContent()}
      </DialogContent>
    </Dialog>
  )
}
