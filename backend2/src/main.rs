use actix_web::{web, App, HttpResponse, HttpServer};


#[actix_web::main]
//outputs fail or success?
async fn main() {

//JS hosting
let _ = HttpServer::new(||{
    App::new().route("/main.js", web::get().to(HttpResponse::Ok))
})
         .workers(3)
         .bind(("127.0.0.1", 8080));

//HTM & CSS hosting
let _ = HttpServer::new(|| { 
    App::new()
        .route("/home.htm", web::get().to(HttpResponse::Ok))
        .route("/style.css", web::get().to(HttpResponse::Ok))
})
              .bind(("127.0.0.1", 1010));

 }

