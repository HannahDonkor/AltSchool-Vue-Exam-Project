<template>
  <div class="content">
    <div class="wrapper">
    <div class="repositories">
      <div class="repository">
        <h2>{{repo.name}}</h2>
        </div>
        <div class="card">
          <ul>
            <li>created at: {{repo.created_at}}</li>
            <li>visibility: {{repo.visibility}}</li>
            <li>fork: {{repo.fork}}</li>
          </ul>
          <a :href="repo.html_url" target="blank"><button class="git_btn">link to Github repo</button></a>
        </div>
      
      
    </div>
    </div>
  </div>

  
</template>

<script>
export default {
    props: ['repoName'],
    data() {
    return {
        repo: {}
    }
  },
    mounted() {
    fetch(`https://api.github.com/repos/HannahDonkor/${this.repoName}`, {
        headers: {
          Accept: "application/json",
        },
      })
         .then((res) => res.json())
         .then((data) => {this.repo = data})
          
    
  },

   methods: {
    setData(data){
            this.data = data.find((item) => {
            return item.id == this.id})

    }
   }

  

};



</script>

<style scoped>

.content {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, var(--cyan-main), var(--blue));
  background-attachment: fixed;
  /* overflow-y: hidden; */
  -webkit-tap-highlight-color: transparent;
} 

.repository li {
  list-style-type: none;
  text-transform: capitalize;  
} 

.repositories {
  max-width: 30rem;
  width: 50%;
  height: fit-content;
  border-radius: 10px; 
  display: flex;
  flex-direction: column;
  background-color: var(--white-alpha-25);
  border: 1px solid var(--white-alpha-40);
  backdrop-filter: var(--backdrop-filter-blur);
 
} 

.repository {
  width: 100%;
  height: 50px;
  line-height: 25px;
  padding: 5px;
  display: flex;
  border: 2px solid var(--white-alpha-40);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex-direction: column;
  align-items: center;
  /* background-color: var(--white-alpha-25); */
  color: rgb(25, 27, 30);
  
} 

ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.repository h2 {
  word-break: break-all;
  text-transform: capitalize;
  font-size: 15px;
} 


.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 10px 0;
  gap: 0.5rem;
}

.card li {
  list-style-type: none;
  text-transform: capitalize;  
}


.git_btn {
  background-color: gray;
  color: white;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  padding: 6px 12px;
  cursor: pointer;
} 

.git_btn:hover {
    background-color: rgb(214, 216, 223);
    color: black;
} 

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
} 

</style>