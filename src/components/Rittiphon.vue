<template>
  <div class="container">
   Dota 2 Heroes
   <br>
    <div v-for="hero in heroes">
      <div v-if="hero.primary_attr === 'str'" style="border:1px solid black;">
    {{hero.localized_name}}
    สาย : {{hero.primary_attr.toUpperCase()}}
    โจมตี : {{hero.attack_type}}
    <img :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_sb.png`">
    </div>
     <div v-if="hero.primary_attr === 'agi'">
    {{hero.localized_name}}
    สาย : {{hero.primary_attr.toUpperCase()}}
    โจมตี : {{hero.attack_type}}
    <img :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_sb.png`">
    </div>
     <div v-if="hero.primary_attr === 'int'">
    {{hero.localized_name}}
    สาย : {{hero.primary_attr.toUpperCase()}}
    โจมตี : {{hero.attack_type}}
    <img :src="`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substring(14)}_sb.png`">
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      query: '',
      heroes: [],
      heroAgi: [],
      heroStr: [],
      heroInt: []
    }
  },
  created () {
    this.getDataGames()
  },
  methods: {
    getDataGames () {
      axios.get('https://api.opendota.com/api/heroes').then((response) => {
        this.heroes = response.data
      })
    }
  }
}
</script>

<style>
 .input-text {
     font-size:20px;
     border-radius:3px;
     padding: 10px;
 }
</style>
