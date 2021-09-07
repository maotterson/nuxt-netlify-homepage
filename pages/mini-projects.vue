<template>
  <div>
    <EventModal 
      v-if="calendar.selectedOpen" 
      :selectedEvent="calendar.selectedEvent"
      @closemodal="closeModal">
    </EventModal>

    <div class="dark:prose-dark prose md:prose-xl mt-8 md:mt-0">
      <div class="mb-4">
        <h1>Mini-Projects</h1>
        <h3>Small projects/addons to my portfolio page</h3>
      </div>

      <h2>Strava Activity Calendar</h2>
      <h4 class="font-bold">(September 2021)</h4>
      <p>I created a calendar displaying all of monthly activities logged to Strava.</p>
      <div class="flex-row flex justify-center">
        <div class="flex flex-row items-center">
          <button
            class="p-2 rounded border-2"
            @click="previousMonth"
          >
            &lt;
          </button>
          <div class="text-2xl px-4 font-bold" v-if="$refs.calendar">
          {{ $refs.calendar.title }}
          </div>
          <button
            class="p-2 rounded border-2"
            @click="nextMonth"
          >
            &gt;	
          </button>
        </div>
      </div>
      <v-sheet height="600" class="min-w-full">
        <v-calendar
          ref="calendar"
          v-model="calendar.value"
          :weekdays="calendar.weekday"
          :type="calendar.type"
          :events="calendar.events"
          :event-overlap-mode="calendar.mode"
          :event-overlap-threshold="30"
          :event-color="getEventColor"
          @click:date="viewDay"
          @click:event="showEvent"
          @change="getEvents"
        >
        </v-calendar>
      </v-sheet>

    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const calendar = {
      type: 'month',
      mode: 'stack',
      weekday: [0, 1, 2, 3, 4, 5, 6],
      events: [],
      value: '',
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
    }

    //commented ajax for sample data
    const activityEndpoint = "https://v2.maotterson.com/.netlify/functions/strava-test"
    const res = await $axios.$get(activityEndpoint)
    const response = res.data
    //const response = [{"type":"Walk","info":{"distance":4026.2,"time":2979,"date":"2021-08-26T21:10:05Z"}},{"type":"WeightTraining","info":{"category":"Lower","time":3601,"date":"2021-08-25T22:01:13Z"}},{"type":"Walk","info":{"distance":4119.4,"time":3378,"date":"2021-08-25T20:55:49Z"}},{"type":"Walk","info":{"distance":4044.4,"time":3239,"date":"2021-08-24T20:36:53Z"}},{"type":"Workout","info":{"category":"Sprints @ hills","time":1442,"date":"2021-08-23T22:04:46Z"}},{"type":"Walk","info":{"distance":4038.3,"time":3165,"date":"2021-08-23T20:41:44Z"}},{"type":"Walk","info":{"distance":3993.5,"time":3145,"date":"2021-08-22T21:15:47Z"}},{"type":"Walk","info":{"distance":4039,"time":3389,"date":"2021-08-21T20:39:26Z"}},{"type":"WeightTraining","info":{"category":"Upper","time":3665,"date":"2021-08-21T20:17:06Z"}},{"type":"Workout","info":{"category":"Sprints @ fields","time":2470,"date":"2021-08-20T21:42:49Z"}},{"type":"Walk","info":{"distance":4033.3,"time":3280,"date":"2021-08-20T20:43:41Z"}},{"type":"Walk","info":{"distance":4059.9,"time":3304,"date":"2021-08-19T20:17:53Z"}},{"type":"WeightTraining","info":{"category":"Lower","time":2400,"date":"2021-08-18T23:00:57Z"}},{"type":"Walk","info":{"distance":2723.3,"time":2228,"date":"2021-08-18T20:48:15Z"}},{"type":"Walk","info":{"distance":4088.8,"time":3363,"date":"2021-08-17T20:48:51Z"}},{"type":"Walk","info":{"distance":2766.1,"time":2100,"date":"2021-08-16T20:41:35Z"}},{"type":"WeightTraining","info":{"category":"Upper","time":3600,"date":"2021-08-15T21:05:40Z"}},{"type":"Walk","info":{"distance":4033.2,"time":3278,"date":"2021-08-15T21:00:46Z"}},{"type":"Walk","info":{"distance":4040,"time":3221,"date":"2021-08-14T20:08:25Z"}},{"type":"WeightTraining","info":{"category":"Lower","time":3600,"date":"2021-08-13T22:35:03Z"}},{"type":"Walk","info":{"distance":3985.8,"time":3224,"date":"2021-08-13T21:16:07Z"}},{"type":"Walk","info":{"distance":3852.4,"time":3022,"date":"2021-08-12T20:55:29Z"}},{"type":"Walk","info":{"distance":4055.3,"time":2991,"date":"2021-08-11T20:23:14Z"}},{"type":"Workout","info":{"category":"Sprints @ hills","time":1800,"date":"2021-08-10T22:23:28Z"}},{"type":"Walk","info":{"distance":2777.7,"time":2231,"date":"2021-08-10T21:11:33Z"}},{"type":"Walk","info":{"distance":4165.4,"time":3475,"date":"2021-08-09T21:03:24Z"}},{"type":"Workout","info":{"category":"Sprints @ field","time":2400,"date":"2021-08-08T22:20:56Z"}},{"type":"Walk","info":{"distance":2772.9,"time":2171,"date":"2021-08-08T21:01:36Z"}},{"type":"Walk","info":{"distance":2769.1,"time":2359,"date":"2021-08-07T20:45:40Z"}},{"type":"WeightTraining","info":{"category":"Upper","time":4500,"date":"2021-08-07T19:40:16Z"}}]
    return {
      calendar,
      response
    }
  },
  methods: {
    closeModal(){
      this.calendar.selectedOpen = false
    },
    getEvents ({ start, end }) {
      const events = []

      for(const activity of this.response){
        const event = {
          name: this.setActivityName(activity),
          start: this.setActivityTime(activity),
          color: this.setColor(activity.type),
          activityInfo: activity
        }

        events.push(event)
      }
      this.calendar.events = events
    },
    getEventColor(event) {
      return event.color
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    setColor(type){
      if(type=="Walk"){
        return "bg-blue-300"
      }
      else if(type=="WeightTraining"){
        return "bg-red-300"
      }
      else if(type=="Workout"||type=="Run"){
        return "bg-yellow-300"
      }
    },
    setActivityName(activity){
      if(activity.type=="Walk"){
        return "Walk"
      }
      else if(activity.type=="WeightTraining"){
        return activity.info.category
      }
      else if(activity.type=="Workout"||activity.type=="Run"){
        return activity.info.category
      }
    },
    setActivityTime(activity){
      const splitTime = activity.info.date.split('T')

      if(activity.type=="Walk"){
        return splitTime[0] + " " + splitTime[1].slice(0,-4)
      }
      else if(activity.type=="WeightTraining"){
        return splitTime[0]
      }
      else if(activity.type=="Workout"||activity.type=="Run"){
        return splitTime[0]
      }
    },
    viewDay({ date }){

    },
    resetCalendar(){
      this.calendar.value=''
      console.log("k")
    },
    previousMonth(){
      this.$refs.calendar.prev()
      console.log("p")
    },
    nextMonth(){
      this.$refs.calendar.next()
      console.log("n")
    },
    showEvent({ nativeEvent, event }){
      const open = () => {
        this.calendar.selectedEvent = event
        this.calendar.selectedElement = nativeEvent.target
        requestAnimationFrame(() => requestAnimationFrame(() => this.calendar.selectedOpen = true))
      }

      if (this.calendar.selectedOpen) {
        this.calendar.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    }
  },
}
</script>

<style>
</style>
