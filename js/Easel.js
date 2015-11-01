function init() {
    var stage = new createjs.Stage("demoCanvas");
    stage.enableMouseOver(10);
    var circle;
    var desc;
    var text;
    for (i = 0, x = 0, by = 20, ty = 156; i <= 41; i++, x++) {
        createjs.Ticker.addEventListener("tick", stage);
        var bitmap = new createjs.Bitmap("img/" + personajes[i].retrato);
        bitmap.x += x * 130;
        bitmap.y = by;
        bitmap.name = i;

        bitmap.on("mouseover", function (evt) {

            circle = new createjs.Shape();
            circle.graphics.beginFill("white").drawRect(0, 0, 205, 110);

            desc = new createjs.Text(
                "Sexo: " + personajes[this.name].sexo +
                "\nOrientaci\xF3n sexual: " + personajes[this.name].orientacionSexual +
                "\nComplexi\xF3n: " + personajes[this.name].complexion.nombre +
                "\nAltura: " + personajes[this.name].altura + "m" +
                "\nPersonalidad: " + personajes[this.name].personalidad.nombre +
                "\nClub: " + personajes[this.name].actividades.nombre +
                "\nArma: " + personajes[this.name].arma.nombre
                , "12px Arial");
            desc.textBaseline = "alphabetic";
            desc.textAlign = "center";

            if (this.x >= 600) {
                circle.x = this.x + -150;
                circle.y = this.y + 65;
                desc.x = this.x - 50;
                desc.y = this.y + 85;
            } else {
                circle.x = this.x + 70;
                circle.y = this.y + 65;
                desc.x = this.x + 170;
                desc.y = this.y + 85;
            }

            circle.alpha = 0;
            desc.alpha = 0;
            stage.addChild(circle);
            stage.addChild(desc);

            createjs.Tween.get(circle)
                .wait(20)
                .to({alpha: 0.95}, 300);
            createjs.Tween.get(desc)
                .wait(20)
                .to({alpha: 0.95}, 300);

            stage.update();
        });

        bitmap.on("mouseout", function (evt) {
            stage.removeChild(circle, desc);
            stage.update();
        });

        text = new createjs.Text(personajes[i].numeroAlumno + ": " + personajes[i].nombre + " " + personajes[i].apellido, "12px Arial", "#FFF");
        text.textBaseline = "alphabetic";
        text.x += x * 130;
        text.y = ty;

        if (i === 6 || i === 12 || i === 18 || i === 24 || i === 30 || i === 36) {
            bitmap.x = 0;
            bitmap.y = (((i / 6) + 1) * 150) - 138;

            text.x = 0;
            text.y = (((i / 6) + 1) * 150);

            x = 0;
            by = bitmap.y;
            ty = text.y;

        }
        bitmap.alpha = 0;
        text.alpha = 0;

        bitmap.image.onload = function () {
            stage.update();
        };
        stage.addChild(text);
        stage.addChild(bitmap);


        createjs.Tween.get(bitmap)
            .wait(1 + i * 100)
            .to({alpha: 1}, 1000);
        createjs.Tween.get(text)
            .wait(1 + i * 100)
            .to({alpha: 1}, 1000);
    }
    stage.update();
}