<template>
  <div class="results">
    <div class="counters">
      <q-card class="display-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <span class="numberDisplay">{{this.getTotalQuizes}}</span>
          </q-card-section>
          <q-card-section class="textDisplay">Total Surveys</q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="display-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <span class="numberDisplay">{{this.getLowRisk}}</span>
          </q-card-section>
          <q-card-section class="textDisplay">Low Risk</q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="display-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <span class="numberDisplay">{{this.getMediumRisk}}</span>
          </q-card-section>
          <q-card-section class="textDisplay">Medium Risk</q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="display-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <span class="numberDisplay">{{this.getHighRisk}}</span>
          </q-card-section>
          <q-card-section class="textDisplay">High Risk</q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <div class="content">
      <div class="results-left">
        <q-table title="Assesments" :data="this.getTableData" :columns="columns" row-key="name" />
      </div>
      <div class="results-right"></div>
    </div>
  </div>
  <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    starting features will be giving them the ability to view the data basis:
    Risk,
    District,
    Age,
    Travel history,
    Close contact with Covid patient,
    Heat Map and
  Date wise breakdown.-->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PageIndex",
  computed: {
    ...mapGetters("covid", [
      "getTotalQuizes",
      "getLowRisk",
      "getMediumRisk",
      "getHighRisk",
      "getTableData"
    ])
  },
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left"
        },
        {
          name: "phone",
          align: "center",
          label: "Phone",
          field: "phone",
          sortable: true
        },
        { name: "risk", label: "Risk", field: "risk", sortable: true },
        { name: "district", label: "District", field: "district" }
      ]
    };
  }
};
</script>

<style scoped>
.numberDisplay {
  font-size: 40px;
  font-weight: 600;
  margin: auto;
}

.textDisplay {
  font-size: 25px;
  text-align: center;
  margin: auto;
}

.results {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.counters {
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.display-card {
  flex: 1;
  flex-basis: 20%;
  margin: 20px;
}

.content {
  flex: 10;
  display: flex;
  flex-direction: row;
}

.results-left {
  display: flex;
  flex: 1;
  margin: 20px;
}

.results-right {
  display: flex;
  flex: 1;
}
</style>
