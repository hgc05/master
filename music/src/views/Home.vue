<template>
 
        <div class="boss">
          <!-- 导航栏 -->
         <div class="Navigation_bar">
             <div @click="my()">
                 <span class="iconfont icongengduo"></span>
             </div>
             <div class="Selection">我的</div>
             <div>发现</div>
             <div>云村</div>
             <div>视频</div>
             <div>
                 <span class="iconfont iconsoushuo"></span>
             </div>
         </div>
         <!-- 主体内容 -->
         <div class="theme"  @click="out()">
             <!-- 轮播图 -->
            <div class="Rotation_chart">
                <div id="qw">
                    <img class="img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1872864347,3052829122&fm=26&gp=0.jpg">
               </div>
            </div>
            <!-- 导航按钮 -->
            <div class="Title_Bar">
                  <div class="bar_s">
                      <div class="s_ican"><span class="iconfont iconrili"><div class="zz">1</div></span></div>
                      <div class="bar_s_two">每日推荐</div>
                  </div>
                  <div class="bar_s">
                    <div class="s_ican"><span class="iconfont icongedan"></span></div>
                    <div class="bar_s_two">歌单</div>
                </div>
                <div class="bar_s">
                    <div class="s_ican"><span class="iconfont iconpaihangbangxuanzhong"></span></div>
                    <div class="bar_s_two">排行榜</div>
                </div>
                <div class="bar_s">
                    <div class="s_ican"><span class="iconfont iconwodediantai"></span></div>
                    <div class="bar_s_two">电台</div>
                </div>
                <div class="bar_s">
                    <div class="s_ican"><span class="iconfont iconzhibojian"></span></div>
                    <div class="bar_s_two">直播</div>
                </div>
            </div>
           <!--  主页歌单 -->
           <div class="song_sheet">
               <div class="song_sheet_s">
                   <span>推荐歌单</span>
                   <span>查看更多</span>
               </div>
               <div class="song_sheet_x">
                   <div class="gx">
                       <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=862280118,495325135&fm=11&gp=0.jpg">
                       <div>我的的哦的上坡附可都是饭都快低价颇多见覅好欧冠是国家级哦好偶根据房管局</div>
                   </div>
                   <div class="gx">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=862280118,495325135&fm=11&gp=0.jpg">
                    <div>我的的哦的上坡附可都是饭都快低价颇多见覅好欧冠是国家级哦好偶根据房管局</div>
                </div>
                <div class="gx">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=862280118,495325135&fm=11&gp=0.jpg">
                    <div>我的的哦的上坡附可都是饭都快低价颇多见覅好欧冠是国家级哦好偶根据房管局</div>
                </div>
                <div class="gx">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=862280118,495325135&fm=11&gp=0.jpg">
                    <div>我的的哦的上坡附可都是饭都快低价颇多见覅好欧冠是国家级哦好偶根据房管局</div>
                </div>
                <div class="gx">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=862280118,495325135&fm=11&gp=0.jpg">
                    <div>我的的哦的上坡附可都是饭都快低价颇多见覅好欧冠是国家级哦好偶根据房管局</div>
                </div>
                <div class="gx">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=862280118,495325135&fm=11&gp=0.jpg">
                    <div>我的的哦的上坡附可都是饭都快低价颇多见覅好欧冠是国家级哦好偶根据房管局</div>
                </div>
               </div>
           </div>
         </div>
         <!--  底部播放栏 -->
         <div class="Playback_bar"> 
             <div>
                 <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3704203295,2202649940&fm=26&gp=0.jpg">
             </div>
             <div class="music_name">2</div>
             <div class="play">
                 <span class="iconfont iconbofang"></span>
             </div>
             <div>
                 <span class="iconfont iconbofangliebiao"></span>
             </div>
         </div>

          <!-- 我的 点击显示 -->
          <div id="pp">
              <!-- 头像栏-->
               <div class="pp_boss">
                   <div class="Head_portrait">
                       <div class="photo_">
                           <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4014597097,233886578&fm=26&gp=0.jpg">
                           <div>南傻傻</div>
                       </div>                    
                       <div class="Sign_in">签到</div>
                   </div>
                   <!-- 个人消息 栏 -->
                   <div class="personal">
                       <div class="personal_s">
                           <span class="iconfont iconwodexiaoxi"></span>
                           <span>我的信息</span>
                       </div>
                       <div class="personal_s">
                        <span class="iconfont iconwodehaoyou"></span>
                        <span>我的好友</span>
                    </div>
                    <div class="personal_s">
                        <span class="iconfont icongerenzhuye"></span>
                        <span>个人主页</span>
                    </div>
                    <div class="personal_s">
                        <span class="iconfont icongexingzhuangban"></span>
                        <span>个性装扮</span>
                    </div>
                   </div>
                   <!-- 其他 -->
                   <div class="qita">
                       <div class="qita_s">
                           <span class="iconfont icondengpao"></span>
                           <span>创作者中心</span>
                       </div>
                       <div class="qita_t">
                        <span class="iconfont icondengpao"></span>
                        <span>听歌识曲</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>演出</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>商城</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>附近的人</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>口袋彩铃</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>我的订单</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>定时停止播放</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>扫一扫</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>音乐闹钟</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>音乐云盘</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>在线听歌免流量</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>优惠券</span>
                        </div>
                        <div class="qita_t">
                            <span class="iconfont icondengpao"></span>
                            <span>青少年模式</span>
                        </div>
                   </div>
               </div>
               <div class="pp_bottom">
                   <div>
                       <span class="iconfont iconyejian"></span>
                       <span>夜间模式</span>
                   </div>
                   <div>
                    <span class="iconfont iconhexagon"></span>
                    <span>设置</span>
                </div>
                <div>
                    <span class="iconfont icontuichu2"></span>
                    <span>退出</span>
                </div>
               </div>
          </div>
    </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{
            list:[]
        }
    },
    methods:{
       my(){
           var q=document.getElementById('pp');
           var i =-84;
       var time= setInterval(function(){
             i++
             q.style.left=i+'%' 
             if(i==0){
                 clearInterval(time);
             }  
         },0);
       },
       out(){
           var q=document.getElementById('pp');
        q.style.left='-84%' 
       }
    },
    mounted(){
        
    }  
}
</script>

