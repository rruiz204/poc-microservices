use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct IndexResponse {
  pub path: String
}