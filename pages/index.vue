<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-right">
        <v-icon color="black" @click="room_list">mdi-reload</v-icon>
      </v-col>
      <v-col cols="6" v-for="(bigCard, index) in bigCards" :key="index">
        <v-card
          class="pa-4"
          :style="`border-radius: 10px; border: 1px solid ${bigCard.color}`"
          outlined
        >
          <v-row align="center" no-gutters>
            <v-col cols="6">
              <v-icon :color="bigCard.color" size="30">{{
                bigCard.icon
              }}</v-icon>
            </v-col>
            <v-col class="text-right" cols="6">
              <div>
                <strong>{{ bigCard.value }}</strong
                >/<small>{{ bigCard.sub_value }}</small>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <!-- <v-col cols="6">
        <v-card
          class="pa-4"
          style="border-radius: 10px; border: 1px solid #e97171"
          outlined
        >
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
      </v-col> -->
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
            <WidgetsViewTempFile
              :label="``"
              :key="item.before_attachment"
              icon="mdi-eye-outline"
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
            <RoomCleaningSingle :item="item" />
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
    cards: [],
    bigCards: [],
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
    this.room_list();
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
        date: this.$dateFormat.dmy(e.created_at),
      }));
    },
    handleSelectedRoom(e) {
      this.selectedRoom = e;
    },
    handleFileSelection(e, name) {
      this.FormData = {
        ...this.FormData,
        start_time: this.isInitialState
          ? this.formatTime(new Date())
          : this.FormData.start_time,
        ...this.selectedRoom,
        before_attachment: e,
        before_attachment_name: name,
      };
      this.isInitialState = false;
    },

    handleVoiceNote(e, name) {
      this.FormData = {
        ...this.FormData,
        voice_note: e,
        voice_note_name: name,
      };
    },

    formatTime(date) {
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      return `${hours}:${minutes}:${seconds}`;
    },
    start() {
      if (!this.selectedRoom) {
        alert(`Room not Selected`);
        return;
      }
      this.FormData = {
        ...this.FormData,
        start_time: this.isInitialState
          ? this.formatTime(new Date())
          : this.FormData.start_time,
        end_time: "00:00:00", // Reset end time when starting
      };

      this.isStart = false;
      this.isStop = true;
      this.isInitialState = false; // Flag that initial state is done
    },
    setStatus(status) {
      this.FormData = {
        ...this.FormData,
        start_time: this.isInitialState
          ? this.formatTime(new Date())
          : this.FormData.start_time,
        ...this.selectedRoom,
        status,
      };
    },
    async stop() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      this.FormData = {
        ...this.FormData,
        end_time: `${hours}:${minutes}:${seconds}`,

        total_time: this.$utils.calculateTotalTime(
          this.FormData.start_time,
          `${hours}:${minutes}:${seconds}`
        ),
        cleaned_by_user_id: this.$auth.user.id,
        company_id: this.$auth.user.company_id,
        room_id: this.selectedRoom.id,
      };

      console.log(this.FormData);

      // return;

      await this.$axios.post(`room-cleaning`, this.FormData);

      this.isStop = false;
      this.isStart = true;
      this.isInitialState = true;
      this.room_list();
    },
    setTabId(e) {
      if (!this.isInitialState) {
        return;
      }
      this.tabId = e;
      this.FormData = {
        start_time: "00:00:00",
        end_time: "00:00:00",
        status: "Dirty",
      };
      this.selectedRoom = null;
      this.isInitialState = true;
      this.isStop = false;
      this.isStart = true;
    },
    async room_list() {
      let payload = {
        params: {
          company_id: this.$auth.user && this.$auth.user.company.id,
          check_in: new Date().toJSON().slice(0, 10),
          filter_date: this.filterDate,
        },
      };
      this.$axios.get(`room_list_grid`, payload).then(async ({ data }) => {
        if (!data.status) {
          this.alert("Failure!", data.data, "error");
          return false;
        }

        let uniqueRoomNumbers = [
          ...new Set([
            ...data.bookedRooms.map((e) => e.room_no),
            ...data.expectCheckOut.map((e) => e.room_no),
            ...data.checkIn.map((e) => e.room_no),
            ...data.blockedRooms.map((e) => e.room_no),
            ...data.dirtyRoomsList.map((e) => e.room_no),
          ]),
        ];

        let vacantRooms = data.allRooms.filter(
          (e) => !uniqueRoomNumbers.includes(e.room_no)
        );

        let others = [
          ...data.checkIn.map((e) => ({
            id: e.id,
            room_no: e.room_no,
            room_type: e.room_type.name,
            is_cleaned: e.is_cleaned.length,
          })),
          ...vacantRooms.map((e) => ({
            id: e.id,
            room_no: e.room_no,
            room_type: e.room_type.name,
            is_cleaned: e.is_cleaned.length,
          })),
          ...data.blockedRooms.map((e) => ({
            id: e.id,
            room_no: e.room_no,
            room_type: e.room_type.name,
            is_cleaned: e.is_cleaned.length,
          })),
        ];

        this.bigCards = [
          {
            icon: `mdi-emoticon-happy-outline`,
            color: "#4caf50",
            bgColor: "#4caf50",
            label: "",
            value: others.filter((e) => e.is_cleaned).length,
            sub_value: this.getSubValue(
              others.length,
              await this.getRoomStatus(others.map((e) => e.id))
            ),
          },
          {
            icon: `mdi-emoticon-sad-outline`,
            color: "#e97171",
            bgColor: "#e97171",
            label: "",
            value: data.dirtyRoomsList
              .map((e) => ({
                id: e.id,
                room_no: e.room_no,
                room_type: e.room_type.name,
                is_cleaned: e.is_cleaned.length,
                can_change_status: true,
              }))
              .filter((e) => e.is_cleaned).length,
            sub_value: this.getSubValue(
              data.dirtyRoomsList.length,
              await this.getRoomStatus(data.dirtyRoomsList.map((e) => e.id))
            ),
          },
        ];
      });
    },
    getSubValue(length, total) {
      return length - total < 0 ? "0" : (length - total).toString();
    },
    async getRoomStatus(room_ids) {
      let config = {
        params: {
          room_ids: room_ids,
          date: new Date().toISOString().split("T")[0],
          company_id: this.$auth.user.company_id,
        },
      };
      let { data } = await this.$axios.get(`room-cleaning`, config);

      return data.data.length;
    },
  },
};
</script>
