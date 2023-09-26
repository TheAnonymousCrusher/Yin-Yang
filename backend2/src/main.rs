use actix_web::{web, App, HttpResponse, HttpServer};
use std::cmp;
use image::GenericImageView;
use image::Reader;

#[actix_web::main]
// outputs fail or success?
async fn main() {

// JS hosting
const JSs = HttpServer::new(||{
    App::new().route("/main.js", web::get().to(HttpResponse::Ok))
})
         .workers(3)
         .bind(("127.0.0.1", 8080));

// HTM & CSS hosting
const HTMCSSs = HttpServer::new(|| { 
    App::new()
        .route("/home.htm", web::get().to(HttpResponse::Ok))
        .route("/main.css", web::get().to(HttpResponse::Ok))
})
              .bind(("127.0.0.1", 1010));

 }

// Content hosting

const content = HttpServer::new(||{
    App::new()
    .route("/content", web::get().top(HttpResponse::Ok))
})
    .bind(("127.0.0.1::9191"));

// content folder will have imgs and text in order, img->text->img->text....
// will be sent in that order
// line 1 of txt is title
// the rest is the actual content

// algorithm

fn imgt(){
const img: png = image::open("img.png")
    .expect("File not found or supported");
const img: String = reader.decode(image::open)
    .expect("File not found or supported");
for pixel in img.pixels()
{const imgt: Vec<&str> = vec! [Reader::new(data)]
    .with_guessed_format()
    .expect("error 1");
}
}

// 50*2 words(50+, 50-)
static neg_text: Vec<&str> = vec!["die", "death", "kill", "crime", "violence","war", "poverty", "hunger", "disease", "disaster", "crash", "accident", "failure", "decline", "lost", "end", "worst", "crisis", "danger", "threat", "fear", "worry", "pain", "suffer", "loss", "damage", "broken", "dirty", "ugly", "late", "wrong", "failed", "rejected", "lost", "suspected", "accused", "convicted", "injured", "missing", "fire", "flood", "earthquake","tsunami", "tornado", "hurricane", "blizzard", "heatwave", "drought", "pandemic", "epidemic";];

static pos_text: Vec<&str> = vec![,"new", "found","breakthrough","success","win","hope","cure","peace","love","happy","progress","growth","improve","achieve","help","support","donate","volunteer","donate","save","heal","relieve","comfort","support","empower","inspire","celebrate","optimistic","promising","bright","future","opportunity","change","better","united","together","strong","courageous","determined","resilience","hopeful","grateful","blessed","fortunate","blessed","amazing","wonderful","incredible","milestone","possibilities";];

static mut text: String = [&imgtext, &text];
static mut negativity_score: int32 =();
static mut positivity_score: int32 =();
const words: String = text.split_whitespace();
let word = (& words){
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
