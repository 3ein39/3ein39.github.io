<template>
    <div class="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <!-- Background Animation -->
        <div class="area">
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <!-- End Background Animation -->

        <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" class="mb-8 h-40 z-10" />
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4 z-10">
            Portfolio is under maintenance
        </h1>
        <p class="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8 z-10">
            Welcome to <span class="font-bold">Hussein Hany</span>'s portfolio! I'm working hard to improve the user
            experience. Stay tuned!
        </p>
        <div class="flex space-x-4 mb-8 z-10">
            <a href="mailto:hussein.hany.cs@gmail.com"
                class="bg-[#8f94fb] bg-opacity-25 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded transition-colors duration-300">
                Contact Me
            </a>
            <a href="https://drive.google.com/file/d/1sAmfjnjIAwaKPi_3oxt3XWzsbTCCxWkQ/view?usp=sharing" target="_blank"
                class="border-2 border-indigo-600 text-indigo-600 font-bold py-3 px-6 rounded dark:text-white dark:border-white hover:bg-indigo-500 hover:text-white transition-colors duration-300">
                Download CV
            </a>
        </div>
        <div class="flex space-x-4 z-10">
            <!-- <a href="https://www.linkedin.com/in/3ein39/" target="_blank"
                class="text-indigo-600 dark:text-white text-2xl hover:text-indigo-800 dark:hover:text-indigo-400 transition-colors duration-300">
                LinkedIn
            </a> -->
            <a href="https://www.linkedin.com/in/3ein39/" target="_blank">
                <IconsLinkedin />
            </a>

        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
/* Start Animations */
@-webkit-keyframes animatetop {
    from {
        top: -300px;
        opacity: 0;
    }

    to {
        top: 0;
        opacity: 1;
    }
}

@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0;
    }

    to {
        top: 0;
        opacity: 1;
    }
}

@-webkit-keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
        opacity: 1;
    }
}

@keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
        opacity: 1;
    }
}

/* End Animations */

/* Start Background Animation */
.area {
    background: #4e54c8;
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}

.circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 96%;
    overflow: hidden;
}

.circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
}

.circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

/* End Background Animation */
</style>
