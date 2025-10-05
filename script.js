function calculatePnL() {
      const capital = parseFloat(document.getElementById('capital').value);
      const entryPrice = parseFloat(document.getElementById('entryPrice').value);
      const exitPrice = parseFloat(document.getElementById('exitPrice').value);
      const quantity = parseFloat(document.getElementById('quantity').value);
      const leverage = parseFloat(document.getElementById('leverage').value);
      const positionType = document.getElementById('positionType').value;
      const usdtToINR = 84;

      if (!capital || !entryPrice || !exitPrice || !quantity || !leverage) {
        alert("⚠️ Please fill all fields properly!");
        return;
      }

      // Price difference calculation based on position
      let priceDiff = positionType === "long" ? exitPrice - entryPrice : entryPrice - exitPrice;

      // Total PnL in USDT (based on invested capital)
      const positionValue = capital * leverage; // total position size
      const pnlUSDT = (priceDiff / entryPrice) * positionValue;
      const pnlINR = pnlUSDT * usdtToINR;

      const usdtText = pnlUSDT >= 0 ? `+${pnlUSDT.toFixed(4)} USDT` : `${pnlUSDT.toFixed(4)} USDT`;
      const inrText = pnlINR >= 0 ? `≈ +₹${pnlINR.toFixed(2)}` : `≈ -₹${Math.abs(pnlINR.toFixed(2))}`;

      document.getElementById('usdtResult').textContent = usdtText;
      document.getElementById('inrResult').textContent = inrText;
      document.getElementById('result').classList.remove('hidden');
    }