<template>
    <div class="container">

            <div class="navbar">
                <nav>
                    <img src="src/assets/github logo.png" alt="logo" width="30" height="30">
                    <span class="pix"><img src="/src/assets/for_vue.jpg" alt="my pic" width="30" height="30"></span>
                </nav>
            </div>

            <div class="about-section">
            <div class="self-img">
                    <img class="main-image" src="/src/assets/for_vue.jpg" alt="profile picture">
            </div>
            
            <div class="self-text">
                <h3>I'm Hannah Donkor</h3>
                <p>A Frontend developer and a student at AltSchool Africa.</p>
                <p class="exclude">Explore the public repositories of my GitHub Account</p>
                <router-link to="/Repos"><button class="card_btn">Explore Repos</button></router-link>
            </div>

            </div>
                
    
           
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
 .container {
  max-width: 1440px;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  /* padding: 2rem 10rem 0 10rem; */
  background-color: rgb(25, 25, 43);
  color: #f8f7f7;
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

nav img {
    border-radius: 50%;
} 

.about-section{
display: flex;
flex-grow: 1;
}

.main-image{
    max-width: 80%;
    max-height: 80%;
    border-radius: 5rem;

}

.self-img{
    width: 50%;
    height: 100%;
    overflow: hidden;
    /* padding: 2rem 0 2rem 2rem; */
     display: flex;
    align-items: center;
    justify-content: center;
  
  /* margin-top: 6rem; */
}
.self-text{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 3rem;
  /* padding: 0 15px; */
}

.card_btn {
  /* display: block; */
  background-color: rgb(100, 105, 129);
  color: #f8f7f7;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  margin-top: 30px;
  padding: 15px 30px;
  cursor: pointer;
}

.card_btn:hover {
    background-color: rgb(214, 216, 223);
    color: black;
}

.text {
    font-size: 2rem;
    font-family: 'Times New Roman';
    margin-left: 10px;
}

h3 {
    padding-top: 10rem;
    font-size: 40px;
    font-family: 'Montserrat';
    font-weight: 700;
    margin-bottom: 15px;
}

p {
   text-align: left;
   font-size: 20px;
   font-family: 'Montserrat';
   font-weight: 400;
}

.exclude {
    margin-top: 20px;
    font-weight: 600;
}

@media screen and (max-width: 700px) {
    .container{
        padding: 0 2rem 0 2rem;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    nav{
        padding-top: 3rem;
    }

    h3 {
        padding-top: 4rem;
    }

    .about-section{
        flex-direction: column;
        
    }

    .self-img{
        display: none;
    }

    .self-text{
        padding-top: 1rem;
        /* text-align: center; */
        width: 100%;
    }


}



</style>