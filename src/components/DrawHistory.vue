<template>
    <div>
      <h1>Draw History</h1>
  
      <div v-for="draw in drawHistory" :key="draw.timestamp" class="draw-item">
        <p><strong>Timestamp:</strong> {{ draw.timestamp }}</p>
        <p><strong>Draw Numbers:</strong> {{ draw.drawNumbers.join(', ') }}</p>
        <p><strong>Player Bet:</strong> {{ draw.playerBet.join(', ') }}</p>
        <p><strong>Total Amount Won:</strong> {{ draw.totalAmountWon }}€</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DrawHistory',
    data() {
      return {
        drawHistory: [], 
      };
    },
    mounted() {
      this.fetchDrawHistory();
    },
    methods: {
      fetchDrawHistory() {
        axios
          .get('http://localhost:3000/draw-history')
          .then((response) => {
            this.drawHistory = response.data;
          })
          .catch((error) => {
            console.error('Error fetching draw history:', error);
          });
      },
    },
  };
  </script>
  
  <style>
  .draw-item {
    margin-bottom: 20px;
  }
  </style>
  