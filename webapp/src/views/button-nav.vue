// 底部的固定信息的模块化
<template>
    <div class="resource" >
        <div style="margin: 16px 0px;">
            <div style="color: #656565;font-size: .9em;font-weight: 700;">资源</div>
            <ul style="float:left;padding-right:24px;">
                <li>创作者支持计划</li>
                <li>在Epic Games上发布</li>
                <li>职业</li>
            </ul>
            <ul style="padding-right:24px;padding-bottom:8px;">
                <li>公司</li>
                <li>爱好者作品政策</li>
                <li>用户体验调查</li>
            </ul>
            <ul style="padding-right:24px;padding-bottom:8px;">
                <li>商城最终用户授权协议</li>
                <li>在线服务</li>
                <li>社区守则</li>
            </ul>
        </div>
        <div style="margin: 16px 0px;">
            <div style="color: #656565;font-size: .9em;font-weight: 700;">由Epic Games开发</div>
            <ul style="float:left;padding-right:24px;">
                <li>Battle Breakers</li>
                <li>Fortnite</li>
                <li>Infinity Blade</li>
                <li>Robo Recall</li>
            </ul>
            <ul style="padding-right:24px;">
                <li>Shadow Complex</li>
                <li>Spyjinx</li>
                <li>Unreal Tournament</li>
            </ul>
        </div>
        <div style="margin-top:40px;padding:0px 71.5px">
            <img src="https://cdn2-unrealengine-1251447533.file.myqcloud.com/Common%20Assets%2FLegal%20Icons%2Fxsola_logo_wText-184x90-ffae78ce9de7691ff91dd53395687da6951bdf3a.png" alt="" style="width:144px;height:70px;" >
        </div>
        <hr style="margin: 1em 0 0.5em;border-style: solid none #333333;}">
        <div style="padding:15px 6.5px">
            <span style="color: #ccc;font-family: OpenSans,sans-serif;font-size: .71em;font-weight: 400;line-height: 2em;">
                © 2021, Epic Games, Inc. 版权所有。Epic、Epic Games、Epic Games标志、Fortnite（堡垒之夜）、Fortnite（堡垒之夜）标志、Unreal（虚幻）、Unreal Engine（虚幻引擎）、Unreal Engine（虚幻引擎）标志、Unreal Tournament（虚幻竞技场）以及Unreal Tournament（虚幻竞技场）标志属于Epic Games, Inc.在美利坚合众国及其他地区的商标或已注册商标。其他品牌或产品名称属于其各自拥有者的商标。美国以外事务通过Epic Games International, S.à r.l.办理。
            </span>
        </div>
        <div>
            <ul class="list">
                <li>服务条款</li>
                <li>隐私政策</li>
                <li>商店退款政策</li>
            </ul>
        </div>
        <div style="margin-top:30px;margin-bottom:10px">
            <p style="margin:auto;width:100%;display:flex;justify-content: center;">
                <img src="../img/logo.png" alt="" style="width:24px;height:31px;">
                <img src="" alt="">
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'Mine'
}
</script>

<style scoped>
    .resource{
        width: 100%;
        height: auto;
        background: #202020;
        padding: 16px 24px;
        box-sizing: border-box;
        
    }

    li{
        color: #e7e7e7;
        font-weight: 400;
        line-height: 1.5em;
        cursor: pointer;
        font-family: OpenSans,sans-serif;
        font-size: .86em;
       
    }

    .list li {
         text-align: center;
         font-size: .75em;
         color: #e7e7e7;    
    }
</style>