# brenda1815.github.io
<!DOCTYPE html>
<html lang="en">
<head>
 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Combo&family=Comfortaa:wght@300&family=Dancing+Script&family=Great+Vibes&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable-no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Ximena</title>
    <script src="/invitaciones/js/trivia/jquery-3.6.0.min.js"></script>
    <script src="/invitaciones/js/bootstrap.min.js"></script>


    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">


<link rel="stylesheet" href="/invitaciones/css/trivia/bootstrap.min.css">

<link rel="stylesheet" href="/invitaciones/css/trivia/animate.min.css">

<link rel="stylesheet" href="/invitaciones/css/trivia/style.css">
<link rel="stylesheet" href="/invitaciones/css/trivia/estilos.css">


</head>

<body style="background-color:  #acd4b3;">
   
    <header>
             <img src="Ximena.png" class="img-fluid" alt="33" class="img-responsive " >
        
            <script>
	
                var screenHeight = $(window).height()-150;
                $('.screen-adapter').css("height", screenHeight);
        
            </script>
    </header>        
    <br>
    <style>
    

    td {border-style: solid;
        border-color: #cccccc;
     border-width: 0px;
    color: #009D71;
    padding: 0px;
    font-size: 24px;
    font-family: Arial;
     text-align: center;}
    
    th {
     border-width: 0px;
    color: #1c1c1c;;
     text-align: center;
    padding: 0px;
    font-size: 10px;
    font-family: Arial;}
     
    </style>
    
        <script>
                                
            var screenHeight = $(window).height()-150;
            $('.screen-adapter').css("height", screenHeight);
    
        </script>

        <!-- Contador regresivo -->
        <section>
       
    
    <table align="center" width="90%">
        <tr>
          <td><span id="days"></span></td>
          <td><span id="hours"></th>
          <td><span id="minutes"></span></td>
          <td><span id="seconds"></span></td>
        </tr>
        <tr >
          <th>Días</th>
          <th>Horas</th>
          <th>Minutos</th>
         <th>Segundos</th>
        </tr>
    </table>
    
        </section> 
        <!-- Fin contador regresivo -->
    
        <script>
          document.addEventListener('DOMContentLoaded', () => { 
    
            //===
            // VARIABLES
            //===
            const DATE_TARGET = new Date('08/05/2023 01:00 PM');
            // DOM for render
            const SPAN_DAYS = document.querySelector('span#days');
            const SPAN_HOURS = document.querySelector('span#hours');
            const SPAN_MINUTES = document.querySelector('span#minutes');
            const SPAN_SECONDS = document.querySelector('span#seconds');
            // Milliseconds for the calculations
            const MILLISECONDS_OF_A_SECOND = 1000;
            const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
            const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
            const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24
    
            //===
            // FUNCTIONS
            //===
    
            /**
            * Method that updates the countdown and the sample
            */
            function updateCountdown() {
                // Calcs
                const NOW = new Date()
                const DURATION = DATE_TARGET - NOW;
                const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
                const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
                const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
                const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
     
                // Render
                SPAN_DAYS.textContent = REMAINING_DAYS;
                SPAN_HOURS.textContent = REMAINING_HOURS;
                SPAN_MINUTES.textContent = REMAINING_MINUTES;
                SPAN_SECONDS.textContent = REMAINING_SECONDS;
            }
    
            //===
            // INIT
            //===
            updateCountdown();
            // Refresh every second
            setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
        });
        </script>

</style>

<link href="/invitaciones/css/bootstrap.min.css" rel="stylesheet" type="text/css">

<link href="/invitaciones/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">


<link href="/invitaciones/css/flexslider.css" rel="stylesheet" type="text/css">

<link href="/invitaciones/css/magnific-popup.css" rel="stylesheet" type="text/css">

<link href="/invitaciones/css/animate.css" rel="stylesheet" type="text/css">

<link href="/invitaciones/css/preloader.css" rel="stylesheet" type="text/css">

<link href="/invitaciones/css/owl.carousel.css" rel="stylesheet" type="text/css">

<link href="/invitaciones/css/style.css?IDA34Sb2322" rel="stylesheet" type="text/css">

<link rel="stylesheet" href="/invitaciones/css/theme6.css" type="text/css" media="screen" />
<br>

