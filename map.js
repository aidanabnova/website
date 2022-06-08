function initMap() {
    var maincenter = {
        title: "HP center",
        lat: 43.234857,
        lng: 76.910408,
    };
    var secondcenter = {
        title: "HP center2",
        lat: 43.212615,
        lng: 76.916005,
    };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 43.225122, lng: 76.908660 },
    });
    var marker = new google.maps.Marker({
        position: maincenter,
        map: map,
        title: maincenter.title,
        icon: "images/iconMarker.png",
    });

    var marker = new google.maps.Marker({
        position: secondcenter,
        map: map,
        title: secondcenter.title,
        icon: "images/iconMarker.png",
    });
}

