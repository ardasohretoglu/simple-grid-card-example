<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Cubans</span>
        <span class="font-weight-light">BEVERAGE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        
      >
       <v-icon  dark>mdi-glass-cocktail</v-icon>
        <span class="mr-2 ml-2">Reservation</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <List/>
    </v-content>
  </v-app>
</template>

<script>
import List from './components/List';

export default {
  name: 'App',
  components: {
    List,
  },
  data: () => ({
    //
  }),
};
</script>
