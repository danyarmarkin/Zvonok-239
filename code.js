function start(){

  document.getElementById('start_button').disabled = 'true';
  document.getElementById('start_button').hidden = 'true';

  document.getElementById('indicator').innerHTML = 'Звонки активированы'

  var dots = true;
  var if_ring = false;
  var audio_start = new Audio();
  var audio_finish = new Audio();
  var audio_prestart = new Audio();
  audio_start.preload = 'auto';
  audio_start.src = 'start239.wav';
  audio_finish.preload = 'auto';
  audio_finish.src = 'finish239.wav';
  audio_prestart.preload = 'auto';
  audio_prestart.src = 'prestart239.wav';
  var watch = document.getElementById('time');
  // console.log(today.getUTCHours() + 3 + ":" + today.getUTCMinutes() + ":" + today.getUTCSeconds());
  var start_ring = true;
  var finish_ring = true;
  var prestart_ring = true;
  var start_checkbox = document.getElementById('startCh');
  var finish_checkbox = document.getElementById('finishCh');
  var prestart_checkbox = document.getElementById('prestartCh');
  var vol_bar = document.getElementById('volume');
  var vol_input = document.getElementById('input_vol');



  function ring(){

    var today = new Date();
    var h = today.getUTCHours() +3;
    var m = today.getUTCMinutes();
    var s = today.getUTCSeconds();

    if(h == 24){
      h = 0;
    }
    if(h == 25){
      h = 1;
    }
    if(h == 26){
      h = 2;
    }

    if(start_checkbox.checked){ start_ring = true} else {start_ring = false}
    if(finish_checkbox.checked){ finish_ring = true} else {finish_ring = false}
    if(prestart_checkbox.checked) {prestart_ring = true} else {finish_ring = false}

    function play_start(){
      if(if_ring == false && start_ring == true){
        audio_start.volume = vol_input.value/100;
        if_ring = true;
        audio_start.play();
      }
    }
    function play_finish(){
      if(if_ring == false  && finish_ring == true){
        audio_finish.volume = vol_input.value/100;
        if_ring = true;
        audio_finish.play();
      }
    }
    function play_preStart(){
      if(if_ring == false && prestart_ring == true){
        audio_prestart.volume = vol_input.value/100;
        if_ring = true;
        audio_prestart.play();
      }
    }

    //----start rings
    if(h == 9 && m == 15){
      play_start();
    } else if(h == 10 && m == 10 ){
      play_start();
    }else if(h == 11 && m == 10 ){
      play_start();
    }else if(h == 12 && m == 10 ){
      play_start();
    }else if(h == 13 && m == 25 ){
      play_start();
    }else if(h == 14 && m == 20){
      play_start();

      //-----Finish Rings
    } else if(h == 10 && m == 0 ){
      play_finish();
    }else if(h == 10 && m == 55 ){
      play_finish();
    }else if(h == 11 && m == 55 ){
      play_finish();
    }else if(h == 12 && m == 55 ){
      play_finish();
    }else if(h == 14 && m == 10 ){
      play_finish();
    }else if(h == 15 && m == 5){
      play_finish();

      //-----preStart rings
    }else if(h == 9 && m == 10){
      play_preStart();
    }else if(h == 10 && m == 5){
      play_preStart();
    }else if(h == 11 && m == 5){
      play_preStart();
    }else if(h == 12 && m == 5){
      play_preStart();
    }else if(h == 13 && m == 20){
      play_preStart();
    }else if(h == 14 && m == 15){
      play_preStart();
    }
    else{
      if_ring = false;
    }
    // if(s<10) s= '0'+s;
    // if(m<10) m= '0'+m;
    // if(h<10) h= '0'+h;

    // if(dots == true){
    //   watch.innerHTML = 'Сейчас '+h+':'+m+':'+s;
    //   dots = false;
    // }else{
    //   watch.innerHTML = 'Сейчас '+h+':'+m+':'+s;
    //   dots = true;
    // }

  }

  // function test(){
    //var song = document.getElementById('musicFinish');
    //song.play();
  // }

   let start_timer = setInterval(ring, 1000);
   ring();
   //let test_time = setInterval(test,30000);
  //audio_finish.play();
  //test();



}
function update_vol(){
  var b = document.getElementById('volume');
  var i = document.getElementById('input_vol');

  input_vol.value = b.value;
}
function update_vol_by_text(){
  var b = document.getElementById('volume');
  var i = document.getElementById('input_vol');
  b.value = i.value;
  // if(i.value == ''){
  //   i.value = '50';
  // }
}
var test = false;
function play_test(){
  var audio = new Audio();
  audio.preload = 'auto';
  audio.src = 'finish239.wav';
  audio.volume = document.getElementById('input_vol').value/100;
  if(test == false){
    audio.play();
    test = true;
    setTimeout(restart, 16000);
  }

  function restart(){
    test = false;
  }

}
function watch(){
  var watch = document.getElementById('time');
  function time(){
    var today = new Date();
    var h = today.getUTCHours() +3;
    var m = today.getUTCMinutes();
    var s = today.getUTCSeconds();

    if(h == 24){
      h = 0;
    }
    if(h == 25){
      h = 1;
    }
    if(h == 26){
      h = 2;
    }

    if(s<10) s= '0'+s;
    if(m<10) m= '0'+m;
    if(h<10) h= '0'+h;

    watch.innerHTML = 'Сейчас '+h+':'+m+':'+s;
  }
  time();
  setInterval(time, 1000);
}