<section id="countdown" class="variables" style="background-color:#009D71">
    <div class="container"  >
    <div class="row">
    <div class="col-12 text-center">
        <img src="amigos.png" class="img-fluid" alt="33" class="img-responsive ">
    </div>
    </div>
    </section>
     
    <img src="frace.png" class="img-fluid" alt="33" class="img-responsive " >
        

<div>

</div>
     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="1.jpeg" class="d-block w-100"  alt="480x320" class="img-responsive center-block fl-wd"  >
          </div>
          <div class="carousel-item">
            <img src="5.jpeg" class="d-block w-100" alt="480x320" class="img-responsive center-block fl-wd">
          </div>
          <div class="carousel-item">
            <img src="3.jpeg" class="d-block w-100" alt="480x320" class="img-responsive center-block fl-wd" width="279" height="279">
          </div>
          <div class="carousel-item">
            <img src="4.jpeg" class="d-block w-100" alt="480x320" class="img-responsive center-block fl-wd" width="279" height="279">
          </div>
        </div>
     </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
     </div>

                  <br>             

    <section style="background-color:   #acd4b3">
        <section id="wedding-header" class="wedding-header-single-page">
            <div class="container">
                <div class="text-center">
                    <h2 class="headline" style="color: #101010 ; font-family: 'Dancing Script'" >Dónde & Cuándo</h2>
                </div>
            </div>
        </section>
     
