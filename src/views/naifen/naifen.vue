<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-02 16:39:30
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-03 09:40:01
 -->
<template>
    <div class="naifen">
        <!-- 奶粉导航栏 -->
        <van-nav-bar title="奶粉榜" left-arrow @click-left="add"></van-nav-bar>
        <div class="naiban">奶粉板块主图片</div>
        <ul class="naibox">
            <!-- v-for循环 -->
            <li class="naiboxli">
                <van-card
                desc="8折"
                price="88.00"
                origin-price="188.00"
                title="器好龙常题力声将图变论选保集教种克九"
                thumb="http://dummyimage.com/188x188"
                >
                
                </van-card>
                <span class="top1"></span>
            </li>
            <li>
                <van-card
                desc="8折"
                price="88.00"
                origin-price="188.00"
                title="器好龙常题力声将图变论选保集教种克九"
                thumb="http://dummyimage.com/188x188"
                >
                </van-card>
                <span class="top2"></span>
            </li>
            <li>
                <van-card
                desc="8折"
                price="88.00"
                origin-price="188.00"
                title="器好龙常题力声将图变论选保集教种克九"
                thumb="http://dummyimage.com/188x188"
                >                
                </van-card>
                <span class="top3"></span>
            </li>
            <li>
                <van-card
                desc="8折"
                price="88.00"
                origin-price="188.00"
                title="器好龙常题力声将图变论选保集教种克九"
                thumb="http://dummyimage.com/188x188"
                >
                
                </van-card>
            </li>
            <li>
                <van-card
                desc="8折"
                price="88.00"
                origin-price="188.00"
                title="器好龙常题力声将图变论选保集教种克九"
                thumb="http://dummyimage.com/188x188"
                >
                
                </van-card>
            </li>
            <li>
                <van-card
                desc="8折"
                price="88.00"
                origin-price="188.00"
                title="器好龙常题力声将图变论选保集教种克九"
                thumb="http://dummyimage.com/188x188"
                >
                
                </van-card>
            </li>
            <li>
                <van-card
                desc="8折"
                price="88.00"
                origin-price="188.00"
                title="器好龙常题力声将图变论选保集教种克九"
                thumb="http://dummyimage.com/188x188"
                >
                
                </van-card>
            </li>
        </ul>
        </div>
</template>
<script>
export default {
    methods:{
        add(){
            this.$router.go("-1")
        }
    }
}
</script>
<style scoped>

