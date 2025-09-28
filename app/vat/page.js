"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [rate, setRate] = useState(0);
  const [price, setPrice] = useState('');
  const [vatAmount, setVatAmount] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    fetchVatRate();
  }, []);

  async function fetchVatRate() {
    const response = await fetch('/app/app1/api/vat/rate');
    const data = await response.json();
    console.log('VAT Rate:', data.rate);
    setRate(data.rate);
  }

  function calculateVAT() {
    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      alert('Please enter a valid price');
      return;
    }
    
    const vat = priceValue * rate;
    const totalWithVat = priceValue + vat;
    
    setVatAmount(vat);
    setTotal(totalWithVat);
  }

  return (
    <div>
      <h1>VAT Calculator</h1>
      <div>
        VAT RATE = {(rate * 100).toFixed(2)}%<br/>
        Price:
        <input 
          type="number" 
          placeholder="Enter price" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={calculateVAT}>Calculate</button>
        <br /><br />
        {vatAmount > 0 && (
          <div>
            <strong>Results:</strong><br />
            Price: ${parseFloat(price).toFixed(2)}<br />
            VAT Amount: ${vatAmount.toFixed(2)}<br />
            Total with VAT: ${total.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
}
