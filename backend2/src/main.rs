use actix_web::{web, App, HttpResponse, HttpServer};


#[actix_web::main]
//outputs fail or success?
async fn main() {

//JS hosting
let JSs = HttpServer::new(||{
    App::new().route("/main.js", web::get().to(HttpResponse::Ok))
})
         .workers(3)
         .bind(("127.0.0.1", 8080));

//HTM & CSS hosting
let HTMCSSs = HttpServer::new(|| { 
    App::new()
        .route("/home.htm", web::get().to(HttpResponse::Ok))
        .route("/main.css", web::get().to(HttpResponse::Ok))
})
              .bind(("127.0.0.1", 1010));

 }

//Content hosting

let content = HttpServer::new(||{
    App::new()
    .route("/content", web::get().top(HttpResponse::Ok))

//content folder will have imgs and text in order, img->text->img->text....
//will be sent in that order
// line 1 of txt is title
// the rest is the actual content

