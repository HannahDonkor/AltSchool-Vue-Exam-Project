<template>
  <div class="container">
    <h1>Repositories</h1>
    <div class="main_content">
    <div class="fetched_names" v-for="repo in pagedArray" :key="repo.id">
      <div class="card_content">
        <h2>{{repo.name}}</h2>
        </div>
        <div class="card">
          <ul>
            <li><span class="title">visibility:</span> <span class="info">{{repo.visibility}}</span></li>
            <li><span class="title">fork:</span> <span class="info">{{repo.fork}}</span></li>
            <li><span class="title">created at:</span> <span class="info">{{repo.created_at}}</span></li>
          </ul> 

          <div class="button_container">
  
          <router-link :to="'/Repos/'+repo.name"><button class="card_btn">View repository</button></router-link>
          </div>
        </div>
        </div>
      
      
    </div>
      <div class="style_btn">
        <button @click="prev" class="navigate">Prev</button>
        <template v-for="item in this.pagination.totalPages" :key="item"><button class="navigate" @click="() => {setPage(item)}">{{item}}</button></template>
        <button @click="next" class="navigate">Next</button>

      </div>


  </div>
</template>

<script>
export default {
  name: "Repos",
  data() {
    return {
      data: "", 
      pagination: {
        limit: 2,
        currentPage: 1,
        totalPages: null,
        totalrepos: null,
        offset: 0,
  
      }
    };
  },

  mounted() {
    fetch("https://api.github.com/users/HannahDonkor/repos", {
        headers: {
          Accept: "application/json",
        },
      })
         .then((res) => res.json())
         .then((data) => {
          console.log(data)
          this.data = data
          this.pagination.totalrepos = data.length
          this.pagination.totalPages = Math.ceil(data.length / this.pagination.limit)
           
          })

  },

  methods: {
    prev() {
      if (this.pagination.currentPage == 1)
      return
      this.pagination.currentPage--
      this.pagination.offset -= 2
    },
  
    next() {
      if (this.pagination.currentPage == this.pagination.totalPages)
      return
      this.pagination.currentPage++
      this.pagination.offset += 2
    },
    setPage(n) {
      this.pagination.currentPage = n
      this.pagination.offset = (this.pagination.currentPage - 1) * 2
    },

  },

  // watch: {
  //   pagination: {
  //     handler() {

  //     },
  //     deep: true
  //   }

  // }

  computed: {
    pagedArray() {
      return this.data.slice (this.pagination.offset, this.pagination.offset + this.pagination.limit)
    }
  }

  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, rgba(44, 240, 244, 0.949), rgb(62, 21, 247));
} 

.container h1 {
  color: white;
  padding: 2rem 0;
}


.card li {
  list-style-type: none;
  text-transform: capitalize;  
} 
.info {
  color: white;


}

.fetched_names {
  max-width: 30rem;
  width: 50%;
  height: fit-content;
  border-radius: 10px; 
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  background-color: black;
  display: flex;
  flex-direction: column;

} 

.card_content {
  width: 100%;
  height: 50px;
  line-height: 25px;
  padding: 5px;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgb(42, 36, 36);
} 

ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 10px 0;
  gap: 0.5rem;
}

.main_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
}

.card_content h2 {
  word-break: break-all;
  text-transform: capitalize;
  color: white;
  font-size: 15px;
}

.card_btn {
  background-color: gray;
  color: white;
  border-radius: 10px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

}

.card_btn:hover, .navigate:hover {
    background-color: rgb(214, 216, 223);
    color: black;
}

.navigate {
  margin: 0 5px 0 5px;
  padding: 5px 8px;
  border-radius: 15px;
  border: none;
  background-color: rgb(226, 234, 246);
} 

.style_btn{
  padding: 2rem 0; 
}

.title{
  color: pink;
}

.button_container {
  display: flex;
  justify-content: center;
}

</style>
