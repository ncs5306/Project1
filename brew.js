function brew(app){
//brew function
    app.get("/brew", function (request, responce){

        responce
            .status(418)
            .send("I'm a teapot, so I cannot brew coffee!");

    });



}

module.exports = brew;