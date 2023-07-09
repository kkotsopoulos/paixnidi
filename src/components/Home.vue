<template>
  <HeaderPage />
    <div class="number-selection">
    <div class="numbers">
    <h2>Select 5 Numbers:</h2>
    <div v-for="number in availableNumbers" :key="number" class="number-item">
    <button @click="selectNumber(number)">{{ number }}</button>
    </div>
    </div>
  
    <div class="selected-numbers">
    <h2>Selected Numbers:</h2>
    <div v-for="number in selectedNumbers" :key="number" class="selected-number-item">
    <span>{{ number }}</span>
    <button @click="removeSelectedNumber(number)">&times;</button>
    </div>
    <button @click="submitBet" :disabled="selectedNumbers.length !== 5">Submit Bet</button>
    </div>
    </div>
  </template>
  
  <script>
  import HeaderPage from './Header.vue'
  export default {
    name: 'NumberSelection',
    components:{
      HeaderPage
    },
    data() {
      return {
        availableNumbers: Array.from({ length: 30 }, (_, index) => index + 1),
        selectedNumbers: [],
      };
    },
    methods: {
      selectNumber(number) {
        if (this.selectedNumbers.length < 5 && !this.selectedNumbers.includes(number)) {
          this.selectedNumbers.push(number);
        }
      },
      removeSelectedNumber(number) {
        const index = this.selectedNumbers.indexOf(number);
        if (index !== -1) {
          this.selectedNumbers.splice(index, 1);
        }
      },
      submitBet() {
        if (this.selectedNumbers.length === 5) {
          this.$router.push({ name: 'DrawPage' });
          this.$router.push({ name: 'DrawPage', query: { playerBet: this.selectedNumbers.join(',') } });
        }
      },
    },
    
  };
  </script>
  
  <style>
  .number-selection {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .numbers {
    flex: 1;
  }
  
  .selected-numbers {
    flex: 1;
  }
  
  .number-item {
    margin-bottom: 5px;
  }
  
  .selected-number-item {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .selected-number-item span {
    margin-right: 5px;
  }
  
  button {
    padding: 5px 10px;
    cursor: pointer;
  }
  
  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  </style>
  