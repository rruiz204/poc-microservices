use rocket::serde::json::Json;

use crate::model::IndexResponse;

#[get("/")]
pub fn index() -> Json<IndexResponse> {
  Json(IndexResponse { path: String::from("index") })
}