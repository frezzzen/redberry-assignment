import { computed, ref, Ref, toRefs } from 'vue';
import { UserInformation } from '../types/user/user-information.type';

/*
Your employer pays the compensation from the 4th to the 8th day of sick-leave. The
Estonian Health Insurance Fund pays from the 9th day. The compensation rate is 70% of
your monthly gross income.
The maximum duration of one insurance event is 182 days, unless it’s tuberculosis. For
tuberculosis, it is up to 240 days.
 */

export interface CompensationResult {
  dailyAllowance: number;
  compensationDaysCount: number;
  compensationValue: number;
}

export const useCompensationCalculator = (userInformation: Ref<UserInformation>) => {
  const { daysOnSickLeave, hasTuberculosis, averageIncome } = toRefs<UserInformation>(userInformation.value);
  const compensationRate = 0.7;
  const nonCompensationDays = 3; // first 3 days
  const employerCompensationDaysCount = 5; // from 4th including 8th day (4 5 6 7 8)
  const healthInsuranceMaximumDuration = computed(
    () => (hasTuberculosis.value ? 240 : 182) - (employerCompensationDaysCount + nonCompensationDays)
  );

  const employer = ref<CompensationResult>({
    compensationDaysCount: 0,
    compensationValue: 0,
    dailyAllowance: 0
  });

  const healthInsurance = ref<CompensationResult>({
    dailyAllowance: 0,
    compensationValue: 0,
    compensationDaysCount: 0
  });

  const resetCompensationResult = (result: Ref<CompensationResult>) => {
    // eslint-disable-next-line no-param-reassign
    result.value = {
      dailyAllowance: 0,
      compensationValue: 0,
      compensationDaysCount: 0
    };
  };

  const calculateCompensation = () => {
    resetCompensationResult(employer);
    resetCompensationResult(healthInsurance);
    const dailyAllowance = (averageIncome.value * compensationRate) / 30;
    employer.value.dailyAllowance = dailyAllowance;
    healthInsurance.value.dailyAllowance = dailyAllowance;
    if (daysOnSickLeave.value < 4) return;
    let sickDays = daysOnSickLeave.value - nonCompensationDays;

    // checking if health insurance should compensate some sick days
    if (sickDays > 4) {
      employer.value = {
        dailyAllowance,
        compensationValue: employerCompensationDaysCount * dailyAllowance,
        compensationDaysCount: employerCompensationDaysCount
      };

      sickDays -= employerCompensationDaysCount;

      // making sure limit is respected
      if (sickDays > healthInsuranceMaximumDuration.value) sickDays = healthInsuranceMaximumDuration.value;

      healthInsurance.value = {
        dailyAllowance,
        compensationDaysCount: sickDays,
        compensationValue: sickDays * dailyAllowance
      };
    } else {
      employer.value = {
        dailyAllowance,
        compensationValue: sickDays * dailyAllowance,
        compensationDaysCount: sickDays
      };
    }
  };

  return {
    employer,
    healthInsurance,
    calculateCompensation
  };
};
