let inventory = (function() {
  let stocks = [];
  
  function isValid(newStock) {
    return stocks.every(function(stock) {
      return newStock.name !== stock.name;
    });
  };

  return {
    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },

    addStock(newStock) {
      if (isValid(newStock)) { stocks.push(newStock) }
    },
  };
})();

inventory.addStock({
  name: 'balpen',
  count: 5,
});

inventory.stockCounts(); // ballpen: 5

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();  // ballpen: 5

inventory.stocks.push({
  name: 'ballpen',
  count: 5,
});  // error