$(document).ready(function() {

	//var url = "http://localhost:8090";
	var url = "https://ofaroldasloterias-app.herokuapp.com";

	var texto = 'Do concurso: ';

    $("#qtdConcursosButton").click(function(){

        $.ajax({

        	url: url.concat("/lotofacil/gratis/listarFrequenciaDosNumeros?numeroConcurso="+$("#numeroConcurso").val()+"&qtdConcurso="+$("#qtdConcurso").val())

        }).then(function(data) {

         	  document.getElementById("concursos").innerHTML = texto.concat(data.concursoAte).concat(' at\u00e9 ').concat(data.concursoDe);

         	  var listaFrequeciaSorteio = data.listaFrequenciaSorteio;

         	  /*
         		for(i in listaFrequeciaSorteio){
         			var valores = listaFrequeciaSorteio[i];
         			console.log( valores );
         		}
			*/

         		 document.getElementById("bola1").innerHTML = listaFrequeciaSorteio[0].numero;
         		 document.getElementById("qtd1").innerHTML = listaFrequeciaSorteio[0].quantidade;

         		 document.getElementById("bola2").innerHTML = listaFrequeciaSorteio[1].numero;
         		 document.getElementById("qtd2").innerHTML = listaFrequeciaSorteio[1].quantidade;

         		 document.getElementById("bola3").innerHTML = listaFrequeciaSorteio[2].numero;
         		 document.getElementById("qtd3").innerHTML = listaFrequeciaSorteio[2].quantidade;

         		 document.getElementById("bola4").innerHTML = listaFrequeciaSorteio[3].numero;
         		 document.getElementById("qtd4").innerHTML = listaFrequeciaSorteio[3].quantidade;

         		 document.getElementById("bola5").innerHTML = listaFrequeciaSorteio[4].numero;
         		 document.getElementById("qtd5").innerHTML = listaFrequeciaSorteio[4].quantidade;

         		 document.getElementById("bola6").innerHTML = listaFrequeciaSorteio[5].numero;
         		 document.getElementById("qtd6").innerHTML = listaFrequeciaSorteio[5].quantidade;

         		 document.getElementById("bola7").innerHTML = listaFrequeciaSorteio[6].numero;
         		 document.getElementById("qtd7").innerHTML = listaFrequeciaSorteio[6].quantidade;

         		 document.getElementById("bola8").innerHTML = listaFrequeciaSorteio[7].numero;
         		 document.getElementById("qtd8").innerHTML = listaFrequeciaSorteio[7].quantidade;

         		 document.getElementById("bola9").innerHTML = listaFrequeciaSorteio[8].numero;
         		 document.getElementById("qtd9").innerHTML = listaFrequeciaSorteio[8].quantidade;

         		 document.getElementById("bola10").innerHTML = listaFrequeciaSorteio[9].numero;
         		 document.getElementById("qtd10").innerHTML = listaFrequeciaSorteio[9].quantidade;

         		 document.getElementById("bola11").innerHTML = listaFrequeciaSorteio[10].numero;
         		 document.getElementById("qtd11").innerHTML = listaFrequeciaSorteio[10].quantidade;

         		 document.getElementById("bola12").innerHTML = listaFrequeciaSorteio[11].numero;
         		 document.getElementById("qtd12").innerHTML = listaFrequeciaSorteio[11].quantidade;

         		 document.getElementById("bola13").innerHTML = listaFrequeciaSorteio[12].numero;
         		 document.getElementById("qtd13").innerHTML = listaFrequeciaSorteio[12].quantidade;

         		 document.getElementById("bola14").innerHTML = listaFrequeciaSorteio[13].numero;
         		 document.getElementById("qtd14").innerHTML = listaFrequeciaSorteio[13].quantidade;

         		 document.getElementById("bola15").innerHTML = listaFrequeciaSorteio[14].numero;
         		 document.getElementById("qtd15").innerHTML = listaFrequeciaSorteio[14].quantidade;

         		 document.getElementById("bola16").innerHTML = listaFrequeciaSorteio[15].numero;
         		 document.getElementById("qtd16").innerHTML = listaFrequeciaSorteio[15].quantidade;

         		 document.getElementById("bola17").innerHTML = listaFrequeciaSorteio[16].numero;
         		 document.getElementById("qtd17").innerHTML = listaFrequeciaSorteio[16].quantidade;

         		 document.getElementById("bola18").innerHTML = listaFrequeciaSorteio[17].numero;
         		 document.getElementById("qtd18").innerHTML = listaFrequeciaSorteio[17].quantidade;

         		 document.getElementById("bola19").innerHTML = listaFrequeciaSorteio[18].numero;
         		 document.getElementById("qtd19").innerHTML = listaFrequeciaSorteio[18].quantidade;

         		 document.getElementById("bola20").innerHTML = listaFrequeciaSorteio[19].numero;
         		 document.getElementById("qtd20").innerHTML = listaFrequeciaSorteio[19].quantidade;

         		 document.getElementById("bola21").innerHTML = listaFrequeciaSorteio[20].numero;
         		 document.getElementById("qtd21").innerHTML = listaFrequeciaSorteio[20].quantidade;

         		 document.getElementById("bola22").innerHTML = listaFrequeciaSorteio[21].numero;
         		 document.getElementById("qtd22").innerHTML = listaFrequeciaSorteio[21].quantidade;

         		 document.getElementById("bola23").innerHTML = listaFrequeciaSorteio[22].numero;
         		 document.getElementById("qtd23").innerHTML = listaFrequeciaSorteio[22].quantidade;

         		 document.getElementById("bola24").innerHTML = listaFrequeciaSorteio[23].numero;
         		 document.getElementById("qtd24").innerHTML = listaFrequeciaSorteio[23].quantidade;

         		 document.getElementById("bola25").innerHTML = listaFrequeciaSorteio[24].numero;
         		 document.getElementById("qtd25").innerHTML = listaFrequeciaSorteio[24].quantidade;


         	  /*
         	  document.getElementById("qtdNumero01").innerHTML = data.qtdNumero01;
         	  document.getElementById("qtdNumero02").innerHTML = data.qtdNumero02;
         	  document.getElementById("qtdNumero03").innerHTML = data.qtdNumero03;
         	  document.getElementById("qtdNumero04").innerHTML = data.qtdNumero04;
         	  document.getElementById("qtdNumero05").innerHTML = data.qtdNumero05;
         	  document.getElementById("qtdNumero06").innerHTML = data.qtdNumero06;
         	  document.getElementById("qtdNumero07").innerHTML = data.qtdNumero07;
         	  document.getElementById("qtdNumero08").innerHTML = data.qtdNumero08;
         	  document.getElementById("qtdNumero09").innerHTML = data.qtdNumero09;
         	  document.getElementById("qtdNumero10").innerHTML = data.qtdNumero10;
         	  document.getElementById("qtdNumero11").innerHTML = data.qtdNumero11;
         	  document.getElementById("qtdNumero12").innerHTML = data.qtdNumero12;
         	  document.getElementById("qtdNumero13").innerHTML = data.qtdNumero13;
         	  document.getElementById("qtdNumero14").innerHTML = data.qtdNumero14;
         	  document.getElementById("qtdNumero15").innerHTML = data.qtdNumero15;
         	  document.getElementById("qtdNumero16").innerHTML = data.qtdNumero16;
         	  document.getElementById("qtdNumero17").innerHTML = data.qtdNumero17;
        	  document.getElementById("qtdNumero18").innerHTML = data.qtdNumero18;
        	  document.getElementById("qtdNumero19").innerHTML = data.qtdNumero19;
        	  document.getElementById("qtdNumero20").innerHTML = data.qtdNumero20;
        	  document.getElementById("qtdNumero21").innerHTML = data.qtdNumero21;
        	  document.getElementById("qtdNumero22").innerHTML = data.qtdNumero22;
        	  document.getElementById("qtdNumero23").innerHTML = data.qtdNumero23;
        	  document.getElementById("qtdNumero24").innerHTML = data.qtdNumero24;
        	  document.getElementById("qtdNumero25").innerHTML = data.qtdNumero25;
        	  */

        });

        $.ajax({

            url: url.concat("/lotofacil/gratis/listarSequenciaDosConcursos?numeroConcurso="+$("#numeroConcurso").val()+"&qtdConcurso="+$("#qtdConcurso").val())

        }).then(function(data) {

          		//console.log( data );
        	    var linha = "";
        	    linha = "<thread>";
        	    linha = linha + "<tr><th>Data</th>" +
        	    		"<th>Concurso</th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<th></th>" +
        	    		"<tr>";

        	    linha = linha + "</thread>";
        	    linha = linha + "<tbody>";

        	    var numeroConcursoSelecionado = $("#numeroConcurso").val();

        	    for(i in data){

        	    	var sequencia = data[i];

          		if(i==1 && numeroConcursoSelecionado!="" && numeroConcursoSelecionado!=data[0].numeroDoConcurso){

          			linha = linha + ("<tr><td>"+sequencia.dataDoConcurso+"</td>" +
          					"<td>"+sequencia.numeroDoConcurso+"</td>" +
          							"<td>"+(sequencia.numero01==true ? '<div class="bola-invertida"><b>01</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero02==true ? '<div class="bola-invertida"><b>02</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero03==true ? '<div class="bola-invertida"><b>03</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero04==true ? '<div class="bola-invertida"><b>04</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero05==true ? '<div class="bola-invertida"><b>05</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero06==true ? '<div class="bola-invertida"><b>06</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero07==true ? '<div class="bola-invertida"><b>07</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero08==true ? '<div class="bola-invertida"><b>08</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero09==true ? '<div class="bola-invertida"><b>09</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero10==true ? '<div class="bola-invertida"><b>10</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero11==true ? '<div class="bola-invertida"><b>11</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero12==true ? '<div class="bola-invertida"><b>12</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero13==true ? '<div class="bola-invertida"><b>13</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero14==true ? '<div class="bola-invertida"><b>14</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero15==true ? '<div class="bola-invertida"><b>15</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero16==true ? '<div class="bola-invertida"><b>16</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero17==true ? '<div class="bola-invertida"><b>17</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero18==true ? '<div class="bola-invertida"><b>18</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero19==true ? '<div class="bola-invertida"><b>19</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero20==true ? '<div class="bola-invertida"><b>20</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero21==true ? '<div class="bola-invertida"><b>21</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero22==true ? '<div class="bola-invertida"><b>22</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero23==true ? '<div class="bola-invertida"><b>23</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero24==true ? '<div class="bola-invertida"><b>24</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero25==true ? '<div class="bola-invertida"><b>25</b></div>' : '<div class="bola-invertida"><b>-</b></div>')+"</td>" +
          									"</tr>");
          		} else {

          			linha = linha + ("<tr><td>"+sequencia.dataDoConcurso+"</td>" +
          					"<td>"+sequencia.numeroDoConcurso+"</td>" +
          							"<td>"+(sequencia.numero01==true ? '<div class="bola"><b>01</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero02==true ? '<div class="bola"><b>02</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero03==true ? '<div class="bola"><b>03</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero04==true ? '<div class="bola"><b>04</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero05==true ? '<div class="bola"><b>05</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero06==true ? '<div class="bola"><b>06</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero07==true ? '<div class="bola"><b>07</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero08==true ? '<div class="bola"><b>08</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero09==true ? '<div class="bola"><b>09</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero10==true ? '<div class="bola"><b>10</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero11==true ? '<div class="bola"><b>11</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero12==true ? '<div class="bola"><b>12</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero13==true ? '<div class="bola"><b>13</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero14==true ? '<div class="bola"><b>14</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero15==true ? '<div class="bola"><b>15</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero16==true ? '<div class="bola"><b>16</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero17==true ? '<div class="bola"><b>17</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero18==true ? '<div class="bola"><b>18</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero19==true ? '<div class="bola"><b>19</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero20==true ? '<div class="bola"><b>20</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero21==true ? '<div class="bola"><b>21</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero22==true ? '<div class="bola"><b>22</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero23==true ? '<div class="bola"><b>23</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero24==true ? '<div class="bola"><b>24</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          							"<td>"+(sequencia.numero25==true ? '<div class="bola"><b>25</b></div>' : '<div class="bola"><b>-</b></div>')+"</td>" +
          									"</tr>");
          		}


          		}
        	    linha = linha + "</tbody>";

          		document.getElementById("sequenciaConcursos").innerHTML = linha;

        });

    });



});