.van-nav-bar__arrow {
  color: #333333;
}
.van-icon-arrow-left:before {
  content: "\F008";
  font-weight: 600;
}
.van-nav-bar__title {
  font-size: 18px;
  font-weight: 600;
}
.naiban{
    width: 100%;
    height: 126px;
    background: pink;
}
.naibox{
    width: 90%;
    margin: 0 auto;
    margin-top: 5%;
}
.van-card{
    padding: 13px 10px;
}
.van-card__content{
    text-align: left;
}
.van-card__title{
    -webkit-line-clamp: 1;
    font-size: 14px;
}
.van-card__price{
    font-size: 19px;
}
.van-image{
    border-radius: 5px;
}
.van-card__bottom{
    position: absolute;
    bottom: 0;
}
.van-card__desc{
    display: inline-block;
    width: 12%;
    border:1px solid red; 
    color:red;
    text-align: center;
    border-radius: 4px;
    margin: 4% 0 0 7%;
}
.naibox li{
    margin: 10px 0;
    position: relative;
    border-radius: 5px;
    padding: 0 15px;
    background: #fafafa;
}
.top1{
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAABb0lEQVRoge3YP0tCcRTG8cefIhgktBRRS1MQtPUCbGpua2lraO1t9Ap8A7k2BwVHWhra2h0LIQmChiDvbajEjnb/eM+5R+N8wcXh3OczKGLl/e44hmL1fkfzPILq9RJygHUOsM4B1i08oKZ1OFo9RLR2gI/d9ui9peum+HNUANHmCaKVPY3TE8kCqk0Mt84QN9ZFzyYlBogb24g2jkodDwh+iOPlnV/jK289qdOJqXwLhZd7VHvnGqcnEv8Qh+dbhKcL6bN/JgoIj5cIgyvJk6mJAcLgBhi+Sp3L/lyxSwbjgX/wU8IB1jnAOgdY5wDrHGDdwgPU/pUAgNrDqf+9npYDrHOAdZqALoD971dX6yEagJ/hrXq/QwAIQAtKEEnAaDi+RvMIChAJQNpwHkEQUgSQdziPIACZBVB0OI9QAJIHID2cR5gBkgWgPZxHyAFJApQ9nEfIAJkGsB7OIyRAxgHzNpxHmAIJmP/hPMIY5BMMKFmxzQQy9gAAAABJRU5ErkJggg==);
    background-size:100%; 
    display: inline-block;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    left: 6%;
}
.top2{
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAACk0lEQVRoge2Y3W/SUBiHf+vHYOWjgAWH6DIXNZqYeOO1mf95WUy8MtmWODOBbCBlwCqfW4MDqhc45ByQjfUthaRPQsg5wPv+nuaUc2Dj4PD0N1zk3Ki6WR6Cq9WXgC/gNb6A1/gCXrP2AhJ1waQaQlQJQgnI2JQlvHmWRPvKQvmyiVKtQd2OTiAU3MROKg4lIDPzSjAAJRhAWovjeTqJz18LuOkPqNrSLCFJFPAyo02F59FiEXx494qi5RgSgYymQhTYUmbnGpWfbZitLjOvhhW8yKQo2gIgEoiHt5hxzjBRrDVx0egie3iKkzODeT0Vj1C0BUAgEJAl5urf9AfoWD3mPYXKJTPWYlGnbcc4vomHto2cYTJjHv6mlSXRadsxjgUGQ3vqivNsJ1RmbPV+OW07Zikb2du9DDOumC2y2q4LvH+9CzWsjMf9wRDfihdk9cl34kmSagg7qTgzd3JmrN5GNotERJkKny/XkDfqpH1cERgdK2LMXLFq4ij/g7wXuYAkCtjbTjB7Q/vKwnGhTN0KALHA6EyUxKb879bqD4Y4OPpOuu4nIRXIaCpzoBvaNj4duxceIBR4qqnQoiFmrlRvodG5pmoxExKBpBrCY+6AVqo30ehaFOXn4ngfCMjS1Nfl0LYhiQLSiQi2pI2Zn6PazEgEeERBwJNHo/PP7TMPlcDa/6hfewHHS6hj9fAl9/9Nyv97/Q58Aa/xBbzGTYEsgI9/H1m3mrghcBt8/9yo6gB0APtwSYRSYBwco9A8OlwQoRC4KziPDkIRJwKLBufRQSDyEAGnwXl0OBBZRIA6OI+OB4jcR8Dt4Dw6FhCZJ7Ds4Dw67iEyS8Dr4Dw65ohMCqxacB4dM0QErH5wHh0TIn8AwP3L1LJ6628AAAAASUVORK5CYII=);
    background-size: 100%; 
    display: inline-block;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    left: 6%;
}
.top3{
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAADJUlEQVRoge2Y/0sTcRjH341uNxU35pybuGXTFTopRgiaFC2SQAgqf60/oD+jf6Ifg36VIImIIBROGohhNTSXmkPFTd3muXbqch1WP9jO3eeGX3bPOYO9YD88zx2f53ntPnefz925yLOnf2Agc4mUkcPDZOjop0BVoNJUBSpNVaDS/PcC56kHtAW6UdvcCr7BCa6uHq50ElJqDavRKaTmp6nL0QlYmjxw37oHrq5elbc6XbA6XfB0BbG+MIupN0P4ldumKkszhTibAy39g5rmWdz+DvQ+fkJRUoFEoOFqL0xmXpWTYlGIkXGI8WVV3up0wdcToigLgGgKWdsDqjgxOozcygKA/c1c8MEjeLqCynHHxXYsTggUpfVfgVqvXxXnMxtK8wWi71+rYre/Q29ZBd1XIJ9aRWJ0WIl/53c151DetCy6BfbyOc0/zmL3tqliKZ3UW1bB8IXM7m3DlYFBVW59foZsfPKFrECt14+WOw9xiclL6SSWPn4gq2OYQCnE+DI+vXxx9hay4+LwtCJw9z7pmIYJyFIGYmQc6wuzqrynK4jLoQGyOsYJZEVsRsKYHHqOmZG3qmO+7j6yOqcyhRYnBNWjk+Mtmkdruei+iTmbA5zVrsSylIGcFTXnycwCx9XU6S0NgECg3tcJR/C6Eme+fcHGxIjmPI636C1VEt1TKLe6pIpt7QFYmjyqnK8nBKvTpcr9iC/qLQ2A4ArspuKQd7aUdwGTmUdL/yC2V2KQt7LovmHXbN7iMxGytYBkIRM/h+G+efBoNJl5zRa7gJzfxfewdoqVC4nAVuwrTLwFjcE+zYtNMVI6iel3r7CzQbeZI9tKZKOT2I5FYeu8hprmC7DYG2Ey8/gpZZFNrUFcipG9xBRDuhfay+ewGQkDkYNc9fP6EVQFKk1VoNIYKTAG4Pa/35hRRYwQKDQemkukBAACgBAMEqEUUBrHftMsAgwQoRA4qnEWAYQiegRO2jiLAAKRcgT0Ns4iQIfISQSoG2cRUIbIcQSMbpxFwAlEDhM47cZZBBxDpJRApRtnEXCISLHAWWucRUAJERPOfuMsAopE/gIxPQCC4gncnAAAAABJRU5ErkJggg==);
    background-size:100%; 
    display: inline-block;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    left: 6%;
}
</style>