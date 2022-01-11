<template>
    <div class="wrapper">
        <div class="firebrick"></div>
        <div class="orange"></div>
        <div class="blue">
            <div class="white"></div>
        </div>
        <div class="black"></div>
        <div class="green"></div>
    </div>
    <h2 class="loading-text">Loading...</h2>
</template>

<script lang="ts">
export default {

}
</script>

<style scoped>
.wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    display: flex;
    align-items: end;
    justify-self: center;
}
.firebrick {
    background-color: firebrick;
    width: 200px;
    height: 120px;
    animation: 4s infinite firebrick-green;
}
.orange {
    background-color: orange;
    width: 120px;
    height: 180px;
    animation: 2s infinite orange-black;
}
.blue {
    display: flex;
    background-color: blue;
    width: 200px;
    height: 280px;
    align-items: center;
    animation: 5s infinite blue;    
}
.black {
    background-color: black;
    width: 120px;
    height: 180px;
    animation: 3s infinite orange-black;    
}
.green {
    width: 200px;
    height: 112px;
    border: solid 8px green;
    animation: 6s infinite firebrick-green;    
}
.white {
    height: 60px;
    width: 60px;
    background-color: white;
    margin: 0 auto;
    animation: 5s infinite white;
}
.loading-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 720%);
    font-size: 2rem;
    font-weight: bold;
    color: grey;
    animation: 5s infinite loading;    
}

/* animations */
@keyframes white {
    0% {
        transform: translateY(-90px);
    }
    50% {
        transform: translateY(60px);
        border-radius: 50%;
    }
    100% {
        transform: translateY(-90px);
    }
}
@keyframes firebrick-green {
    0% {
        width: 200px;
    }
    50% {
        width: 80px;
    }
    100% {
        width: 200px;
    }
}
@keyframes orange-black {
    0% {
        height: 180px;
        width: 120px;
    }
    50% {
        height: 220px;
        width: 90px;
        height: 360px;
        transform: translateY(60px);
    }
    100% {
        height: 180px;
        width: 120px;
    }
}
@keyframes blue {
    0% {
        width: 200px;
        height: 280px;
    }
    50% {
        width: 120px;
        height: 200px;
    }
    100% {
        width: 200px;
        height: 280px;
    }
}
@keyframes loading {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes expandLeft {
    0% {
        width: 50px;
        height: 60px;
    }
    50% {
        width: 250px;
        height: 100px;
    }
    70% {
        width: 300px;
        height: 30px;
    }
    100% {
        width: 50px;
        height: 60px;
    }
}
@keyframes bouncer {
    0% {
        width: 80px;
        margin-bottom: 0px;
    }
    50% {
        width: 200px;
        margin-bottom: 580px;
    }
    100% {
        width: 80px;
        margin-bottom: 0px;
    }
}

/* media queries */
@media (max-width: 480px) {
    .wrapper {
        display: block;
        max-width: 460px;
        justify-items: center;
    }
    .firebrick {
        margin: 0 auto;
        height: 60px;
        animation: 2s expandLeft infinite;        
    }
    .orange {
        margin: 0 auto;
        height: 60px;
        animation: 3s expandLeft infinite;        
    }
    .blue {
        margin: 0 auto;        
        height: 60px;
        animation: 6s expandLeft infinite;        
    }
    .black {
        margin: 0 auto;        
        height: 60px;
        animation: 4s expandLeft infinite;        
    }
    .green {
        width: 100px;
        height: 30px;
        position: relative;
        top: 0;
        margin-left: auto;
        margin-right: auto;
        animation: 6s bouncer infinite;
    }
    .white {
        visibility: none;
        display: none;
    }
    .loading-text {
        position: relative;
        top: -120px;
    }
}

</style>