<script>$(document).ready(function() {  $("#wedding-info .wraper-we").css("background-color", "rgba(249, 249, 248, 1)");  $("#wedding-info .wraper-we2").css("background-color", "none !important");  $(".otros-hoteles-bk").css("background-color", "rgba(249, 249, 248, 1)");  $(".cbuBox").css("background-color", "none !important");});</script>
        <div id="mapa1" class="modal fade" role="dialog">
        <div class="modal-dialog">
        
        <div class="modal-content" style="z-index:999;" class="text-center">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Ceremonia Religiosa</h4>
        </div>
        <div class="modal-body">
        <div class="maps">
        
            <iframe class="mapa-pop" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.4668684194207!2d-99.16490382587801!3d19.348927243349873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffc331ae7955%3A0x3adba5441ccc1405!2sParroquia%20San%20Juan%20Bautista%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1684377481174!5m2!1ses!2smx" 
            height="300" frameborder="0" style="border:0" allowfullscreen="">
            </iframe>
        </div>
        <h3 class="wed-text" style="font-family: 'Comfortaa';">PARROQUIA DE SAN JUAN BAUTISTAS </h3>
        <div class="wed-text"style="font-family: 'Comfortaa';">Cuándo: 5 de Agosto de 2023 13:00 hrs. </div>
        <div class="wed-text"style="font-family: 'Comfortaa';">Dirección: Parque Centenario 8, Coyoacán, 04000 Ciudad de México, CDMX. </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
        </div>
         </div>
        </div>
        <div id="mapa2" class="modal fade" role="dialog">
        <div class="modal-dialog">
        
        <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Recepción</h4>
        </div>
        <div class="modal-body">
        <div class="maps">
        
            <iframe class="mapa-pop" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.820297716902!2d-99.07500608509686!3d19.203049687015127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce044c8e474685%3A0xe13f4e143a9b044b!2sJard%C3%ADn%20de%20Eventos%20TERRANOVA!5e0!3m2!1ses!2smx!4v1684810753598!5m2!1ses!2smx" 
             height="300" 
            style="border:0;" allowfullscreen="" ></iframe>
        </div>
        <h3 class="wed-text">JARDIN DE EVENTOS TERRANOVA  </h3>
        
        <div class="wed-text">Cuándo: 5 de agosto de 2023 16:00 hrs. </div>
        <div class="wed-text">Dirección: Niños Heroes #91, San Bartolomé Xicomulco, Milpa Alta, 12250 San Bartolomé Xicomulco, CDMX.  </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
        </div>
        </div>
        </div>
        </div>
        
        <div id="mapa3" class="modal fade" role="dialog">
        <div class="modal-dialog">
        
        <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Itinerario</h4>
        </div>
        <div class="modal-body">
        <div class="maps">
        
        </div>
        <h3 class="wed-text"> </h3>
        
        </div>
        </div>
        </div>
        </div>
        
        <section id="wedding-info" >
            <div class="container">
            <div class="row">
            
            <div class="col-md-4 pading-text margin1 animated-element-1">
            <div class="wraper-we onepage" >            
          
                           <h3 style="font-family: 'Dancing Script'; text-align: center;">Ceremonia Religiosa </h3> 
                            <br>       
                            <img src="iglesia.jpg" alt="480x320"  class="img-responsive center-block fl-wd">        
                            <h3 class="text-center" style="font-family: 'Combo';">PARROQUIA DE SAN JUAN BAUTISTA</h3>        
                        <div class="wed-text"style="font-family: 'Comfortaa'; ">
                            <b>Cuándo: </b> 5 de Agosto de 2023 13:00 hrs. </div>
                        <div class="text-center" style="font-family: 'Comfortaa';">
                            <b>Dirección:</b> Parque Centenario 8, Coyoacán, 04000 Ciudad de México, CDMX. 
                        </div>
                        <br>
                        <div type="button" class="btn btn-primary"data-toggle="modal" data-target="#mapa1">Ver ubicacion</div>
                        
                        </div>
                    </div>

                    <br>
                    <div class="col-md-4 pading-text margin1 animated-element-1">
                        <div class="wraper-we " >
                                <h3 style="font-family: 'Dancing Script'; text-align: center;">Recepción </h3>
                                <br>
                            <img src="lugar.jpg" width="350px" height="250px"   class="img-responsive-center">
                                <h3 class="wed-text" style="font-family: 'Combo'; text-align: center;">JARDIN DE EVENTOS TERRANOVA</h3>
                            <div class="wed-text" style="font-family: 'Comfortaa'; text-align: center;" >
                                <b>Cuándo: </b> 5 de Agosto  
                            </div>
                            <div class="wed-text" style="font-family: 'Comfortaa';text-align: center;">
                                <b>Dirección:</b> Niños Heroes #91, San Bartolomé Xicomulco, Milpa Alta, 12250 San Bartolomé Xicomulco, CDMX.                                . 
                            </div>
                            <div type="button" class="btn btn-primary align-center" data-toggle="modal" data-target="#mapa2" >Ver ubicacion</div>
                       
                        </div>
                    </div>    

                        
                        <div class="col-md pading-text-center margin1 animated-element-1">
                            <div class="wraper-we onepage" style="color: #101010 !important;">
                                <h3 style="font-family: 'Dancing Script'; text-align: center;"> Itinerario </h3>
                                
                                <img src="itine.jpg" width="350px" height="450px" class="img-responsive center-block fl-wd">
                                <h3 class="wed-text"> </h3>
                            </div>
                        </div>
                </div>
            </div>
        
    </section>
    
    <div style="background-color: #009D71">
    <section id="bridsmaid-groosman-header" class="onepage">
    <div class="container">
    
    <div class="text-center">
    
    <br>
    <h2 class="headline" style="font-family: Dancing Script;">Mis Personas Favoritas</h2>
    </div>
    
    </div>
    </section>
    
    <div class="text-center" style="  font-family: Great Vibes;  color: #5c5c5c;margin-top: 0px; font-size: 23px; ">
    ¡Gracias por hacer esto posible!
    </div>
    
    <section id="bridsmaid-groosman-content" class="onepage">
    <div class="container">
    <div class="row text-center">
    
    <div class="col-sm-6 col-md-4 animated-element">
    
    <div class="thumbnail">
    
    
    <div class="caption animated-element-1">
    
    <h3 style="font-family: Great Vibes"><div style="font-size:23px;">Karina Hernández García</div></h3>
    <p>- Mi Mamá -</p>
    </div>
    
    </div>
    
    </div>
    
    
    <div class="col-sm-6 col-md-4 animated-element delay1">
    
    <div class="thumbnail">
    
    <div class="caption animated-element-1">
    
    <h3 style="font-family: Great Vibes"><div style="font-size:23px;">Margarita García Silva </div></h3>
    <p>- Mi Abuelita -</p>
    </div>
    
    </div>
    
    </div>
    
    <div class="col-sm-6 col-md-4 animated-element delay1">
    
        <div class="thumbnail">
        
        <div class="caption animated-element-1">
        
        <h3 style="font-family: Great Vibes"><div style="font-size:23px;">Gustavo Urbina Hernandez </div></h3>
        <p>- Mi hermano -</p>
        </div>
        
        </div>
        
        </div>
    
    <div class="col-sm-6 col-md-4 animated-element delay2">
    
    <div class="thumbnail">
    
    <div class="caption animated-element-1">
    
    <h3 style="font-family: Great Vibes"><div style="font-size:23px;">Sonia Naranjo Cortés <br>Ricardo Hernández García </div></h3>
    <p>- Mis Padrinos -</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
        
    </div>
    <br>
    
    <footer id="footer" class="footer-background-cover screen-adapter">
         <div class="container">
        <div class="row">
        
        <div class="center">
        
            <img src="final.jpeg"  class="img-responsive-center"  width="259">
            <h2 style="font-family: Dancing Script;" class="text-center"><strong>Los momentos especiales son para compartirlos.</strong></h2>
            <h2 style="font-family: Dancing Script;" class="text-center"><strong>¡Ven a mi fiesta y celebremos juntos!</strong></h2>
            <h2 style="font-family: Dancing Script;" class="text-center"><strong>Los esperamos.</strong></h2>
            

       
        
        </div>
        
        </div>
        </div>
        </footer>
    

    

        <div class="musicaOff hidden" target="_blank" id="sonidoMusicaOff" style="cursor: pointer;">
        <i class="fa fa-volume-up flotante" id="iconoMusica"></i>
        </div>
        <div class="musicaOn hidden" target="_blank" id="sonidoMusicaOn" style="cursor: pointer;">
            <i class="fa fa-volume-up flotante" id="iconoMusica"></i>
            </div>
            
        <div class="musicaOn" target="_blank" id="sonidoMusicaOn" style="cursor: pointer;">
        
        </div>
        <audio id="musica" loop>
        <source src="Sad Girl" type="audio/mp3">
        </audio>
        
        <div class="modal fade" id="modalBienvenida" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content modal-audio">
        <h3 style="font-family: 'Dancing Script';">Bienvenidos a la invitación de Ximena</h3>
        
        <div class="text-center mb-3" id="boton-modal"> <button class="btn btn-primary w-50 rounded-pill b1 text-transform">INGRESAR</button> </div>
        </div>
        </div>
        </div>

        <script src="/invitaciones/js/trivia/script.js"></script>    
