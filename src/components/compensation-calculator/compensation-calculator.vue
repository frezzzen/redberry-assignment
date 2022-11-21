<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '../base/base-input.vue';
import BaseCheckbox from '../base/base-checkbox.vue';
import { UserInformation } from '../../types/user/user-information.type';
import BaseButton from '../base/base-button.vue';
import { useCompensationCalculator } from '../../composables/useCompensationCalculator';
import FormattedNumber from '../common/formatted-number.vue';
import NumberAnimation from '../common/number-animation.vue';

const userInformation = ref<UserInformation>({
  averageIncome: 0,
  daysOnSickLeave: 0,
  hasTuberculosis: false
});

const { employer, healthInsurance, calculateCompensation } = useCompensationCalculator(userInformation);
const daysToDisplay = ref(0);

const onCalculateClick = () => {
  calculateCompensation();
  daysToDisplay.value = userInformation.value.daysOnSickLeave;
};
</script>

<template>
  <div class="compensation-calculator">
    <h4>Compensation Calculator</h4>
    <form @submit.prevent="onCalculateClick">
      <base-input v-model="userInformation.averageIncome" placeholder="Average income" type="number">
        <template #type> € </template>
      </base-input>
      <base-input v-model="userInformation.daysOnSickLeave" placeholder="Days on sick-leave" type="number">
        <template #type> days </template>
      </base-input>
      <base-checkbox v-model="userInformation.hasTuberculosis"> I have tubercolosis</base-checkbox>
      <base-button type="submit"> Calculate </base-button>
    </form>
    <div class="result">
      <div>
        <p class="compensation-days">
          The employer compensates <br />
          <b>
            <number-animation :to="employer.compensationDaysCount">
              <template #number="{ number }">
                {{ number }}
              </template>
            </number-animation>
            days
          </b>
        </p>
        <p class="compensation-value">
          <number-animation :to="employer.compensationValue">
            <template #number="{ number }">
              <formatted-number symbol="€" :number="number" />
            </template>
          </number-animation>
        </p>
        <p class="compensation-daily-allowance">
          Daily allowance <br />
          <number-animation :to="healthInsurance.dailyAllowance">
            <template #number="{ number }">
              <formatted-number symbol="€" :number="number" />
            </template>
          </number-animation>
        </p>
      </div>
      <div>
        <p class="compensation-days">
          The employer compensates <br />
          <b>
            <number-animation :to="healthInsurance.compensationDaysCount">
              <template #number="{ number }">
                {{ number }}
              </template>
            </number-animation>
            days
          </b>
        </p>
        <p class="compensation-value">
          <number-animation :to="healthInsurance.compensationValue">
            <template #number="{ number }">
              <formatted-number symbol="€" :number="number" />
            </template>
          </number-animation>
        </p>
        <p class="compensation-daily-allowance">
          Daily allowance <br />
          <number-animation :to="healthInsurance.dailyAllowance">
            <template #number="{ number }">
              <formatted-number symbol="€" :number="number" />
            </template>
          </number-animation>
        </p>
      </div>
    </div>
    <div class="total">
      <p>
        Compensation total for <span>{{ daysToDisplay }}</span> days (net)
      </p>
      <b>
        <number-animation :to="employer.compensationValue + healthInsurance.compensationValue">
          <template #number="{ number }">
            <formatted-number symbol="€" :number="number" />
          </template>
        </number-animation>
      </b>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/mixins.scss';

.compensation-calculator {
  height: 75.5rem;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  max-width: 32rem;
  background-color: var(--white);
  padding: 8rem 2rem;
  color: var(--metal-dark);
  $pathWidth: 10px;
  clip-path: polygon(
    10px 0%,
    calc(100% - $pathWidth) 0%,
    100% $pathWidth,
    100% calc(100% - $pathWidth),
    calc(100% - $pathWidth) 100%,
    $pathWidth 100%,
    0% calc(100% - $pathWidth),
    0% $pathWidth
  );

  animation: fade-in 0.5s ease-out;

  @include responsive(1024px) {
  }

  @include responsive(600px) {
    min-height: 80vh;
  }

  h4 {
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
