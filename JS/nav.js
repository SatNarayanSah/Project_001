
        $(function(){
        $(".toggle").on("click", function(){
          if($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
            $(this).find("a").html('<i class="fa-solid fa-bars"></i>');
          }
          else{
            $(".menu").addClass("active");
            $(this).find("a").html('<i class="fa-solid fa-xmark"></i>');
          }
        })
        });
      