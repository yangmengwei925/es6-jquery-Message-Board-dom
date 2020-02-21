$(function(){
    // $(".submit").click(function(){
    //     alert("aa");
    // });

    // var f = (v) => v;
    // var f = function(v){
    //     return v;
    // }

    // var f = () => v ;
    // var f = (x,y) => v ;

    // var f = () => '123';

    
//    var f= (x,y) => {
//       var g = x+y;
//         return g;
//     }
//     f(2,3);

//     var f = (x,y) => '123';

    //es6 箭头函数
    // $(".submit").click(()=>{
        // es6  let
        // let a = 0;
        // const 常量  3.1415
        // let _name = $(".name").val();
        // let _msg = $(".message").val();

        // map()  es6 object (key value)'  set 存储    get获取
        // let m = new Map();
        //     m.set(_name, _msg);
        
        //   for... of
        // if(_name == "" || _msg == ""){
        //     alert("请输入内容");
        // }else{
        //     $(".name,.message").val(" ");
        //     for(let[index,value] of m){
        //         $(".messageList").append(`<li class="list-group-item">${index}<span>说：${value}</span> </li>`);
        //     }
            //  es6解构
            // let x = 0;
            // let y = 1;

            // let x = 0,
            //     y = 1;
            
            // let[x,y] = [2,0];

        // }
        // ...arr

        // ''+index+''
        // ``
    // });


    let m = new Map();
    $(".submit").click(()=>{
        let _name = $(".name").val();
        let _msg = $(".message").val();

        if(_name == "" || _msg ==""){
            alert("请输入内容");
        }else{
            m.set(_name,_msg);
            $(".name,.message").val(" ");
            _list();

        }
    });
    let _list = () =>{
        let str = '';
        for(let[index,value] of m){
            str += `<li class="list-group-item">${index}<span>说：${value}</span> </li>`;
            $(".messageList").html(str);
        }
    }




});