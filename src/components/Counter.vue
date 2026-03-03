
<script>
export default{
    data: () => ({
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0

    })
};
</script>
<template>
    <section id="countdown" class="container-xl py-5">

        <div class="countdown-wrapper text-center">

            <!-- Numbers Row -->
            <div class="countdown-time">
            <span>{{ displayDays }}</span>
            <span class="colon">:</span>
            <span>{{ displayHours }}</span>
            <span class="colon">:</span>
            <span>{{ displayMinutes }}</span>
            <span class="colon">:</span>
            <span>{{ displaySeconds }}</span>
            </div>

            <!-- Labels Row -->
            <div class="countdown-labels">
            <span>Days</span>
            <span></span>
            <span>Hours</span>
            <span></span>
            <span>Minutes</span>
            <span></span>
            <span>Seconds</span>
            </div>

        </div>
    </section>

</template>
<style lang="scss" scoped>
.countdown-wrapper {
  background-color: $bgColorDark;
  padding: 40px;
  border-bottom: 3px solid $primary;
}

.countdown-time {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.colon {
  color: $primary;
}

.countdown-labels {
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: center;
  gap: 15px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.7);
}
</style>