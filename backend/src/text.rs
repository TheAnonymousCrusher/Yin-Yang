use image::GenericImageView
use image::io::Reader;
fn main(){
let img = image::open("img.png")
    .expect("File not found or supported");
for pixel in img.pixels()
let imgtext = Reader::new(data)
    .with_guessed_format()
    .expect("error 1");
let img = reader.decode().expect("Failed to read image");

}
