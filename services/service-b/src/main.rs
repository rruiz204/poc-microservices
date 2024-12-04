#[macro_use] extern crate rocket;

mod model;
mod router;
mod controller;

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/api", router::get_routes())
}