<template>
  <div class="hello">
    <v-row>
    <v-col cols="12" >
      <v-card>
        <v-container >
          <v-row>
            <v-col
              v-for="item in drinks"
              :key="item.idDrink"
              class="d-flex child-flex"
              cols="12"
              md="4" sm="6"
            >
               <v-card
                  class="mx-auto"
                  
                >
                  <v-img
                    :src="item.strDrinkThumb"
                    height="200px"
                  ></v-img>

                  <v-card-title>
                    {{item.strDrink}}
                  </v-card-title>

                  <v-card-subtitle>
                     {{100 + Math.floor(Math.random() * 50)}} $
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn text>Share</v-btn>

                    <v-btn
                      color="purple"
                      text
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                      icon
                      @click="openDescription(item)"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="idBearer == item.idDrink">
                      <v-divider></v-divider>

                      <v-card-text>
                        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data:  () => {
    return {
      drinks: [],
      show:false,
      idBearer : ''
    }
  },
  methods: {
    openDescription (item) {
      if(this.idBearer != item.idDrink){
        this.idBearer = item.idDrink;
      }else{
        this.idBearer = '';
      }
      
    }
  },


  mounted(){

    this.$http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail').then(response => {
    //Object.assign(this.drinks , response.body.drinks)
    this.drinks = response.body.drinks
    //console.log(response.body.drinks);
  }, response => {
      this.drinks = response.body.drinks
  });
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
