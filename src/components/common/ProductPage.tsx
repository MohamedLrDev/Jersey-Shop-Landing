import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('M')
  const [addName, setAddName] = useState(false)
  const [addPatch, setAddPatch] = useState(false)

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity))
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="flex flex-col md:flex-row gap-8 p-6">
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/600"
            alt="AC Milan 13/14 Home Jersey"
            className="w-full object-cover rounded-md"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">AC Milan 13/14 Home Jersey</h1>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground line-through">R 1,349.99 ZAR</span>
            <span className="text-2xl font-bold">R 899.95 ZAR</span>
            <span className="bg-red-600 text-primary-foreground text-sm px-2 py-1 rounded">Sale</span>
          </div>
          <p className="text-sm text-muted-foreground">Shipping calculated at checkout.</p>
          
          {/* Size Selection */}
          <div>
            <h2 className="font-semibold mb-2">Size</h2>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                <Button
                  key={s}
                  variant={size === s ? "default" : "outline"}
                  className="w-10 h-10 p-0 rounded-full"
                  onClick={() => setSize(s)}
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Quantity Selector */}
          <div>
            <h2 className="font-semibold mb-2">Quantity</h2>
            <div className="flex items-center border rounded w-32">
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(quantity - 1)}>
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                className="w-full text-center border-none"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                min={1}
              />
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Customization Options */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="addName"
                checked={addName}
                onCheckedChange={(checked) => setAddName(checked === true)}
              />
              <Label htmlFor="addName" className="text-sm font-medium">
                Add Name and Number
              </Label>
              <span className="text-sm text-muted-foreground">+R 100.00 ZAR</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="addPatch"
                checked={addPatch}
                onCheckedChange={(checked) => setAddPatch(checked === true)}
              />
              <Label htmlFor="addPatch" className="text-sm font-medium">
                Add Competition Patch
              </Label>
              <span className="text-sm text-muted-foreground">+R 70.00 ZAR</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <Button className="w-full" size="lg">
            Add to cart
          </Button>
          <Button className="w-full" variant="outline" size="lg">
            Buy it now
          </Button>
          
          <p className="text-sm">
            The AC Milan 2013/2014 Long Sleeves Home Jersey is a classic piece of football history.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductPage
