<template>
    <div>
      <HeaderPage />
      <h1>Draw Page</h1>
      <div class="draw-section">
        <div class="draw-numbers">
          <h2>Draw Numbers:</h2>
          <div v-for="number in drawNumbers" :key="number" class="draw-number-item">{{ number }}</div>
        </div>

        <div class="player-bet">
          <h2>Player Bet:</h2>
          <div v-for="(number, index) in playerBet" :key="index" class="draw-number-item" :class="{ highlighted: isMatchingNumber(number) }">{{ number }}</div>
        </div>
      </div>
        <div v-if="showModal" class="modal">
          <div class="modal-content">
            <h2>Thank you for competing</h2>
            <p>Total Amount Won: {{ totalAmountWon }}€</p>
            <button @click="saveToHistory">Save to History</button>
            <button @click="goBack">Go Back</button>
          </div>
        </div>
        <div class="result-section">
  <p class="total-amount-won">Total Amount Won: {{ totalAmountWon }}€</p>
</div>
      </div>
      
  </template>
  
  <script>
  import axios from 'axios';
  import HeaderPage from './Header.vue';
  
  export default {
    name: 'DrawPage',
    components: {
      HeaderPage,
    },
    data() {
      return {
        drawNumbers: [],
        playerBet: [],
        totalAmountWon: 0,
        drawCompleted: false,
        showModal: false,
      };
    },
    beforeRouteLeave(to, from, next) {
      if (!this.drawCompleted) {
        next(false);
      } else {
        next();
      }
    },
    mounted() {
      this.playerBet = this.$route.query.playerBet ? this.$route.query.playerBet.split(',') : [];
      setTimeout(() => {
        this.startDraw();
      }, 3000);
    },
    methods: {
      async startDraw() {
        for (let i = 0; i < 5; i++) {
          await new Promise((resolve) => setTimeout(resolve, 4000));
          const selectedNumber = this.getRandomNumber();
          this.drawNumbers.push(selectedNumber);
  
          if (this.playerBet.includes(selectedNumber)) {
            this.highlightDrawnNumber(selectedNumber);
          }
        }
  
        this.calculateWinningAmount();
        this.drawCompleted = true;
        this.showModal = true;
      },
      getRandomNumber() {
        return Math.floor(Math.random() * 30) + 1;
      },
      highlightDrawnNumber(number) {
  const drawnNumberElement = document.querySelector(`.draw-number-item[data-number="${number}"]`);

  if (drawnNumberElement) {
    drawnNumberElement.classList.add('highlighted');
  }

  const playerBetNumberElements = document.querySelectorAll(`.player-bet .draw-number-item`);

  playerBetNumberElements.forEach((element) => {
    const betNumber = parseInt(element.textContent);
    if (betNumber === number) {
      element.classList.add('highlighted');
    }
  });

  this.calculateWinningAmount();
},

isMatchingNumber(number) {
  return this.drawNumbers.includes(Number(number));
},

      calculateWinningAmount() {
        const matchingNumbers = this.drawNumbers.filter((number) => this.playerBet.includes(number)).length;
  
        if (matchingNumbers >= 3) {
          this.totalAmountWon = matchingNumbers === 3 ? 5 : matchingNumbers === 4 ? 10 : 20;
        } else {
          this.totalAmountWon = 0;
        }
      },
      saveToHistory() {
        const drawHistoryData = {
          timestamp: new Date().toISOString(),
          drawNumbers: this.drawNumbers,
          playerBet: this.playerBet,
          totalAmountWon: this.totalAmountWon,
        };
  
        axios
          .post('http://localhost:3000/draw-history', drawHistoryData)
          .then(() => {
            this.goBack();
          })
          .catch((error) => {
            console.error('Error saving draw history:', error);
          })
          .finally(() => {
            this.$router.beforeEach((to, from, next) => {
              next();
            });
          });
      },
      goBack() {
        this.$router.push({ name: 'HomePage' });
      },
    },
  };
  </script>
  
  <style>
  .draw-section {
    display: flex;
    justify-content: space-between;
  }
  
  .draw-numbers,
  .player-bet {
    width: 48%;
  }
  
  
  .draw-number-item {
    display: inline-block;
    margin: 5px;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .player-bet .highlighted {
    background-color: yellow;
  }
  
  .result-section {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  
  .total-amount-won {
    margin-bottom: 10px;
    
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color:#fff;
    padding: 20px;
    border-radius: 5px;
  }
  .result-section {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  height:100%;
}

.total-amount-won {
  text-align: right;
  height:100%;
}
.draw-number-item.highlighted,
.player-bet .draw-number-item.highlighted {
  background-color: yellow;
}
  </style>
  