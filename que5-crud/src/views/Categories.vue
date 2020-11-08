<template>
  <div class="about">
    <h1>Categories Page</h1>
    <div class="row">
      <div class="col-sm-8">
        <b-table striped hover :items="catagories"></b-table>
      </div>
      <div class="col-sm-4">
        <b-button pill variant="success" @click="$bvModal.show('bv-modal-catagories')">Add Catagories </b-button>
      </div>
      <b-modal id="bv-modal-catagories" hide-footer>
        <template #modal-title> Using <code>$bvModal</code> Methods </template>
        <div class="d-block text-center">
          <h3>Please Enter Category Name</h3>
        </div>
        <div class="mt-3">
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
            :state="nameState"
            label="Name"
            label-for="name-input"
            invalid-feedback="Catagory Already Exists"
            @show="resetModal" @hidden="resetModal" @ok="handleSubmit">
              <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
            </b-form-group>
          </form>
        </div>
        <b-button class="mt-3" block variant="success" @click="handleSubmit">Add Catagories</b-button>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-catagories')">Close Me</b-button>
      </b-modal>
    </div>
    <h1>
      As I am not using any state management, this page is
      for showing that I can modify modals and make them possible to have input
      and place them in live state to make a reactive component/list
    </h1>
  </div>
</template>

<script>
import catagoriesList from '../Database/catagoriesList.json';

export default {
  data() {
    return {
      catagories: catagoriesList.catagories,
      name: '',
    };
  },
  created() {},
  methods: {
    handleSubmit() {
      // const catagoriesObject = { catagories: [] }; // created new obj
      // this.catagories.map((obj) => {
      //   catagoriesObject.catagories.push(obj); // pushed old elements to new array
      //   return true;
      // });
      // catagoriesObject.catagories.push(this.name); // pushed latest element to array
      if (!this.nameState) return false;
      this.catagories.push({ name: this.name }); // pushed latest element to state object
      console.log(this.catagories);
      this.$nextTick(() => {
        this.$bvModal.hide('bv-modal-catagories');
      });
      this.resetModal();
      return true;
    },
    resetModal() {
      this.name = '';
      this.nameState = null;
    },
  },
  computed: {
    nameState: {
      get() {
        const catArr = this.catagories.map((cats) => cats.name);
        if (catArr.includes(this.name)) {
          return false;
        }
        return true;
      },
      set() {},
    },
  },
};
</script>

<style scoped>
.table {
  margin-left: 5rem;
  margin-right: 10rem;
}
</style>
