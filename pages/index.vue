<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-card class="pa-4" style="border-radius: 10px;border: 1px solid #4caf50;" outlined>
          <v-row align="center" no-gutters>
            <v-col cols="6">
              <v-icon color="#4caf50" size="30"
                >mdi-emoticon-happy-outline</v-icon
              >
            </v-col>
            <v-col class="text-right" cols="6">
              <div><strong>45</strong>/<small>65</small></div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-4" style="border-radius: 10px;border: 1px solid #e97171;" outlined>
          <v-row align="center" no-gutters>
            <v-col cols="6">
              <v-icon color="#e97171" size="30"
                >mdi-emoticon-sad-outline</v-icon
              >
            </v-col>
            <v-col class="text-right" cols="6">
              <div><strong>45</strong>/<small>65</small></div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <AssetsTable height="500" :headers="headers" :items="data">
          <template #date_time="{ item }">
            <div>
              <small class="d-block">
                {{ $dateFormat.dmy(item.created_at) }} {{ item.start_time }}
              </small>
              <small class="d-block">
                {{ $dateFormat.dmy(item.created_at) }} {{ item.end_time }}
              </small>
            </div>
          </template>

          <template #before_attachment="{ item }">
            <ImageView
              v-if="item.before_attachment"
              :src="item.before_attachment"
            />
            <span v-else>---</span>
          </template>
          <template #after_attachment="{ item }">
            <ImageView
              v-if="item.after_attachment"
              :src="item.after_attachment"
            />
            <span v-else>---</span>
          </template>
          <template #options="{ item }">
            <v-icon small color="primary">mdi-eye-outline</v-icon>
          </template>
        </AssetsTable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
let date = new Date();

let d = date.getDate();
let m = (date.getMonth() + 1).toString().padStart(2, "0");
let y = date.getFullYear();
let currentDate = y + "-" + m + "-" + d;

export default {
  data: () => ({
    Model: "House Keeping",
    endpoint: "room-data",
    currentDate,
    filters: {},
    options: {},
    loading: false,
    response: "",
    data: [],
    errors: [],
    headers: [
      {
        text: "Room",
        value: "room",
        align: "center",
      },
      {
        text: "Date/Time",
        value: "date_time",
        align: "center",
      },
      {
        text: "Before",
        value: "before_attachment",
        align: "center",
      },
      {
        text: "After",
        value: "after_attachment",
        align: "center",
      },

      {
        text: "Action",
        value: "options",
        align: "center",
      },
    ],
    componentKey: 1,
  }),

  async created() {
    this.getDataFromApi();
  },
  mounted() {},
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  methods: {
    getRandomId() {
      return ++this.componentKey;
    },
    async getDataFromApi() {
      let config = {
        params: {
          company_id: this.$auth.user.company_id,
        },
      };
      this.loading = true;
      let { data } = await this.$axios.get(this.endpoint, config);
      this.loading = false;

      this.data = data.data.map((e) => ({
        ...e,
        room: e.room.room_no,
      }));

      // <small class="d-block" style="line-height: 1.1">
      //           {{  }} {{ item.start_time }}
      //         </small>
      //         <small class="d-block">
      //           {{ $dateFormat.dmy(item.created_at) }} {{ item.end_time }}
      //         </small>
    },
  },
};
</script>
