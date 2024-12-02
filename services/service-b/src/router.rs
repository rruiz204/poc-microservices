use rocket::Route;

use crate::controller::index;

pub fn get_routes() -> Vec<Route> {
  routes![index]
}
