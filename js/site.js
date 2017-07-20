$(document).ready(function()
{
    habilitarMascaras();
    habilitarTooltip();
});
function desabilitar(x, y)
{
    setTimeout(function()
    {
        $(x).prop('disabled', true);
        $(x).html(y);
    }, 25);
}
function habilitarMascaras()
{
    $(".celular").mask("(99) 99999-9999");
    $(".cnpj").mask("99.999.999/9999-99");
    $(".cpf").mask("999.999.999-99");
    $(".data").mask("99/99/9999");
    $(".telefone").mask("(99) 9999-9999");
}
function habilitarTooltip()
{
    $('[data-toggle="tooltip"]').tooltip();
}

(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-68097206-5', 'auto');
ga('send', 'pageview');

var marker;

function adicionarListeners(map) {
  google.maps.event.addDomListener(map, 'click', function(event) {
    if (!marker.map)
      marker.setMap(map);
    marker.setPosition(event.latLng);
    $('#latitude').val(event.latLng.lat());
    $('#longitude').val(event.latLng.lng());
  });
  marker.addListener('drag', function(event) {
    $('#latitude').val(event.latLng.lat());
    $('#longitude').val(event.latLng.lng());
  });
  marker.addListener('dragend', function(event) {
    $('#latitude').val(event.latLng.lat());
    $('#longitude').val(event.latLng.lng());
  });
}

function mapaCadastro() {
  div = $('#map').get(0);
  var map = new google.maps.Map(div, {
    center: {
      lat: -15.782683,
      lng: -47.909030
    },
    zoom: 10
  });
  marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    draggable: true
  });
  adicionarListeners(map);
}

function mapaEdicao() {
  div = $('#map').get(0);
  var myLat = parseFloat($('#latitude').val());
  var myLng = parseFloat($('#longitude').val());
  var map = new google.maps.Map(div, {
    center: {
      lat: myLat,
      lng: myLng
    },
    zoom: 10
  });
  marker = new google.maps.Marker({
    map: map,
    position: {
      lat: myLat,
      lng: myLng
    },
    draggable: true,
    animation: google.maps.Animation.DROP,
  });
  adicionarListeners(map);
}

function mapaVisualizacao() {
  div = $('#map').get(0);
  var myLat = parseFloat($('#latitude').val());
  var myLng = parseFloat($('#longitude').val());
  var map = new google.maps.Map(div, {
    center: {
      lat: myLat,
      lng: myLng
    },
    zoom: 10
  });
  marker = new google.maps.Marker({
    map: map,
    position: {
      lat: myLat,
      lng: myLng
    },
    animation: google.maps.Animation.DROP
  });
}

function mapaIndexModal() {
  $(".abreModalDetalhaProjeto").on("click", function() {
    var idmodal = $(this).data("idmodal");
    $("#detalharProjetoModal" + idmodal).modal("show");
    initialize(idmodal);

  });

  function initialize(idmodal) {
    div = $('#mapa' + idmodal).get(0);
    var myLat = parseFloat($('#latitude' + idmodal).val());
    var myLng = parseFloat($('#longitude' + idmodal).val());

    var map = new google.maps.Map(div, {
      center: {
        lat: myLat,
        lng: myLng
      },
      zoom: 10,
      scrollwheel: false
    });

    marker = new google.maps.Marker({
      map: map,
      position: {
        lat: myLat,
        lng: myLng
      }
    });

    $("#detalharProjetoModal" + idmodal).on("shown.bs.modal",
      function() {
        google.maps.event.trigger(map, "resize");
        map.setCenter({
          lat: myLat,
          lng: myLng
        });
      });
  }
}

window.odometerOptions = {
  format: "(.ddd)",
  selector: "#contador"
};

$(document).ready(function() {
  setTimeout(function() {
    $("#contador").html($("#horas").val());
  }, 2000);

});

$('#conselhos a').click(function(){
  if($('#conselhos a').hasClass('collapsed')){
      $('#conselhos a.collapsed').prev().prev().removeClass('panel-heading-active');
    }
    else{
      $('#conselhos a').prev().prev().addClass('panel-heading-active');
    }
});