<script>
    

    //Musica
    $("#sonidoMusicaOff").click(function() {
       var audio = document.getElementById("musica");
       $("#sonidoMusicaOn").removeClass( "hidden" );
       $("#sonidoMusicaOff").addClass( "hidden" );
       audio.play(); // without this line it's not working although I have "muted" in HTML
    });

    $("#sonidoMusicaOn").click(function() {
       var audio = document.getElementById("musica");
       $("#sonidoMusicaOff").removeClass( "hidden" );
       $("#sonidoMusicaOn").addClass( "hidden" );
       audio.pause(); // without this line it's not working although I have "muted" in HTML
    });
 </script>

<script src="https://cdn.jsdelivr.net/npm/tsparticles-engine"></script>
<script src="https://cdn.jsdelivr.net/npm/tsparticles/tsparticles.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-particles"></script>
<script>
$(document).ready(async function () {
// tsParticles.load("tsparticles",'efecto.json') ;

  //$("#tsparticles").particles();
     
  });
</script>

<script>

setTimeout(()=> {
    $('#modalBienvenida').modal('show');
}
,800);


$("#boton-modal").click(function() {
$('#modalBienvenida').modal('hide');
var audio = document.getElementById("musica");
audio.play();
audio.muted = false; // without this line it's not working although I have "muted" in HTML
});

$("#modalBienvenida").on("click",function() { 
var audio = document.getElementById("musica");
audio.play();
audio.muted = false;
});

$("#sonidoMusicaOff").click(function() {
var audio = document.getElementById("musica");
$("#sonidoMusicaOn").removeClass( "hidden" );
$("#sonidoMusicaOff").addClass( "hidden" );
audio.play(); // without this line it's not working although I have "muted" in HTML
});

$("#sonidoMusicaOn").click(function() {
var audio = document.getElementById("musica");
$("#sonidoMusicaOff").removeClass( "hidden" );
$("#sonidoMusicaOn").addClass( "hidden" );
audio.pause(); // without this line it's not working although I have "muted" in HTML
});

</script>

</body>
</html>
