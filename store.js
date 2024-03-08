import { reactive } from 'vue';

const store = reactive({
  specializations: [],
  specializationsId: '',
  specializationsName: '',
  professionalId: null,
  getSpecializationNameById(id) {
    const specialization = this.specializations.find(
      (specialization) => specialization.id === id
    );
    return specialization ? specialization.name : '';
  },
});

export default store;
