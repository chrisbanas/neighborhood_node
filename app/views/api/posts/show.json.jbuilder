json.extract! @post, :id, :body, :author_id, :neighborhood_id, :longitude, :latitude
json.photo_urls @post.photo.map {|photo| url_for(photo)}
