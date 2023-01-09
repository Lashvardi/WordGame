$(document).on("keypress", function (e) {
  if (e.which == 	32) {
    $("#TESTWORD").html("");
    $("#DEFINITON").html("");
    $("#Push_here").empty();
    $.ajax({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/randomword?type",
      headers: { "X-Api-Key": "VI6ivRV3/4F56OSmro3Dow==iDcEphCADVrguHal" },
      contentType: "application/json",
      success: function (result) {
        let RandArray = Object.assign([], result.word);

        let word = result.word;

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(
          (response) => {
            if (response.status == 200) {
              response
                .json()
                .then((data) =>
                  $("#DEFINITION").html(
                    data[0].meanings[0].definitions[0].definition
                  )
                );
            } else {
                $.ajax({
                    method: "GET",
                    url: "https://api.api-ninjas.com/v1/randomword?type",
                    headers: { "X-Api-Key": "VI6ivRV3/4F56OSmro3Dow==iDcEphCADVrguHal" },
                    contentType: "application/json",
                    success: function (result) {      },

                    error: function ajaxError(jqXHR) {
                      console.error("Error: ", jqXHR.responseText);
                    },
                  });
            }
          }
        );

        let looper = RandArray;
        for (let i = 0; i < looper.length; i++) {
          $("#Push_here").append(
            ` <span id="Child"class="word_letter">${looper[i]}</span>`
          );
        }
        var parentDiv = document.getElementById("Push_here");

        colorEm();
        function colorEm() {
          var $div = $("#Push_here #Child");
          var $innerDiv = $("#Push_here #Inner")
          var start = Math.floor(Math.random() * $div.length - 4);
          var end = Math.floor(Math.random() * ($div.length - start)) + start + 2;
          if (end === $div.length) {
            end = undefined;
          }
          $div.css("background", "");
          if (end) {
            $div.slice(start, end).css("opacity", "0.1");
            $div.slice(start, end).addClass("Missing");
          } else {
            $div.slice(start).css("opacity", "0.1");
            $div.slice(start, end).addClass("Missing");

          }
          //console.log($div[start])
        }
        var $div = $("#Push_here span");
        var $missing = $(".Missing")
        var start = Math.floor(Math.random() * $div.length - 4);
        var end = Math.floor(Math.random() * ($div.length - start)) + start + 2;




      setTimeout(
        function() 
        {
          var MissingWord = $("#Push_here .Missing").map(function() {
            return this.innerHTML;
        }).get();
        
        let wordsArray = [];
        wordsArray.push(MissingWord)

        for (let i = 0; i < MissingWord.length; i++) {
          console.log(MissingWord[i])
        }

        
        console.log('============')
   

      //   $("#GetInput").keyup(function(event) {
      //     if (event.keyCode === 13) {
      //       let val = $("#GetInput").val();
      //       for (let i = 0; i < MissingWord.length; i++) {
      //         console.log(MissingWord[i])
      //         if(val == MissingWord[i] ){
      //           console.log("MATCH FOUND")
      //         }          
      //         else{
      //           console.log("MATCH NOT FOUND")
      //         }
      //       }
      //       console.log(`Player Input Value Is ${val}`)
      //       $("#GetInput").val("");
      //     }
      // });


      //! Better Version
      $("#GetInput").keyup(function(event) {
        if (event.keyCode === 13) {

          for (let i = 0; i < MissingWord.length; i++) {
            console.log(MissingWord[i])
          }
          let val = $("#GetInput").val();
          let $missing = $(".Missing");
          let $innerDiv = $("#Push_here #Inner")
          $missing.each(function() {
            if ($(this).text() === val) {
              $(this).css("background-color", "green");
              $($innerDiv).css("opacity", "1");
              $(this).css("opacity", "1");
              $(this).removeClass("Missing");
              $("#GetInput").val("");
            }
          });
      
          if ($missing.length === 0) {
            alert("All missing elements have been filled in correctly!");
          }
        }
      });

      //! ends Here
          //do something special
        }, 3000);
        
        colorEm();
      },
      


      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      },
    });

    var parentDiv = document.getElementById("Push_here");
    var childDiv = document.getElementById("Child");
  }
});

//* API IS DONE 
