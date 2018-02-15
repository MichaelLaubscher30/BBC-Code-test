$.getJSON('data.json', function (data) {
    console.log(data);


    var items = [];
    $.each(data, function (key, val) {
        items.push("<tr>");
        items.push("<tr>");
        switch (key) {
            case "2009-01":
                var str = "Janaury 2009";
                var Obj = document.getElementById("2009-01");
                Obj = str;
                break;

            case "2009-02":
                var str = "Febaury 2009";
                var Obj = document.getElementById("2009-02");
                Obj = str;
                break;

            case "2009-03":
                var str = "March 2009";
                var Obj = document.getElementById("2009-03");
                Obj = str;
                break;
            case "2009-04":
                var str = "April 2009";
                var Obj = document.getElementById("2009-04");
                Obj = str;
                break;

            case "2009-05":
                var str = "May 2009";
                var Obj = document.getElementById("2009-05");
                Obj = str;
                break;

            case "2009-06":
                var str = "June 2009";
                var Obj = document.getElementById("2009-06");
                Obj = str;
                break;

            case "2009-07":
                var str = "July 2009";
                var Obj = document.getElementById("2009-07");
                Obj = str;
                break;

            case "2009-08":
                var str = "August 2009";
                var Obj = document.getElementById("2009-08");
                Obj = str;
                break;

            case "2009-09":
                var str = "September 2009";
                var Obj = document.getElementById("2009-09");
                Obj = str;
                break;

            case "2009-10":
                var str = "October 2009";
                var Obj = document.getElementById("2009-10");
                Obj = str;
                break;

            case "2009-11":
                var str = "November 2009";
                var Obj = document.getElementById("2009-11");
                Obj = str;
                break;

            case "2009-12":
                var str = "December 2009";
                var Obj = document.getElementById("2009-12");
                Obj = str;
                break;

        }

        items.push("<td id=’’" + key + "’’>" + str + "</td>");
        items.push("<td id=’’" + key + "’’>" + val.bbcfour + "</td>");
        items.push("<td id=’’" + key + "’’>" + val.bbcnews24 + "</td>");
        items.push("<td id=’’" + key + "’’>" + val.bbcone + "</td>");
        items.push("<td id=’’" + key + "’’>" + val.bbcthree + "</td>");
        items.push("<td id=’’" + key + "’’>" + val.bbctwo + "</td>");
        items.push("<td id=’’" + key + "’’>" + val.cbbc + "</td>");
        items.push("<td id=’’" + key + "’’>" + val.cbeebies + "</td>");
    });

    $("<tbody/>", {html: items.join("")}).appendTo("table");

});
    