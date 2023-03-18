<template>
  <div class="content">
    <div class="repositories">
      <div class="repository">
        <p>{{repo.name}}</p>
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
  background-color: rgb(174, 170, 170);
  overflow-y: hidden;
} 

.repository li {
  list-style-type: none;
  text-transform: capitalize;  
} 

.repositories {
  width: 40%;
  height: 30%;
  /* position: relative; */
  top: 50px;
  left: 50px;
  border-radius: 10px; 
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin: 50px 0 0 100px;
  background-color: white;
  /* display: grid; */
  transform-origin: 100% 0; 
  /* margin: 1rem; */
} 

.repository {
  width: calc(80% + 80px);
  height: 50px;
  line-height: 25px;
  padding: 2% 5% 0 5%;
  box-sizing: border-box;
  color: rgb(25, 27, 30);
  /* text-align: justify; */
  /* margin: 0; */
  /* z-index: 20; */
} 

.repository h2 {
  margin-bottom: 15px;
} 

.repository p {
  margin-bottom: 10px;
  font-weight: bold;
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


</style>