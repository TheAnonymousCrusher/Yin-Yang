//main staff
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use std::cmp;
use image::GenericImageView;
use image::Reader;

fn main() {
async fn index() -> impl Responder {
    "Hello world!"
}

#[actix_web::main]
async fn actix() -> std::io::Result<()> {
  let image_path = "img.jpg";
  .route("/image", web::get(|req: HttpRequest| {
  let image = std::fs::read(image_path).unwrap();
  let base64_image = base64::encode(image);
  HttpResponse::Ok().body(base64_image)
}
    HttpServer::new(|| {
    App::new().service(
// prefixes all resources and routes attached to it
    web::scope("/app")
//handles requests for `GET /app/index.html, and other frontend staff`
                .route("/index.html",main.js,css.css web::get().to(index)),
        )
    })
    .bind(("127.0.0.1", 8181))?
    .run()
    .await
}

//convert img to text
fn main(){
let img = image::open("img.png")
    .expect("File not found or supported");
for pixel in img.pixels()
let imgtext = Reader::new(data)
    .with_guessed_format()
    .expect("error 1");
let img = reader.decode()
    .expect("Failed to read image");
}

//50*2 words(50+, 50-)
let mut neg_text: String = 
"die",
"death",
"kill",
"crime",
"violence",
"war",
"poverty",
"hunger",
"disease",
"disaster",
"crash",
"accident",
"failure",
"decline",
"lost",
"end",
"worst",
"crisis",
"danger",
"threat",
"fear",
"worry",
"pain",
"suffer",
"loss",
"damage",
"broken",
"dirty",
"ugly",
"late",
"wrong",
"failed",
"rejected",
"lost",
"suspected",
"accused",
"convicted",
"injured",
"missing",
"fire",
"flood",
"earthquake",
"tsunami",
"tornado",
"hurricane",
"blizzard",
"heatwave",
"drought",
"pandemic",
"epidemic";
let pos_text: String =
,"new"
,"found"
,"breakthrough"
,"success"
,"win"
,"hope"
,"cure"
,"peace"
,"love"
,"happy"
,"progress"
,"growth"
,"improve"
,"achieve"
,"help"
,"support"
,"donate"
,"volunteer"
,"donate"
,"save"
,"heal"
,"relieve"
,"comfort"
,"support"
,"empower"
,"inspire"
,"celebrate"
,"optimistic"
,"promising"
,"bright"
,"future"
,"opportunity"
,"change"
,"better"
,"united"
,"together"
,"strong"
,"courageous"
,"determined"
,"resilience"
,"hopeful"
,"grateful"
,"blessed"
,"fortunate"
,"blessed"
,"amazing"
,"wonderful"
,"incredible"
,"milestone"
,"possibilities";

let mut text: String = imgtext, ttext;
let mut negativity_score = 0;
let mut positivity_score = 0;
for word in text.split_whitespace() {
        if neg_text.contains(&word) {
            negativity_score += 1;
        } else if pos_text.contains(&word) {
            positivity_score += 1;
        }
    }

    let yy_score = positive_sentiment_score - negative_sentiment_score;

    if total_sentiment_score > 0 {
        let pos_content= text;
        println!("The paragraph is positive.");
    } else if total_sentiment_score < 0 {
        let neg_content= text;
        println!("The paragraph is negative.");
    } else {
        let 0_content= text;
        println!("The paragraph is neutral.");
    }
}

