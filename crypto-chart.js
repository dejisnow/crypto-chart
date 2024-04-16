window.onload=()=>{
    const container= document.getElementById('myChart');
    
    let xValues = ["Bitcoin", "Ethereum", "USDT", "BNB", "Solana"];
let yValues = [1300, 370, 108, 80, 60];
let barColors = [
  "orange",
  "blue",
  "#00ff00",
  "yellow",
  "purple"
];

  new Chart(container, {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
    options: {
      title: {
      display: true,
     
    }
    }
  }); 
    
    
    
    
    
    
      }
