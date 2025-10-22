<script setup>


</script>

<template>
    <div class="history">
        <h2>Historique</h2>
        <ul>
            <li>Aucun historique disponible.</li>
            <li class="element">
                <div>Paris</div>
                <div>15°C</div>
                <div>50%</div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.history {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e0e0e0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.element {
  display: flex;
  gap: 20px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
.element:last-child {
  border-bottom: none;
}
</style>