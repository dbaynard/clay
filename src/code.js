$(window).scroll
  ( function ()
    {
      $( "header" ).css
        ( "top"
        , Math.max(-280, Math.min(0, -$("body").scrollTop()))
        );
    }
  );

$("nav a").click
  ( function (ev)
    {
      var target = $("*[name=" + $(ev.target).attr("href").substr(1) + "]");

      $("html, body").animate
        ( { scrollTop : $(target).offset().top - 80 }
        , ev.shiftKey ? 2500 : 500
        );
      ev.preventDefault();
      ev.stopPropagation();
    }
  );

$("header > div").click
  ( function (ev)
    {
      $("html, body").animate({ scrollTop: 0 });
    }
  );

