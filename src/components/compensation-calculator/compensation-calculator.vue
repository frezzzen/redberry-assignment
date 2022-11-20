<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '../base/base-input.vue';
import BaseCheckbox from '../base/base-checkbox.vue';
import { UserInformation } from '../../types/user/user-information.type';
import BaseButton from '../base/base-button.vue';

const userInformation = ref<UserInformation>({
  averageIncome: 0,
  daysOnSickLeave: 0,
  hasTuberculosis: false
});
</script>

<template>
  <div class="compensation-calculator">
    <h1>Compensation Calculator</h1>
    <form @submit.prevent>
      <base-input v-model="userInformation.averageIncome" placeholder="Average income"> € </base-input>
      <base-input v-model="userInformation.daysOnSickLeave" placeholder="Days on sick-leave"> days </base-input>
      <base-checkbox v-model="userInformation.hasTuberculosis">
        <span>I have Tuberculosis</span>
      </base-checkbox>
      <base-button> Calculate </base-button>
    </form>
    <div class="result">
      <div>
        <p class="compensation-days">
          The employer compensates <br />
          <b>4 days </b>
        </p>
        <p class="compensation-value">112,00€</p>
        <p class="compensation-daily-allowance">
          Daily allowance <br />
          28,00 €
        </p>
      </div>
      <div>
        <p class="compensation-days">
          The employer compensates <br />
          <b>4 days </b>
        </p>
        <p class="compensation-value">112,00€</p>
        <p class="compensation-daily-allowance">
          Daily allowance <br />
          28,00 €
        </p>
      </div>
    </div>
    <div class="total">
      <p>Compensation total for 7 days (net)</p>
      <b>112,00€</b>
    </div>
  </div>
</template>

<style scoped lang="scss">
.compensation-calculator {
  padding: 8rem 2rem;
  width: 32rem;
  color: var(--metal-dark);

  h1 {
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .result {
    margin: 0 -2rem;
    padding: 2rem;
    border-top: 1px solid var(--metal-light);
    border-bottom: 1px solid var(--metal-light);
    text-align: center;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    margin-bottom: 2rem;

    .compensation-days {
      font-size: 1.4rem;
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }

    .compensation-value {
      font-size: 1.8rem;
      line-height: 2rem;
    }

    .compensation-daily-allowance {
      color: var(--metal-middle);
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  .total {
    text-align: center;
    p {
      font-size: 1.4rem;
      line-height: 1.5rem;
      margin-bottom: 0.5rem;
    }
    b {
      font-size: 2.4rem;
      line-height: 3rem;
    }
  }
}
</style>