<style scoped>
    body{
            max-width: 640px;
            min-width: 320px;
        }
        *{
            padding: 0;
            margin: 0;
        }
        .boss{
            padding: 0 10px;
            display: flex;
            justify-content: center;
            box-sizing: border-box;
        }
        .Navigation_bar{
            width: 100%;
            height: 40px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            top: 0; 
        }
        .Navigation_bar div{
            text-align: center;
        }
        .Selection{
             color:firebrick;
             font-weight: bold;
        }
       /*  主题内容 */
        .theme{
            height: 600px;
            margin-top: 40px;
            width: 100%; 
            overflow-y: auto;
            padding-bottom: 30px;
            box-sizing: border-box;
        }
        .theme::-webkit-scrollbar{
            display: none;
        }
        .Rotation_chart{
            position: relative;
            
            height: 200px;
            width: 100%;
            overflow: hidden;
            
        }
        #qw{
          
            display: flex;
            flex-direction: row;
        }
        .Rotation_chart img{
            height: 200px;
            width: 100%;
        }
        /* 导航按钮 */
        .Title_Bar{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 20px;
        }
        .bar_s{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .s_ican{
            width: 50px;
            height: 50px;
            background-color: fuchsia;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .s_ican span{
            font-size: 32px;
            color: white;
            position: relative;
        }
        .zz{
            position: absolute;
            top: 40%;
            left: 40%;
            color: white;
            font-size: 12px;
        }
        .bar_s_two{
            font-size: 12px;
            color: gray;    
        }
        /* 主页歌单 */
        .song_sheet{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
        }
        .song_sheet_s{
            display: flex;
            justify-content: space-between;
        }
        .song_sheet_x{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .gx{
            margin-top: 8px;
            width: 30%;
            display: flex;
            flex-direction: column;
        }
        .gx img{
            width: 100%;
        }
        .gx div{
            font-size: 12px;
            height: 32px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }



        .Playback_bar{
            background-color: white;
            position: fixed;
            bottom: 0;
            height: 50px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 10px;
            box-sizing: border-box;
        }
        .Playback_bar div img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
        }
        .Playback_bar .music_name{
            flex: 1;
            margin-left: 10px;
        }
        .Playback_bar .play{
            margin-right: 20px;
        }
        .Playback_bar div{
            position: relative;
            display: flex;
            align-items: center;
        }
        .Playback_bar div .iconbofang{
            font-size: 26px;

        }
        .Playback_bar div .iconbofangliebiao{
            font-size: 22px;
        }
        /* 个人设置栏 */
        #pp{
            height: 100%;
            width: 84%;
            position: absolute;
            top: 0;
            left: -84%;
            background-color: wheat;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .pp_boss{
            width: 90%;
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        .Head_portrait{
            margin-top: 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
        }
        .photo_{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .photo_ img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .photo_ div{
            font-size: 16px;
            color: white;
        }
        .Sign_in{
            height: 22px;
            width: 48px;
            font-size: 12px;
            color: white;
            background-color: violet;
            border-radius: 46%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .personal{
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .personal_s{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .personal_s span:first-child{
            font-size: 22px;
            color: violet;
            margin-bottom: 5px;
        }
        .personal_s span:last-child{
            font-size: 12px;
            color: white;
        }
        .qita{
            margin-top: 20px;
            overflow-x: hidden;
            overflow-y: scroll;
            height: 500px;
        }
        
        .qita_s{
            height: 70px;
            border-top: grey solid 1px;
            border-bottom: grey solid 1px;
            display: flex;
            align-items: center;
        }
        .qita_s span:first-child{
            font-size: 22px;
            color: honeydew;
            margin-right: 10px;
        }
        .qita_s span:last-child{
            font-size: 14px;
            color: honeydew;
        }
        .qita_t{
            height: 40px;
            display: flex;
            align-items: center;
        }
        .qita_t span:first-child{
            font-size: 22px;
            color: white;
            margin-right: 10px;
        }
        .qita_t span:last-child{
            font-size: 14px;
            color: white;
        }
 
        /* 退出设置栏 */
        .pp_bottom{
           
            height: 40px;
            width: 94%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
        }
        .pp_bottom div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .pp_bottom div span:first-child{
            font-size: 24px;
            margin-right: 10px;
            color:cornflowerblue;
        }
        .pp_bottom div span:last-child{
            color: white;
            font-size: 12px;
        }
</style>



