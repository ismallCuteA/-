let imgList = [];
    let timer = null;
    let flag = true;

    document.addEventListener("click", function (event) {

        let img = document.createElement("img");
        img.style.position = "absolute";

        // 保持图片在鼠标点击的中间位置,所以减去32，图片大小64*64
        img.style.left = (event.clientX - 32) + "px";
        img.style.top = (event.clientY - 32) + "px";

        // 设置下旋转角度
        img.style.transform = "rotate(" + getAngle() + "deg)";
        img.src = "1.png";
        document.body.appendChild(img);

        // 用一个列表维护图片的状态
        imgList.push({
            img: img,
            opacity: 1,
            scale: 1,
            frame: 0,
            translatey:0,
            translatex:0
        });

        if (!timer) {
            timer = setInterval(draw, 60);
        }

    });


    // 获取随机角度，-30到30之间
    function getAngle() {
        let seed = Math.random();
        return Math.floor(seed * 60 - 30);
    }

    function draw() {
        //console.log("绘制动画");
        // 加入图片列表空了，说明页面没有图片了，也没有动画了，清除计时器
        if (imgList.length < 1) {
            clearInterval(timer);
            timer = null;

            return;
        }

        for (let i = 0; i < imgList.length; i++) {
            // 透明度小于0的时候，从列表和dom树里面删掉
            if (imgList[i].opacity < 0) {
                imgList[i].img.remove();
                imgList.splice(i, 1);
                i--;
            } else {
                // 前30帧不要绘制
                if (imgList[i].frame > 20) {
                    // 改变它的大小和透明度
                    imgList[i].opacity -= 0.02;
                    imgList[i].scale += 0.06;
                    imgList[i].translatey -= 10;
                    
                    if(flag){
                        imgList[i].translatex += 3;
                    }else{
                        imgList[i].translatex -= 3;
                    }
                    if(imgList[i].translatex == 18 || imgList[i].translatex == 39){
                        flag = false;
                    }
                    if(imgList[i].translatex == -36){
                        flag = true;
                    }

                   // console.log(imgList[i].img.style.transform);
                    let rotateStr = imgList[i].img.style.transform.split(" ")[0];
                    imgList[i].img.style.transform = rotateStr + " scale(" + imgList[i].scale + ")";
                    imgList[i].img.style.transform = rotateStr + " translate(" + imgList[i].translatex + "px," + imgList[i].translatey + "px)";
                    imgList[i].img.style.opacity = imgList[i].opacity;
                }else{
                    imgList[i].frame++;
                }

            }
        }
    }